import { Card } from "antd";
import Image from "next/image";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineStar } from "react-icons/md";

export function ProofCard({
  image,
  firstName,
  lastName,
  startHostDate,
  myWork,
  skills,
  timeToSpend,
  obsessedWith,
  detailDescription,
}: {
  image: string;
  firstName: string;
  lastName: string;
  startHostDate: ReactNode;
  myWork: string;
  skills: string;
  timeToSpend: string;
  obsessedWith: string;
  detailDescription: string;
}) {
  return (
    <Card className="relative w-[450px] h-[350px] border-green-500 flex flex-col justify-center items-center max-sm:w-[410px]">
      <div>
        <Image
          src={image}
          alt="host zuraguud"
          fill
          className="  w-[100px] h-[100px]"
        />
        <div>
          <h3>Couplespod at Riverstone House Portfolio</h3>
          <h4>Farm stay</h4>
          <MdOutlineStar />
          <BsFillPersonFill />
        </div>
      </div>
      <div className=" w-[420px] h-[2px] bg-slate-500"></div>
      <div>
        <h2></h2>
        <ol>
          <li>
            <BsFillPersonFill /> <h5></h5>
          </li>
          <li></li>
          <li></li>
        </ol>
      </div>
      <div className=" w-[420px] h-[2px] bg-slate-500"></div>
      <div></div>
    </Card>
  );
}
