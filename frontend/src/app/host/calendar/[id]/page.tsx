"use client";
import React from 'react'
import Calendar from '@/app/components/host/calendar/calendar'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link  from 'next/link'

const mockData_host_blocked = [
  {
    "startdate": "2024-10-27",
    "enddate": "2024-10-28",
  },
]
import ger from '@/app/media/images_mock_data/ger baigal 1.jpg'
const mockData_guests = [
  {
    "id": 1,
    "howmany_guests": 2,
    "startdate": "2024-10-30",
    "enddate": "2024-11-01",
    "photo": "/placeholder-image-1.jpg"
  },  
]

function Page() {
  const params = useParams()
  const cardId = params.id

  return (
    <div className='py-4 sm:py-8 flex'>
      <div className="w-full container h-full flex justify-between p-8 fixed">
        <div className='relative h-32 w-32 rounded-xl opacity-50'>
            <Image 
              src={ger} 
              alt="mock data" 
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
        </div>
        <h1 className='text-center text-sm font-bold bg-green-400 rounded-xl p-2 opacity-50 h-fit'>
          Хүлээгдэж буй мөнгө:
          1,000,000₮
        </h1>
      </div>

      <Calendar hostBlockedData={mockData_host_blocked} guestData={mockData_guests} />
    </div>
  )
}

export default Page
