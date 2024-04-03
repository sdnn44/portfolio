"use client";
import React from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import skills from '@/app/utils/technologies';
import Image from 'next/image';
import { BackgroundGradient } from '../ui/background-gradient'
import { HoverEffect } from '../ui/card-hover-effect';
import SectionHeader from '../SectionHeader/SectionHeader';

type Props = {}

export default function Skills({ }: Props) {

    const ref = React.useRef<HTMLDivElement | any>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0.1, 0.75], [1, 0]);
    const y = useTransform(scrollYProgress, [0.5, 1], ["0vh", "50vh"]);

    const height = useTransform(scrollYProgress, [0, 0.8], [50, 0]);
    return (
        <div className='pt-20 relative'>
            <div className="custom-shape-divider-top-1712163452">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
                </svg>
            </div>
            <SectionHeader title="Skills" description="My work experience as a software engineer and working on different companies and projects." />
            <div
                className="mx-auto overflow-hidden max-w-5xl px-8">
                <HoverEffect items={skills} opacity={opacity} y={y} />
            </div>


            <div ref={ref} className='relative'>
                <motion.div style={{ height }} className="relative">
                    <div className="z-20 absolute rounded-bl-[50%] rounded-br-[50%] shadow-xl shadow-black h-[1200%] w-[110%] bg-[#0c0c1d] left-[-10%]"></div>
                </motion.div>
            </div>

        </div>
    );
}