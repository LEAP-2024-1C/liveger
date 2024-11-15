// "use client";

// import CentBolgoh from "@/lib/centruushiljuuleh";
// import {
//   PaymentElement,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import { useEffect, useState } from "react";

// export default function PaymentConfirm({ amount }: { amount: number }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [errorMessage, setErrorMessage] = useState<string>();
//   const [clientSecret, setClientSecret] = useState("");
//   const [loading, setLoading] = useState(false);
//   const amountInCent = CentBolgoh(amount);
//   if (amountInCent <= 0) {
//     console.error("Invalid amount: Amount must be greater than 0");
//     return;
//   }
//   useEffect(() => {
//     fetch("/api/create-payment-route", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ amount: amountInCent }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, [amount]);
//   //   const payPyament = async () => {
//   //     try {
//   //       const respo = await axios.post(
//   //         `/api/create-payment-route`,
//   //         {
//   //           amount: CentBolgoh(amount),
//   //         },
//   //         { headers: { "Content-Type": "application/json" } }
//   //       );
//   //       if (respo.status === 200) {
//   //         return setClientSecret(respo.data.tulburTulult);
//   //       } else {
//   //         console.error("payPyament yamar negen aldaa garlaa");
//   //       }
//   //     } catch (error) {
//   //       console.error("Error creating payment intent:", error);
//   //     }
//   //   };
//   //   useEffect(() => {
//   //     payPyament();
//   //   }, [amount]);
//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setLoading(true);

//     if (!stripe || !elements) {
//       return;
//     }
//     const { error: submitError } = await elements.submit();
//     if (submitError) {
//       setErrorMessage(submitError.message);
//       setLoading(false);
//       return;
//     }
//     const { error } = await stripe.confirmPayment({
//       elements,
//       clientSecret,
//       confirmParams: {
//         return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
//       },
//     });

//     if (error) {
//       setErrorMessage(error.message);
//     } else {
//     }

//     setLoading(false);
//   };
//   if (!clientSecret || !stripe || !elements) {
//     return (
//       <div className="flex items-center justify-center">
//         <div
//           className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
//           role="status"
//         >
//           <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//             Loading...
//           </span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <form>
//       {clientSecret && <PaymentElement />}{" "}
//       {errorMessage && <div>{errorMessage}</div>}
//       <button
//         disabled={!stripe || loading}
//         className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
//       >
//         {!loading ? `Pay $${amount}` : "Processing..."}
//       </button>
//     </form>
//   );
// }