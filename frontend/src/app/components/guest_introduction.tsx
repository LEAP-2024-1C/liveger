import { useRef } from "react";
import Image from "next/image";
export function GuestIntro() {
	const ref = useRef(null);
	return (
		<div className="container py-14 mx-auto">
			<div className="w-full space-y-8">
				<h1 className="text-emerald-700 font-extrabold text-3xl text-center">
					Tourists visiting Mongolian nomadic tribes can experience our
					traditional lifestyle and hospitality in a number of ways
				</h1>
				<div ref={ref} className="scrollXCon w-full">
					<div className="perCon shadow-xl flex flex-col justify-center items-center p-3 space-y-4">
						<h1 className="text-emerald-700 font-bold text-2xl">Homestay</h1>
						<p className="w-full">
							Stay with a nomadic family for a few days and take part in their
							daily lives. You can help with herding, milking animals, and
							producing dairy products.
						</p>
						<section className="h-full w-full relative">
							<Image
								src="/homestay.jpg"
								alt="homestay"
								fill
								className="object-cover absolute rounded-xl object-top"
							/>
						</section>
					</div>
					<div className="perCon">
						<h1 className="text-emerald-700 font-bold text-2xl">
							Learn about golden eagle hunting
						</h1>
						<p className="w-full">
							Learn about the tradition of capturing, training, and hunting
							golden eagles.
						</p>
						<div>
							<section className="h-full w-full relative">
								<Image
									src="https://cdn.shopify.com/s/files/1/1670/9563/files/Josh_Eagle_large.jpg?v=1533213813"
									alt="eagle"
									fill
									className="object-cover absolute rounded-xl"
								/>
							</section>
							<section className="h-full w-1/2 relative"></section>
						</div>
					</div>
					<div className="perCon"></div>
					<div className="perCon"></div>
					<div className="perCon"></div>
				</div>
			</div>
		</div>
	);
}
