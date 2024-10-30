import Image from "next/image";
import { StaticImageData } from "next/image";
interface GuestDetailGridZuragProps {
	images: string[] | StaticImageData[];
}

export default function GuestDetailGridZurag({
	images,
}: GuestDetailGridZuragProps) {
	return (
		<div className="w-full grid grid-cols-4 gap-2 grid-rows-2">
			{images.map((image, index) => {
				return (
					<div
						key={index}
						className={`relative aspect-[4/3] ${
							index === 0 ? "col-span-2 row-span-2" : ""
						}`}
					>
						<Image
							src={image}
							alt="zurguud"
							fill
							sizes="(max-width: 768px) 100vw, 33vw"
							className="rounded-xl object-cover"
						/>
					</div>
				);
			})}
		</div>
	);
}
