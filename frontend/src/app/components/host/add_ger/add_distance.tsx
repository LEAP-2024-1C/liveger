import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "react-toastify";

interface AddDistanceProps {
  distance: number;
  setDistance: React.Dispatch<React.SetStateAction<number>>;
}
export default function AddDistance({
  distance,
  setDistance,
}: AddDistanceProps) {
  const [addDistance, setaddDistance] = useState(distance);
  return (
    <div className="container mx-auto border border-green-400 rounded-xl p-6">
      <h1 className="font-bold text-2xl">
        Улаанбаатараас {addDistance} км ийн зайд
      </h1>
      <p className="text-muted-foreground mb-8">
        Таны гэр нийслэл Улаанбаатараас хэдэн км - ийн зайд оршдог вэ?
      </p>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold"></h1>

        <Input
          type="number"
          value={addDistance}
          onChange={(e) => {
            setaddDistance(Number(e.target.value));
          }}
          placeholder="100 км"
        />
      </div>
      <div className="flex justify-end">
        <Button
          className="min-m-4 my-auto"
          onClick={() => {
            setDistance(addDistance);
            toast.success(
              "Улаанбаатараас тус байршил хүртэлх зайг амжилттай хадгаллаа."
            );
          }}
        >
          Хадгалах
        </Button>
      </div>
    </div>
  );
}
