"use client";
import * as React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BookingCardProps {
  onBookingRequest: (
    startDate: string | null,
    endDate: string | null,
    numberOfGuests: number | null,
    placeId: string | null
  ) => void;
  thisplaceId: string | null; // Merge the placeId prop into BookingCardProps
  className: React.HTMLAttributes<HTMLDivElement>;
}
export default function BookingCard({
  onBookingRequest,
  thisplaceId,
  className,
}: BookingCardProps) {
  // const [startDate, setStartDate] = useState<string | null>(null);
  // const [endDate, setEndDate] = useState<string | null>(null); // Keeping date as string to match input values
  // const [numberOfGuests, setNumberOfGuests] = useState<number | null>(null);
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  return (
    <Card className="shadow-xl border-4 border-green-600 rounded-xl p-4">
      <CardHeader className="text-2xl font-bold">Захиалга</CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <div className={cn("grid gap-2", className)}>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-[300px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
        <input
          type="number"
          name="numberofguests"
          placeholder="Хоногтой хүмүүс"
          onChange={(e) => {
            const value = e.target.value;
            setNumberOfGuests(value ? parseInt(value) : null); // Allow clearing input
          }}
        />
        <Button
          className="text-xl font-bold"
          onClick={() => {
            onBookingRequest(startDate, endDate, numberOfGuests, thisplaceId);
          }}
        >
          Захиалгийн хүсэлт илгээх
        </Button>
      </CardContent>
    </Card>
  );
}
