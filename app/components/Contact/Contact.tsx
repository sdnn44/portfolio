"use client";
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { BackgroundBeams } from '../ui/background-beams';
import ContactForm from './ContactForm';

type Props = {}

export default function Contact({ }: Props) {

    return (
        // h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased
        <div className='wrapper h-full grid md:grid-cols-2 relative max-w-[1100px] m-auto py-60 gap-5 justify-center z-10 antialiased items-center px-5 lg:px-0'>
            <div className='flex flex-col max-w-96 gap-2'>
                <h5 className='text-5xl font-bold text-white my-2'>
                    Let's talk!
                </h5>
                <p className='text-gray'>
                    {" "}
                    Im currently looking for opprtinities lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, asperiores accusamus at, ipsa ab temporibus veritatis aperiam itaque iure illum quam illo. Qui sint, corrupti assumenda deserunt dolore maiores molestias.
                </p>
                <div className="flex flex-col gap-1">
                    <div className='flex flex-row items-center gap-2'>
                        <SocialIcon network="whatsapp" fgColor='white' bgColor='transparent' />
                        <p className='font-bold'>+48 604 590 321</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <SocialIcon network="email" fgColor='white' bgColor='transparent' />
                        <p className='font-bold'>slidennnq@poczta.com</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <SocialIcon network="discord" fgColor='white' bgColor='transparent' />
                        <p className='font-bold'>rip#2179</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <SocialIcon url="https://github.com/sdnn44" fgColor='white' bgColor='transparent' />
                        <a href='https://github.com/sdnn44' className='font-bold'>sdnn44</a>
                    </div>
                </div>
            </div>
            <div className='z-40'>
                <ContactForm />
            </div>
            {/* <BackgroundBeams /> */}
        </div>
    )
}