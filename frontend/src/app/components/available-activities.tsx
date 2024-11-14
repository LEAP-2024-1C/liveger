interface Todo {
	id: string;
	name: string;
	description: string;
}

interface AvailableActivitiesProps {
	activities: Todo[];
}

export default function AvailableActivities({
	activities,
}: AvailableActivitiesProps) {
	return (
		<div className="border-2 border-green-400 rounded-xl shadow-xl p-4">
			<h1 className="text-3xl font-bold">Available Activities:</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{activities.map((todo: Todo, index: number) => (
					<div
						key={index}
						className="flex items-center border-4 gap-4 mt-8 border-green-400 rounded-xl shadow-xl p-4"
					>
						<div className="flex flex-col">
							<h1 className="text-2xl font-bold">{todo.name}:</h1>
							<p className="text-lg">{todo.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
