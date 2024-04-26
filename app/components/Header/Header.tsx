"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import FollowCursor from '../FollowCursor/FollowCursor';
import AnimatedSidebar from '../Sidebar/AnimatedSidebar'
import HeaderItem from './HeaderItem';
type Props = {}

export default function Header({ }: Props) {
    const [isActive, setActive] = useState<boolean>(false);
    return (
        <header className='top-0 flex items-start justify-end max-w-5xl mx-auto p-5 xl:items-center'>
            <AnimatedSidebar />

            <div className='md:flex w-full hidden'>
                <HeaderItem href="#about">About</HeaderItem>
                <HeaderItem href="#experience">Experience</HeaderItem>
                <HeaderItem href="#projects">Projects</HeaderItem>
                <HeaderItem href="#contact">Contact</HeaderItem>
            </div>

            <div className='flex flex-row items-center'>
                <FollowCursor><SocialIcon url="https://twitter.com" fgColor='white' bgColor='transparent' /></FollowCursor>
                <FollowCursor><SocialIcon url="https://discord.com" fgColor='white' bgColor='transparent' /></FollowCursor>
                <FollowCursor><SocialIcon url="https://github.com" fgColor='white' bgColor='transparent' /></FollowCursor>
            </div>


            {/* <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon className='cursor-pointer' network='email' fgColor='white' bgColor='transparent' />
                <p className='uppercase hidden md:inline-flex text-sm text-white'>Get in touch</p>
            </div> */}
        </header>
    )
}