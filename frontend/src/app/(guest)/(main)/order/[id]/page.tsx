"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ConfirmOrderPage() {
  const params = useParams();
  const [getOneOrder, setGetOneOrder] = useState();
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
  return (
    <div className="px-48">
      <div>Өмнөх хуудас руу буцах</div>
      <div className="grid grid-cols-2 gap-x-12">
        <div className="w-full bg-slate-600"></div>
        <div className="w-full bg-orange-300">dsfds</div>
      </div>
    </div>
  );
}
