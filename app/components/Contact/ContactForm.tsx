import React from 'react'
import MovingButton from '../Button/MovingBorder'

type Props = {}

export default function ContactForm({ }: Props) {
    return (
        <form action="" className='flex flex-col'>
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
            <MovingButton className='bg-[#5b21b6] hover:bg-[#471a8f] font-medium py-2.5 px-5 rounded-lg w-full' borderClassName={'bg-[conic-gradient(#7a3ae1_20deg,transparent_120deg)]'}>
                Send message
            </MovingButton>

        </form>
    )
}