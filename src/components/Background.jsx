import React from 'react'

function Background() {
  return (
    <div className='fixed z-[2] w-full h-screen'>
    <div className='absolute top-[5%] w-full py-10 flex justify-center font-todoText text-zinc-600 text-2xl font-semibold'> Todo.</div>
    <h1 className='absolute top-1/2 left-1/2 font-todoText -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900 '>
      Todo's.
    </h1>
  </div>
  )
}

export default Background