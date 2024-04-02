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
        <div className='pt-20'>
            <SectionHeader title="Skills" description="My work experience as a software engineer and working on different companies and projects." />

            <div
                ref={ref}
                // style={{ opacity, y, zIndex: 0 }}
                className="mx-auto overflow-hidden max-w-5xl px-8">
                {/* {skills.map(({ id, title, Icon }) => (
                    <div key={id} className='flex flex-col items-center justify-center'>
                        <BackgroundGradient className="padding-8 flex h-32 w-32 items-center justify-center rounded-[1.8rem]  cursor-pointer bg-[#151515] z-10 ">
                            <Image src={`/${image}`} alt={''} width={500} height={500} className='h-[64px] w-[64px] z-30' />
                        </BackgroundGradient>
                        <h3 className="text-xl mt-2 text-white">{name}</h3>

                    </div>
                ))} */}
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