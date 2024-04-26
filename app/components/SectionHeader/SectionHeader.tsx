import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import TextReveal from '../TextReveal/TextReveal';

type HeaderProps = {
    title: string,
    description?: string
}

export default function SectionHeader({ title, description }: HeaderProps) {
    return (
        <div className='flex flex-col justify-center items-center md:gap-4 pl-5'>
            <TextReveal>
                <h1 className='text-3xl md:text-5xl font-bold tracking-widest hero-text'>{title}</h1>
            </TextReveal>
            <TextReveal>
                <span className='text-base md:text-xl font-semibold'>{description}</span>
            </TextReveal>
        </div>
    );
};