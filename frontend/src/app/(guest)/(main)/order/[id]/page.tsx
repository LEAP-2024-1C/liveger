"use client";
import OrderInfoCart from "@/app/components/order-info-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiUrl } from "@/lib/utils";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";

export default function ConfirmOrderPage() {
  const params = useParams();
  // const router = useRouter();
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
      const response = await axios.get(` ${apiUrl}/api/v1/order/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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

  const confirmOrderAndPushDates = async () => {
    const token = localStorage.getItem("token");
    try {
      const responce = await axios.put(
        `${apiUrl}/api/v1/order/confirm/${params.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (responce.status === 200) {
        console.log("tulbur tulult amjilttai");
        toast.success("Захиалгыг баталгаажууллаа.");
      }
    } catch (error) {
      console.error("zahialga batagaajuulaad pushlehed aldaa garlaa", error);
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
    <div className="mt-24 px-48">
      <Link href={`/place/${params.id}`}>
        <div className="flex flex-row text-2xl font-semibold items-center space-x-3">
          <IoMdArrowRoundBack />
          <h1>Back</h1>
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-x-12">
        <div className="w-full ">
          <div></div>
          <div className="w-full border-t border-green-500">
            <h1 className="font-semibold text-2xl">Pay with</h1>
            <div>
              <Input />
              <Input />
              <Input />
              <h1>Billing address</h1>
            </div>
            <Button className="text-white" onClick={confirmOrderAndPushDates}>
              Төлбөр төлөх
            </Button>
          </div>
        </div>
        <div className="">
          <OrderInfoCart
            image={order.place.images[0]}
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
