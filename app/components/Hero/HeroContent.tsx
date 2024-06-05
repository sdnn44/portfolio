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
            'flex flex-col gap-6 relative md:max-w-[500px] lg:max-w-[600px] mt-5 md:mt-0',
            className
        )}>
            <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold z-10 justify-center items-center flex flex-col md:items-start md:justify-start'>
                <TextReveal>
                    <span className='z-20'>Hi, I'm</span>
                    <span className='hero-text z-20'> Łukasz</span>
                </TextReveal>
                <TextReveal>
                    <span className='text-3xl md:text-5xl lg:text-6xl opacity-30 tracking-widest z-0'>Web Developer</span>
                </TextReveal>
            </h1>
            <TextReveal>
                <p className='text-sm md:text-base lg:text-lg text-center mx-5 md:mx-0 md:text-left'>
                    Recent computer science master's graduate with a passion for web development, actively exploring
                    emerging technologies while seeking new challenges. I want to use my skills to further develop my
                    professional career and make meaningful contributions to the team's achievements.
                </p>
            </TextReveal>
            <div className='flex gap-5 md:gap-10 w-full justify-evenly z-10'>
                <Button className="button left w-[7rem] md:w-[10rem] lg:w-[11rem] px-[10px] py-[15px]" label='Download CV'>
                    <p className='text-[#5a21b5]'>Resume</p>
                </Button>
                <Button className="button left w-[7rem] md:w-[10rem] lg:w-[11rem] px-[10px] py-[15px]" label='Get in touch'>
                    <p className='text-[#5a21b5]'>Contact</p>
                </Button>
            </div>
        </div>
    )
}