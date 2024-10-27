import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FaRegUser } from 'react-icons/fa'
interface DayProps {
  blocked: boolean;
  date: number;
  guestsPhoto: string;
  price: number;
  guestCount: number;
  isHostBlocked: boolean;
}

function Day({ blocked, date, guestsPhoto, price, guestCount, isHostBlocked }: DayProps) {
  return (
    <div className={`day h-32 sm:h-28 md:h-32 w-full flex flex-col border border-green-400 items-center justify-between rounded-lg ${blocked ? "bg-gray-200" : "bg-white"} p-1 sm:p-2`}>
      <div className='flex flex-col sm:flex-row gap-1  w-full items-center justify-between text-xs sm:text-sm'>
        <div className={`font-bold ${blocked ? "text-gray-500" : ""}`}>
          {date}
        </div>
        <div className={`font-bold ${blocked ? "text-gray-500" : ""}`}>
          {price}$
        </div>
      </div>
      <div className='flex w-full items-center justify-center'>
        {guestsPhoto ? (
          <div className='flex flex-col items-center '>
            {/* <Image src={guestsPhoto} alt="зочин" width={20} height={20} className='rounded-full bg-green-200 w-10 h-10 sm:w-14 sm:h-14' /> */}
            <FaRegUser className="text-gray-600 bg-green-200 rounded-full w-10 h-10 sm:w-14 sm:h-14" />
            <span className='font-bold text-xs sm:text-sm mt-1'>{guestCount} зочин</span>
          </div>
        ) : blocked ? (<div>
          <span className="hidden sm:block font-bold text-xs sm:text-sm text-center bg-red-400 rounded-full p-1">
            {isHostBlocked ? "Та хаасан" : "Хаагдсан"}
          </span>
          <div className={`  ${isHostBlocked ? " bg-red-400 p-3 rounded-full sm:hidden" : ""}`}>
          </div>
          </div>
          
        ) : (
          <span className='font-bold text-xs sm:text-sm bg-green-400 rounded-full p-1'>
            сул
          </span>
        )}
      </div>
    </div>
  )
}

export default Day
