import Image from "next/image";

export default function OrderInfoCart({
  //   image,
  title,
}: {
  //   image: string;
  title: string;
}) {
  return (
    <div className="container w-full border border-green-500 rounded-xl p-4">
      <div>
        {/* <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className=""
        /> */}
        <h1>{title}</h1>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
