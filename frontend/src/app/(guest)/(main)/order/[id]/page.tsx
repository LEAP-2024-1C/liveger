"use client";
import OrderInfoCart from "@/app/components/order-info-cart";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ConfirmOrderPage() {
  const params = useParams();
  const [order, setOrder] = useState({
    numberOfPeople: 0,
    place: { images: [""], title: "", price: 0 },
    startDate: "",
    endDate: "",
    totalPrice: 0,
  });
  const getOrder = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        ` http://localhost:9002/api/v1/order/${params.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        setOrder(response.data.findOnlyOrder);
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
  console.log("get one orderiig harah ------", order);
  const objectOrder = { ...order };
  console.log("get one orderiig harah ------", objectOrder);
  const sDate = new Date(order.startDate);
  const eDate = new Date(order.endDate);
  const dateRangeInMillSec: number = Math.abs(
    eDate.getTime() - sDate.getTime() + 1000 * 60 * 60 * 24
  );
  const millsecInDay: number = 1000 * 60 * 60 * 24;
  const dateRange: number = Math.floor(dateRangeInMillSec / millsecInDay);
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
            // image={order.place.images[0]}
            title={order.place.title}
            guestNumber={order.numberOfPeople}
            dateDuration={dateRange}
            totalPrice={order.totalPrice}
            price={order.place.price}
          />
        </div>
      </div>
    </div>
  );
}
