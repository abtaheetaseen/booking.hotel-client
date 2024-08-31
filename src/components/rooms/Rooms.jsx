import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import RoomCard from './RoomCard'

const Rooms = () => {

    const {data: rooms = [], isLoading} = useQuery({
        queryKey: ["rooms"],
        queryFn: async() => {
            const res = await axios.get("http://localhost:3000/rooms");
            return res.data;
        }
    })
    console.log(rooms);

  return (
    <div className=''>
      {rooms && rooms.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 w-10/12 mx-auto mb-[100px]'>
          {rooms.map(room => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center min-h-screen'>
          <div>
            <h1>No rooms available in this category!</h1>
          </div>
        </div>
      )}
    </div>
  )
}

export default Rooms
