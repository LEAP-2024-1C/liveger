import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface AddLocationProps {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}
export default function AddLocation({
  location,
  setLocation,
}: AddLocationProps) {
  const [addLocation, setaddLocation] = useState(location);
  return (
    <div className="container mx-auto border border-green-400 rounded-xl p-6">
      <h1 className="font-bold text-2xl">Хаяг: {addLocation}</h1>
      <p className="text-muted-foreground mb-8">
        Та өөрийн гэрийн байршлыг оруулна уу?
      </p>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold"></h1>

        <Input
          type="text"
          onChange={(e) => {
            setaddLocation(e.target.value);
          }}
          placeholder="Өвөрхангай аймгийн Төгрөг сумын ..."
        />
      </div>
      <div className="flex justify-end">
        <Button
          className="min-m-4 my-auto"
          onClick={() => {
            setLocation(addLocation);
          }}
        >
          Хадгалах
        </Button>
      </div>
    </div>
  );
}
