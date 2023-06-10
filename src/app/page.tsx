import Image from 'next/image'

export default function Home() {
  return (
    <main className=" bg-zinc-200 flex min-h-screen flex-col items-center justify-between p-24">  
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
          <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 text-black'>
              <h1 className='py-3 text-5xl md:text-7xl font-bold'>Love, Death & Robots</h1>
              <p className='py-3 px-1 text-2xl'>Is a surreal sci-fi-horror-comedy anthology</p>
              <p className='px-1 text-2xl'>that you will either love or hate.</p>
          </div>
          <div>
              <img className='w-full' src='/anime-spirited-away.jpg' alt='/'/>
          </div>
      </div>
    </main>
  )
}
