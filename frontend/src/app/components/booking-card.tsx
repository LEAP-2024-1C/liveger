import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BookingCardProps {
	onBookingRequest?: () => void;
}

export default function BookingCard({ onBookingRequest }: BookingCardProps) {
	return (
		<Card className=" shadow-xl border-4 border-green-600 rounded-xl p-4">
			<CardHeader className="text-2xl font-bold">Захиалгатай</CardHeader>
			<CardContent className="flex flex-col space-y-4">
				<Button className="text-xl font-bold" onClick={onBookingRequest}>
					Захиалгийн хүсэлт илгээх
				</Button>
			</CardContent>
		</Card>
	);
}
