"use client";
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Contact({ }: Props) {



    return (

        <div className='grid md:grid-cols-2 max-w-[1100px] m-auto py-60 gap-5 justify-center z-30 border-2'>
            <div className='flex flex-col max-w-96 gap-2'>
                <h5 className='text-5xl font-bold text-white my-2'>
                    Let's talk!
                </h5>
                <p className='text-gray'>
                    {" "}
                    Im currently looking for opprtinities lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, asperiores accusamus at, ipsa ab temporibus veritatis aperiam itaque iure illum quam illo. Qui sint, corrupti assumenda deserunt dolore maiores molestias.
                </p>
                <div className="flex flex-row gap-2">
                    <SocialIcon url="https://discord.com" fgColor='white' bgColor='transparent' />
                    <SocialIcon url="https://github.com" fgColor='white' bgColor='transparent' />
                </div>
            </div>
            <div>
                <form action="" className='flex flex-col'>{/*  */}
                    <div className='mb-6'>
                        <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Email</label>
                        <input type='email' id='email' required placeholder='yourmail@gmail.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="subject" className='text-white block mb-3 text-sm font-medium'>Subject</label>
                        <input type='text' id='subject' required placeholder='Subject' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="message" className='text-white block mb-3 text-sm font-medium'>Message</label>
                        <textarea name="message" id="message" required placeholder='Lets talk about.. ' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'></textarea>
                    </div>
                    <button type='submit' className='bg-purple-500 hover:bg-purple-600 font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send message
                    </button>
                </form>
            </div>
        </div>
    )
}