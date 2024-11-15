import { stripeSecKey } from "@/utils/util";
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(stripeSecKey);
export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();
    const paymentIntent = await stripe.paymentsIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });
    return NextResponse.json(
      { clientSecret: paymentIntent.client_secret },
      { status: 200 }
    );
  } catch (error) {
    console.error("striperouted yamar negen aldaa garlaa", error);
    return NextResponse.json(
      { error: `striperouted yamar negen aldaa garlaa: ${error}` },
      { status: 500 }
    );
  }
}
