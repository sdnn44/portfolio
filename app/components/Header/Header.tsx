"use client";
import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import AnimatedSidebar from '../Sidebar/AnimatedSidebar'
type Props = {}

export default function Header({ }: Props) {
    const [isActive, setActive] = useState<boolean>(false);
    return (
        <header className='top-0 flex items-start justify-end max-w-5xl mx-auto p-5 xl:items-center'>
            <AnimatedSidebar />

            <div className='flex w-full'>
                <div className='flex relative p-4 cursor-pointer hover:scale-100 hover:-translate-x-1/2'>
                    <p>Experience</p>
                    <div className='w-[6px] h-[6px] bg-white absolute rounded-2xl top-3/4 left-1/2 indicator-transition'></div>
                </div>
                <div className='flex relative p-4 cursor-pointer'>
                    <p>Projects</p>
                    <div className='w-[6px] h-[6px] bg-white absolute rounded-2xl top-3/4 left-1/2 indicator-transition'></div>
                </div>
                <div className='flex relative p-4 cursor-pointer'>
                    <p>Contact</p>
                    <div className='w-[6px] h-[6px] bg-white absolute rounded-2xl top-3/4 left-1/2 indicator-transition'></div>
                </div>
            </div>

            <div className='flex flex-row items-center '>
                <SocialIcon url="https://twitter.com" fgColor='white' bgColor='transparent' />
                <SocialIcon url="https://discord.com" fgColor='white' bgColor='transparent' />
                <SocialIcon url="https://github.com" fgColor='white' bgColor='transparent' />
            </div>

           
            {/* <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon className='cursor-pointer' network='email' fgColor='white' bgColor='transparent' />
                <p className='uppercase hidden md:inline-flex text-sm text-white'>Get in touch</p>
            </div> */}
        </header>
    )
}