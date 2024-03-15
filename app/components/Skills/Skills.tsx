"use client";
import React from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import skills from '@/app/utils/technologies';
import Image from 'next/image';
import { BackgroundGradient } from '../ui/background-gradient'

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
            <span className='text-6xl flex justify-center tracking-widest'>Skills</span>
            <motion.div
                ref={ref}
                style={{ opacity, y, zIndex: 0 }}
                className="mx-auto overflow-hidden grid w-full max-w-[120rem] grid-cols-4 gap-12 p-20 z-10">
                {skills.map(({ id, name, image }) => (
                    <div key={id} className='flex flex-col items-center justify-center'>
                        <BackgroundGradient className="padding-8 flex h-32 w-32 items-center justify-center rounded-[1.8rem]  cursor-pointer bg-[#151515] z-10 ">
                            <Image src={`/${image}`} alt={''} width={500} height={500} className='h-[64px] w-[64px] z-30' />
                        </BackgroundGradient>
                        <h3 className="text-xl mt-2 text-white">{name}</h3>
                    </div>
                ))}
            </motion.div>
            <div ref={ref} className='relative'>
                <motion.div style={{ height }} className="relative">
                    <div className="z-20 absolute rounded-bl-[50%] rounded-br-[50%] shadow-xl shadow-black h-[1200%] w-[110%] bg-[#090909] left-[-10%]"></div>
                </motion.div>
            </div>
        </div>
    );
}