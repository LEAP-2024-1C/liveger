"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

// Add props interface
interface Todo {
	id: number;
	name: string;
	Description: string;
	checked: boolean;
}

interface EditAvailableTodoProps {
	available_todo: Todo[];
}

function EditAvailableTodo({ available_todo }: EditAvailableTodoProps) {
	const [todoDescription, setTodoDescription] = useState("");
	const [checkedTodo, setCheckedTodo] = useState<Todo[]>([]);
	const [availableTodo, setAvailableTodo] = useState<Todo[]>(available_todo);
	const [newTodo, setNewTodo] = useState("");

	return (
		<div className="container mx-auto border border-green-400 rounded-xl p-6">
			<h1 className="font-bold text-2xl">Үйлдэлүүд</h1>
			<p className="text-muted-foreground mb-8">
				Гэрийн үйлдэлүүдийг сонгоно уу.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{availableTodo.map((todo: Todo, index: number) => (
					<div
						key={index}
						className="flex items-center gap-2 border border-green-400 rounded-xl"
					>
						<Checkbox
							key={todo.id}
							checked={todo.checked}
							onClick={() => {
								const updatedTodo = { ...todo, checked: !todo.checked };
								const updatedAvailableTodo = availableTodo.map((t) =>
									t.id === todo.id ? updatedTodo : t
								);
								setAvailableTodo(updatedAvailableTodo);
								setCheckedTodo([...checkedTodo, updatedTodo]);
							}}
						/>
						<div className="flex flex-col">
							<h1 className="text-sm font-bold">{todo.name}:</h1>
							<p className="text-sm">{todo.Description}</p>
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
					<Button
						onClick={() =>
							setAvailableTodo([
								...availableTodo,
								{
									id: availableTodo.length + 1,
									name: newTodo,
									checked: false,
									Description: todoDescription,
								},
							])
						}
					>
						Нэмэх
					</Button>
				</div>
			</div>
		</div>
	);
}

export default EditAvailableTodo;
