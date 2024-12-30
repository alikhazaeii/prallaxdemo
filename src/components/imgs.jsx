import React from 'react'

export default function Imgs() {
  return (
    <section className='w-full flex flex-wrap  '>
      <figure className='w-full md:w-4/12 relative group   '>
      <img className='group-hover:blur-0 blur-md' src="https://media.oakley.com/2024/Olympics/Sphaera_v1.jpg" alt="" />
      <figcaption className=' w-full h-full'>
        <h3 className='group-hover:blur-0 blur-md absolute top-0 w-full left-0 text-center my-10 text-yellow-300 text-lg md:text-2xl'> Cassandre Beaugrand wears  </h3>
        <h2 className='group-hover:blur-0 blur-md absolute top-20 w-full left-0 text-center text-5xl my-10 text-yellow-300'>Sphaera™</h2>
        <button className=' py-2 px-5 text-black bg-white border border-black rounded-2xl bottom-10 absolute left-[50%] translate-x-[-50%] text-lg capitalize font-bold group-hover:blur-0 blur-md'>shop now</button>
      </figcaption>
      </figure>
      <figure className='w-full md:w-4/12 relative group'>
      <img className='group-hover:blur-0 blur-md' src="https://media.oakley.com/2024/Olympics/Latch.jpg" alt="" />
      <figcaption className=' w-full h-full'>
        <h3 className='group-hover:blur-0 blur-md absolute  top-0 left-0 w-full text-center my-10 text-yellow-300 text-lg md:text-2xl'> Kylian Mbappé wears </h3>
        <h2 className='group-hover:blur-0 blur-md absolute  top-20 left-0 w-full text-center text-5xl my-10 text-yellow-300'>Latch™Panel</h2>
        <button className=' py-2 px-5 text-black bg-white border border-black rounded-2xl bottom-10 absolute left-[50%] translate-x-[-50%] text-lg capitalize font-bold group-hover:blur-0 blur-md'>shop now</button>
      </figcaption>
      </figure>
      <figure className='w-full md:w-4/12 relative group'>
      <img className='group-hover:blur-0 blur-md' src="https://media.oakley.com/2024/Olympics/Bisphaera.jpg" alt="" />
      <figcaption className=' w-full h-full'>
        <h3 className='group-hover:blur-0 blur-md absolute top-0 left-0 w-full text-center my-10 text-yellow-300 text-lg md:text-2xl'> Kylian Mbappé wears </h3>
        <h2 className='group-hover:blur-0 blur-md absolute top-20 left-0 w-full text-center text-5xl my-10 text-yellow-300'>BiSphaera™</h2>
        <button className=' py-2 px-5 text-black bg-white border border-black rounded-2xl bottom-10 absolute left-[50%] translate-x-[-50%] text-lg capitalize font-bold group-hover:blur-0 blur-md'>shop now</button>
      </figcaption>
      </figure>
    </section>
  )
}
