import React from 'react';

const ViedoTitle = ({title, overview}) => {
  return (
    <div className='pt-[32%] px-6 md:px-13 md:pt-[20%] absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-2xl md:text-4xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className='flex gap-2 mt-2 md:mt-0'>
        <button className='p-2 bg-white text-black text-lg rounded-md px-8 cursor-pointer hover:opacity-80'>▶️ Play</button>
        <button className='p-2 bg-gray-500 text-white text-lg rounded-md px-4 cursor-pointer hover:opacity-80'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default ViedoTitle;