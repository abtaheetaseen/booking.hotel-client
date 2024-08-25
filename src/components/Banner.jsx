import React from 'react'

const Banner = () => {
  return (
    <div className='banner-bg h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-7xl text-white font-bold'>
            Stay once, carry memories forever
        </h1>

        <p className='text-lg font-normal text-white w-9/12 mx-auto my-5'>
        When you get into a hotel room, you lock the door, and you know there is a secrecy, there is a luxury, there is fantasy. There is comfort. There is reassurance.
        </p>

        <button className='btn btn-sm bg-blue-600 text-white hover:bg-blue-500 border-none'>
            Explore Now
        </button>
      </div>
    </div>
  )
}

export default Banner
