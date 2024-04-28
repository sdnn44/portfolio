import React from 'react'
import TextReveal from '../TextReveal/TextReveal'

type Props = {}

export default function AboutContent({ }: Props) {
    return (
        <>
            <TextReveal>
                <h4 className='text-xl md:text-2xl font-semibold'>
                    Here is a <span className='tracking-widest underline decoration-violet-800'>little</span> background
                </h4>
            </TextReveal>
            <TextReveal>
                <p className='text-sm md:text-base'>My programming journey began in high school, where I delved into the fundamentals of C++, PHP, SQL, and JavaScript. During my college years, I found a passion for frontend development, and since then, I've been dedicated to honing my skills in this area. Continuously striving to expand my technical expertise, I actively pursue knowledge of emerging technologies with the goal of eventually transitioning into a full-stack developer role. </p>
            </TextReveal>
            <TextReveal>
                <p className='text-sm md:text-base'>I am currently a Master's degree holder in Computer Science, specializing in the design and maintenance of responsive websites that ensure a seamless user experience.</p>
            </TextReveal>
            <div className='flex flex-row md:flex-row w-full md:gap-8'>
                <div className='flex flex-col p-4 gap-5 md:gap-5'>
                    <TextReveal>
                        <div className='text-sm flex flex-col'><strong className='uppercase text-violet-800 tracking-widest text-base md:text-lg'>Name:</strong> <span className='text-sm'>Łukasz R</span></div>
                    </TextReveal>
                    <TextReveal>
                        <div className='text-sm flex flex-col'><strong className='uppercase text-violet-800 tracking-widest text-base md:text-lg'>Email:</strong> <span className='text-sm'>slidennnq@gmail.com</span></div>
                    </TextReveal>
                </div>
                <div className='flex flex-col p-4 gap-5 md:gap-5'>
                    <TextReveal>
                        <div className='text-sm flex flex-col'><strong className='uppercase text-violet-800 tracking-widest text-base md:text-lg'>Employment:</strong> <span className='text-sm'>Open</span></div>
                    </TextReveal>
                    <TextReveal>
                        <div className='text-sm flex flex-col'><strong className='uppercase text-violet-800 tracking-widest text-base md:text-lg'>Education:</strong> <span className='text-sm'>Katolicki Uniwersytet Lubelski - Master Degree</span></div>
                    </TextReveal>
                </div>
            </div>
        </>

    )
}