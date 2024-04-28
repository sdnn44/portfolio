"use client";
import React, { useEffect, useRef } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import skills from '@/app/utils/technologies';
import Image from 'next/image';
import { BackgroundGradient } from '../ui/background-gradient'
import { HoverEffect } from '../ui/card-hover-effect';
import SectionHeader from '../SectionHeader/SectionHeader';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWaveDivider from '../SectionWaveDivider/SectionWaveDivider';
gsap.registerPlugin(ScrollTrigger);

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
            <SectionWaveDivider />
            <SectionHeader title="Skills" description="I specialize in web technologies while maintaining a solid understanding of the basics in C++, Java and Python." />
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