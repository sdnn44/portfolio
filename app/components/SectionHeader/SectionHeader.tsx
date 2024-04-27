import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import TextReveal from '../TextReveal/TextReveal';

type HeaderProps = {
    title: string,
    description?: string
}

export default function SectionHeader({ title, description }: HeaderProps) {
    return (
        <div className='flex flex-col justify-center items-center md:gap-4'>
            <TextReveal>
                <h1 className='text-4xl md:text-5xl font-bold tracking-widest hero-text'>{title}</h1>
            </TextReveal>
            <TextReveal>
                <p className='text-base md:text-xl font-semibold px-5 text-center'>{description}</p>
            </TextReveal>
        </div>
    );
};