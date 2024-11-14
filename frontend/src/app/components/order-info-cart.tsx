import Image from "next/image";

export default function OrderInfoCart({
  image,
  title,
  guestNumber,
  dateDuration,
  price,
  totalPrice,
}: {
  image: string;
  title: string;
  guestNumber: number;
  dateDuration: number;
  price: number;
  totalPrice: number;
}) {
  return (
    <div className="container w-full border border-green-500 rounded-xl p-4">
      <div className="w-full flex flex-col items-center space-y-2">
        <h1 className="font-bold text-2xl text-center">{title}</h1>
        <section className="relative w-full h-[20vh]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full object-center"
          />
        </section>
      </div>
      <div className="border-t border-b border-gray-400 py-4 my-4">
        <h1 className="text-center font-bold">Үнийн дэлгэрэнгүй мэдээлэл</h1>
        <div className="flex flex-row justify-between">
          <p className="underline-offset-1">Нийт зочны тоо</p>
          <p>{guestNumber}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="underline-offset-1">
            Хүсэлт илгээсэн нийт хоногийн тоо
          </p>
          <p>{dateDuration}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="underline-offset-1">Хоногийн төлбөр</p>
          <p>{price}$</p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <p className="font-bold text-lg">Нийт үнэ</p>
        <p>{totalPrice}$</p>
      </div>
    </div>
  );
}
