import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";

export const proofCard = () => {
  return (
    <div>
      <div>
        <Image
          src={imageSrc}
          alt="host profile"
          fill
          className="object-contain rounded-full border-2 border-green-400 p-1 "
        />
        <h3></h3>
        <h4></h4>
        <MdOutlineStar />
      </div>
    </div>
  );
};
cd;
