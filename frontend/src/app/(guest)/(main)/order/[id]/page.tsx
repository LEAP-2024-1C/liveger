"use client";
import OrderInfoCart from "@/app/components/order-info-cart";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ConfirmOrderPage() {
  const params = useParams();
  const [getOneOrder, setGetOneOrder] = useState([
    {
      place: { images: [], title: "" },
    },
  ]);
  const getOrder = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        ` http://localhost:9002/api/v1/order/${params.id}/get-order`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        setGetOneOrder(response.data.findOnlyOrder);
        console.log(
          "hamgiin suuld hiisen orderiig harah amjilttai",
          response.data.findOnlyOrder
        );
      }
    } catch (error) {
      console.error("hamgiin suuld hiisen orderiig harah amjiltgui", error);
    }
  };
  useEffect(() => {
    getOrder();
  }, []);
  console.log("get one orderiig harah ------", getOneOrder);
  const objectGetOneOrder = { ...getOneOrder };
  console.log("get one orderiig harah ------", objectGetOneOrder);

  return (
    <div className="px-48">
      <Link href={`/place/${params.id}`}>
        <div className="flex flex-row items-center space-x-3">
          <IoMdArrowRoundBack />
          <h1>Өмнөх хуудас руу буцах</h1>
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-x-12">
        <div className="w-full bg-slate-600"></div>
        <div className="">
          <OrderInfoCart
            // image={getOneOrder[0].place?.images[0]}
            title={getOneOrder[0].place?.title}
          />
        </div>
      </div>
    </div>
  );
}
