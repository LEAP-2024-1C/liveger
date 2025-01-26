"use client";
import * as React from "react";
import { format } from "date-fns";
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
import { toast } from "react-toastify";

interface BookingCardProps {
  onBookingRequest: (
    startDate: Date | null,
    endDate: Date | null,
    numberOfGuests: number | null,
    placeId: string | null
  ) => void;
  thisplaceId: string | null; // Merge the placeId prop into BookingCardProps
  // className: React.HTMLAttributes<HTMLDivElement>;
  orderedDateRanges: { from: Date; to: Date }[];
}
export default function BookingCard({
  onBookingRequest,
  thisplaceId,
  orderedDateRanges,
}: BookingCardProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null); // Keeping date as string to match input values
  const [numberOfGuests, setNumberOfGuests] = useState<number | null>(null);
  const [date, setDate] = React.useState<DateRange | undefined>();
  const handleBookingRequest = (date: DateRange) => {
    if (!date.from || !date.to) {
      toast.error("Please select a date range!");
      return;
    }
    if (!numberOfGuests || numberOfGuests <= 0) {
      toast.error("Please enter a number of guests!");
      return;
    }
    setStartDate(date.from);
    setEndDate(date.to);
    onBookingRequest(startDate, endDate, numberOfGuests, thisplaceId);
  };
  return (
    <Card className="shadow-xl border-4 border-green-600 rounded-xl p-4">
      <CardHeader className="text-2xl font-bold">Захиалга</CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <div className={cn("grid gap-2")}>
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
                onSelect={(orderedDate) => {
                  const isOrdered = orderedDateRanges.some(
                    (range) =>
                      orderedDate?.from &&
                      orderedDate.to &&
                      orderedDate.from <= range.to &&
                      orderedDate.to >= range.from
                  );
                  if (isOrdered) return;
                  setDate(orderedDate);
                }}
                numberOfMonths={2}
                disabled={orderedDateRanges}
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
            handleBookingRequest(date!);
          }}
        >
          Захиалгийн хүсэлт илгээх
        </Button>
      </CardContent>
    </Card>
  );
}
