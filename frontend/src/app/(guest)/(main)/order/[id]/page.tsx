"use client";
import OrderInfoCart from "@/app/components/order-info-cart";
import { Button } from "@/components/ui/button";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js/pure";
// import CentBolgoh from "@/lib/centruushiljuuleh";
// import {
//   PaymentElement,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// if (stripePublicKey === undefined) {
//   throw new Error("stripePublicKey is not defined");
// }

// const stripePromise = loadStripe(stripePublicKey);

export default function ConfirmOrderPage() {
  const params = useParams();
  // const stripe = useStripe();
  // const elements = useElements();
  // const [errorMessage, setErrorMessage] = useState<string>();
  // const [clientSecret, setClientSecret] = useState("");
  // const [loading, setLoading] = useState(false);
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
      const response = await axios.get(`${apiUrl}/api/v1/order/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setOrder(response.data.findOnlyOrder);
        response.data.findOnlyOrder;
      }
    } catch (error) {
      console.error("hamgiin suuld hiisen orderiig harah amjiltgui", error);
    }
  };
  // const amount = order.totalPrice;
  // if (amount <= 0) {
  //   console.error("Invalid amount: Amount must be greater than 0");
  //   return;
  // }
  // console.log("amountiig harah", amount);
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
      // const respo = await axios.post(
      //   `/api/create-payment-route`,
      //   { amount },
      //   { headers: { "Content-Type": "application/json" } }
      // );
      if (responce.status === 200) {
        toast.success("Захиалгыг баталгаажууллаа.");
        // setClientSecret(respo.data.clientSecret);
        return;
      }
    } catch (error) {
      console.error("zahialga batagaajuulaad pushlehed aldaa garlaa", error);
    }
  };
  useEffect(() => {
    getOrder();
  }, []);

  const sDate = new Date(order.startDate);
  const eDate = new Date(order.endDate);
  const dateRangeInMillSec: number = Math.abs(
    eDate.getTime() - sDate.getTime() + 1000 * 60 * 60 * 24
  );
  const millsecInDay: number = 1000 * 60 * 60 * 24;
  const dateRange: number = Math.floor(dateRangeInMillSec / millsecInDay);
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setLoading(true);

  //   if (!stripe || !elements) {
  //     return;
  //   }
  //   const { error: submitError } = await elements.submit();
  //   if (submitError) {
  //     setErrorMessage(submitError.message);
  //     setLoading(false);
  //     return;
  //   }
  //   const { error } = await stripe.confirmPayment({
  //     elements,
  //     clientSecret,
  //     confirmParams: {
  //       return_url: `http://www.localhost:3000/paymentsuccess?amount=${amount}`,
  //     },
  //   });

  //   if (error) {
  //     setErrorMessage(error.message);
  //   } else {
  //   }

  //   setLoading(false);
  // };
  // if (!clientSecret || !stripe || !elements) {
  //   return (
  //     <div className="flex items-center justify-center">
  //       <div
  //         className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
  //         role="status"
  //       >
  //         <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
  //           Loading...
  //         </span>
  //       </div>
  //     </div>
  //   );
  // }
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
              <h1>Billing address</h1>
              {/* <Elements
                stripe={stripePromise}
                options={{
                  mode: "payment",
                  amount: CentBolgoh(amount),
                  currency: "usd",
                }}
              >
                <form onSubmit={handleSubmit}>
                  {clientSecret && <PaymentElement />}
                  {errorMessage && <div>{errorMessage}</div>}
                </form>
              </Elements> */}
            </div>
            <Button
              onClick={confirmOrderAndPushDates}
              // className="text-white"
              // onClick={confirmOrderAndPushDates}
              // disabled={!stripe || loading}
            >
              Захиалга баталгаажуулах
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
