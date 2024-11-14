import { useRef } from "react";
import Image from "next/image";
export function GuestIntro() {
  const ref = useRef(null);
  return (
    <div className="container py-14 mx-auto">
      <div className="w-full space-y-8">
        <h1 className="text-emerald-700 font-extrabold text-3xl text-center">
          Tourists visiting Mongolian nomadic tribes can experience our
          traditional lifestyle and hospitality in a number of ways
        </h1>
        <div ref={ref} className="scrollXCon w-full">
          <div className="perCon shadow-xl flex flex-col justify-center items-center p-3 space-y-4">
            <h1 className="text-emerald-700 font-bold text-2xl">Homestay</h1>
            <p className="w-full">
              Stay with a nomadic family for a few days and take part in their
              daily lives. You can help with herding, milking animals, and
              producing dairy products.
            </p>
            <section className="h-full w-full relative">
              <Image
                src="/homestay.jpg"
                alt="homestay"
                fill
                className="object-cover absolute rounded-xl object-top"
              />
            </section>
          </div>
          <div className="perCon shadow-xl flex flex-col justify-center items-center p-3 space-y-4">
            <h1 className="text-emerald-700 font-bold text-2xl">
              Learn about golden eagle hunting
            </h1>
            <p className="w-full">
              Learn about the tradition of capturing, training, and hunting
              golden eagles.
            </p>
            <section className="h-full w-full relative">
              <Image
                src="/eagle.webp"
                alt="homestay"
                fill
                className="object-cover absolute rounded-xl object-center"
              />
            </section>
          </div>
          <div className="perCon shadow-xl flex flex-col justify-center items-center p-3 space-y-4">
            <h1 className="text-emerald-700 font-bold text-2xl">
              Taste milk tea
            </h1>
            <p className="w-full">
              Milk tea is a daily drink that symbolizes good fortune and
              pure-heartedness.
            </p>
            <section className="h-full w-full relative">
              <Image
                src="/mongolian-drink.jpg"
                alt="homestay"
                fill
                className="object-cover absolute rounded-xl object-center"
              />
            </section>
          </div>
          <div className="perCon shadow-xl flex flex-col justify-center items-center p-3 space-y-4">
            <h1 className="text-emerald-700 font-bold text-2xl">
              Cook traditional meals
            </h1>
            <p className="w-full">
              Traditional meals include meat, flour, rice, and vegetables.
            </p>
            <section className="h-full w-full relative">
              <Image
                src="/nomadicfood.webp"
                alt="homestay"
                fill
                className="object-cover absolute rounded-xl object-center"
              />
            </section>
          </div>
          <div className="perCon shadow-xl flex flex-col justify-center items-center p-3 space-y-4">
            <h1 className="text-emerald-700 font-bold text-2xl">
              Rest in a Mongolian ger
            </h1>
            <p className="w-full">Stay in a traditional Mongolian dwelling.</p>
            <section className="h-full w-full relative">
              <Image
                src="/gerger.jpg"
                alt="homestay"
                fill
                className="object-cover absolute rounded-xl"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
