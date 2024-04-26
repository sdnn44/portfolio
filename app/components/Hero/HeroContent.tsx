import { cn } from '@/app/utils/cn';
import React from 'react'
import Button from '../Button/Button'
import TextReveal from '../TextReveal/TextReveal'

export default function HeroContent({
    className,
}: {
    className: string;
}) {
    return (
        <div className={cn(
            'flex flex-col gap-6 relative max-w-[600px] mt-5 md:mt-0',
            className
        )}>
            <h1 className='md:text-5xl text-3xl font-bold z-10 justify-center items-center flex flex-col md:items-start md:justify-start'>
                <TextReveal>
                    <span className='z-20'>Hi, I'm</span>
                    <span className='hero-text z-20'> Łukasz</span>
                </TextReveal>
                <TextReveal>
                    <span className='text-3xl md:text-6xl opacity-30 tracking-widest z-0'>Web Developer</span>
                </TextReveal>
            </h1>
            <TextReveal>
                <p className='text-sm md:text-lg text-center mr-5 ml-5 md:mr-0 md:ml-0 md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elitmet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellat accusamus reiciendis quibusdam error modi dignissimos tempore, nam soluta, impedit explicabo, ipsa optio sit minus itaque? Modi sed atque ratione!</p>
            </TextReveal>
            <div className='flex gap-10 w-full justify-evenly'>
                <Button className="button left w-[7rem] md:w-[11rem]" label='Download CV'>
                    <p className='text-[#5a21b5]'>Resume</p>
                </Button>
                <Button className="button left w-[7rem] md:w-[11rem]" label='Get in touch'>
                    <p className='text-[#5a21b5]'>Contact</p>
                </Button>
                {/* <a href='#' className='button left'>Contact</a> */}
            </div>
        </div>
    )
}