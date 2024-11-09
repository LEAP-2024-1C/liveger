import AddAvailableTodo from "@/app/components/host/add_ger/add_available_todo";
import AddDescription from "@/app/components/host/add_ger/add_description";
import AddPhoto from "@/app/components/host/add_ger/add_photo";
import AddPoGuestNumber from "@/app/components/host/add_ger/add_poguest_number";
import AddPrice from "@/app/components/host/add_ger/add_price";
import AddTitle from "@/app/components/host/add_ger/add_title";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Todo = { title: string; description: string };
export default function AddPlace() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [guestNumber, setGuestNumber] = useState(0);
  const [availableTodo, setAvailableTodo] = useState<Todo[]>([]);
  const [images, setImages] = useState([]);
  return (
    <div className="py-4 flex flex-col gap-4 sm:py-8 min-h-[100vh]">
      <div className="grid grid-cols-1 container mx-auto md:grid-cols-2 gap-4">
        <AddPhoto image_data={images} />
        <AddTitle title={title} setTitle={setTitle} />
        <AddDescription
          description={description}
          setDescription={setDescription}
        />
        <AddPrice price={price} setPrice={setPrice} />
        <AddPoGuestNumber
          guest_number={guestNumber}
          setGuestNumber={setGuestNumber}
        />
        <AddAvailableTodo
          available_todo={availableTodo}
          setAvailableTodo={setAvailableTodo}
        />
      </div>
      <Button>Өөрчлөлтийг хадгалах</Button>
    </div>
  );
}
