import React from 'react'
import { useLoaderData } from 'react-router-dom'
import RoomReservation from './RoomReservation';

const RoomDetails = () => {

    const room = useLoaderData();

  return (
    <div className='w-10/12 mx-auto mb-[100px] pt-[100px]'>
    
    <div className='flex flex-col gap-6'>
      <div>
      <div>
      <div className='text-2xl font-bold'>{room.title}</div>
      <div className='font-light text-neutral-500 mt-2'>{room.location}</div>
    </div>
        <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
          <img
            className='object-cover w-full'
            src={room.image}
            alt='header image'
          />
        </div>
      </div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
      {/* Room Info */}
      <div className='col-span-4 flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <div
            className='
          text-xl 
          font-semibold 
          flex 
          flex-row 
          items-center
          gap-2
        '
          >
            <div>Hosted by {room?.host?.name}</div>

            <img
              className='rounded-full'
              height='30'
              width='30'
              alt='Avatar'
              src={room?.host?.image}
            />
          </div>
          <div
            className='
          flex 
          flex-row 
          items-center 
          gap-4 
          font-light
          text-neutral-500
        '
          >
            <div>{room?.guests} guests</div>
            <div>{room?.bedrooms} rooms</div>
            <div>{room?.bathrooms} bathrooms</div>
          </div>
        </div>

        <hr />
        <div
          className='
    text-lg font-light text-neutral-500'
        >
          {room?.description}
        </div>
        <hr />
      </div>

      <div className='md:col-span-3 order-first md:order-last mb-10'>
        {/* RoomReservation */}
        <RoomReservation room={room} />
      </div>
    </div>
  </div>
  )
}

export default RoomDetails
