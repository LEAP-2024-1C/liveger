"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "@/utils/util";

// Add props interface
export interface Todo {
  _id: string;
  name: string;
  description: string;
  isChecked: boolean;
}

interface AddAvailableTodoProps {
  available_todo: Todo[];
  setAvailableTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function AddAvailableTodo({
  available_todo,
  setAvailableTodo,
}: AddAvailableTodoProps) {
  const [todoDescription, setTodoDescription] = useState("");
  const [checkedTodo, setCheckedTodo] = useState<Todo[]>([]);
  checkedTodo;
  const [newTodo, setNewTodo] = useState("");
  const [hutulburs, setHutulburs] = useState<Todo[]>([]);

  const getHutulburs = async () => {
    try {
      const respo = await axios.get(`${apiUrl}/api/v1/service`);
      if (respo.status === 201) {
        setHutulburs(respo.data.services);
      }
    } catch (error) {
      console.error("serviceuudiig harahad yamar negen aldaa garlaa", error);
    }
  };

  const createService = async () => {
    const token = localStorage.getItem("token");
    try {
      const respo = await axios.post(
        `${apiUrl}/api/v1/service/create`,
        { name: newTodo, description: todoDescription, isChecked: true },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (respo.status === 201) {
        toast.success("шинэ хөтөлбөрийг амжилттай үүсгэлээ.", {
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error("шинэ хөтөлбөр нэмэхэд ямар нэгэн алдаа гарлаа", error);
      toast.error("шинэ хөтөлбөр нэмэхэд ямар нэгэн алдаа гарлаа", {
        autoClose: 1000,
      });
    }
  };

  useEffect(() => {
    getHutulburs();
  }, []);

  return (
    <div className="container mx-auto border border-green-400 rounded-xl p-6">
      <h1 className="font-bold text-2xl">Хөтөлбөрүүд</h1>
      <p className="text-muted-foreground mb-8">
        Гэрийн үйлдэлүүдийг сонгоно уу.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hutulburs.map((hutulbur: Todo, index: number) => (
          <div
            key={index}
            className="flex items-center gap-2 border border-green-400 rounded-xl"
          >
            <Checkbox
              key={hutulbur._id}
              checked={hutulbur.isChecked}
              onClick={() => {
                const updatedTodo = {
                  ...hutulbur,
                  isChecked: !hutulbur.isChecked,
                };
                const updatedAvailableTodo = available_todo?.map((t) =>
                  t._id === hutulbur._id ? updatedTodo : t
                );
                setAvailableTodo(updatedAvailableTodo);
                if (updatedTodo.isChecked) {
                  setCheckedTodo((prev) => [...prev, updatedTodo]);
                } else {
                  setCheckedTodo((prev) =>
                    prev.filter((t) => t._id !== hutulbur._id)
                  );
                }
              }}
            />
            <div className="flex flex-col">
              <h1 className="text-sm font-bold">{hutulbur.name}:</h1>
              <p className="text-sm">{hutulbur.description}</p>
            </div>
          </div>
        ))}
        <div className="flex flex-col border border-green-400 w-52 rounded-xl p-4 gap-2">
          <Input
            type="text"
            placeholder="Үйлдэлийн нэр"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Үйлдлийн тайлбар"
            onChange={(e) => setTodoDescription(e.target.value)}
          />
          <Button onClick={createService}>Нэмэх</Button>
        </div>
      </div>
    </div>
  );
}
