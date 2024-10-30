import Image from "next/image";

interface HostProfileProps {
	name: string;
	title?: string;
	imageSrc?: string;
}

export default function HostProfile({
	name,
	title = "Эзэн айл",
	imageSrc = "/pro1.png",
}: HostProfileProps) {
	return (
		<div className="border-b border-t border-green-500 flex flex-row space-x-6 py-4">
			<div className="relative w-[60px] h-[60px] flex items-center bg-green-50  justify-center">
				<Image
					src={imageSrc}
					alt="host profile"
					fill
					className="object-contain rounded-full border-2 border-green-400 p-1 "
				/>
			</div>
			<div>
				<h1 className="font-bold text-2xl">{name}</h1>
				<p className="text-green-600 text-lg">{title}</p>
			</div>
		</div>
	);
}
