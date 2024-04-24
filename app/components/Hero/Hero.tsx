"use client";
import React from 'react'
import Image from 'next/image'
import HeroBgAnimation from '../Hero/HeroBgAnimation'
import HeroContent from './HeroContent';
import HeroHeadlineSlider from './HeroHeadlineSlider';

type Props = {}

export default function Hero({ }: Props) {

  return (
    <div className='flex relative justify-center items-center gap-20 md:flex-row flex-col max-w-5xl mx-auto h-3/4'>
      <div className='rounded-full flex items-center justify-center border-[1px] border-violet-800 shadow-[0_0px_20px_rgba(0,0,0,0.25)] shadow-violet-700 overflow-hidden'>
        <HeroBgAnimation />
        <Image src={'/hero_bg-2.jpg'} width={700} height={700} alt={''} className='z-10' />
        {/* <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 z-10 "></div> */}
      </div>
      <HeroContent />
      <div className='absolute -bottom-44'>
        <HeroHeadlineSlider />
      </div>
    </div>
  )

}