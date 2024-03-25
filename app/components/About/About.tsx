import React from 'react'
import Image from 'next/image'

type Props = {}

export default function About({ }: Props) {
  return (
    <div className='flex justify-center items-center gap-20 md:flex-row flex-col max-w-5xl mx-auto h-3/4'>
      <div className='rounded-full border-[1px] border-violet-800 shadow-[0_0px_20px_rgba(0,0,0,0.25)] shadow-violet-700 overflow-hidden'>
        <Image src={'/hero_bg-2.jpg'} width={700} height={700} alt={''} className='' />
      </div>
      <div className='flex flex-col gap-6 relative max-w-[600px]'>
        <h1 className='text-5xl font-bold z-10'>Hi, I'm
          <span className='hero-text z-20'> Łukasz</span><br />
          <span className='text-6xl opacity-30 tracking-widest z-0'>Web Developer</span>
        </h1>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellat accusamus reiciendis quibusdam error modi dignissimos tempore, nam soluta, impedit explicabo, ipsa optio sit minus itaque? Modi sed atque ratione!</p>
        <a href='#' className='border-2 rounded-xl w-40 p-4 flex items-center justify-center'>Download CV</a>
      </div>
    </div>
  )
}