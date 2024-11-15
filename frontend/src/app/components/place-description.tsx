interface PlaceDescriptionProps {
  description: string;
  title?: string;
}

export default function PlaceDescription({
  description,
  title = "Description",
}: PlaceDescriptionProps) {
  return (
    <div className="mt-8 border border-green-400 rounded-xl shadow-xl p-4">
      <h1 className="font-bold text-3xl">{title}:</h1>

      <p className=" text-2xl font-semibold mt-2">{description}</p>
    </div>
  );
}
