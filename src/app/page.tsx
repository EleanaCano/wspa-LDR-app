"use client";

import Image from 'next/image'
import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Home() {
  const slides = [
    {
      url: '/logo.jpg',
    },
    {
      url: '/image1.jpg',
    },
    {
      url: '/image2.jpg',
    },

    {
      url: '/image3.jpg',
    },
    {
      url: '/image4.jpg',
    },
    {
      url: '/image5.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <main className=" bg-zinc-200 flex min-h-screen flex-col items-center justify-between px-24">  
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
          <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 text-black'>
              <h1 className='py-3 text-5xl md:text-7xl font-bold'>Love, Death & Robots</h1>
              <p className='py-3 px-1 text-2xl'>Is a surreal sci-fi-horror-comedy anthology</p>
              <p className='px-1 text-2xl'>that you will either love or hate.</p>
          </div>
          <div>
            <div className='max-w-[1480px] h-[500px] w-full m-auto py-16 px-4 relative group'>
              <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
              ></div>
              {/* Left Arrow */}
              <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* Right Arrow */}
              <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
              <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-2xl cursor-pointer'>
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </main>
  )
}
