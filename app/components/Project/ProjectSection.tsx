"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { Button } from '../ui/moving-border';
import { SocialIcon } from 'react-social-icons';

interface Project {
    id: number;
    title: string;
    img: string;
    description: string;
    buttonBackground?: string;
}

interface SectionProps {
    project: Project;
    activeCard: number;
}

const backgroundColors = [
    "rgb(43,22,67)",
    "rgb(27,26,33)",
    "rgb(15,17,23)",
    // "rgb(43,22,67)",
    "var(--neutral-900)",
];

const buttonBackground = [
    "bg-[#764ef9]",
    "bg-[#0057be]",
    "bg-[#6b21a8]",
    "bg-[#0057be]",
    "bg-[#6b21a8]",
];

const ProjectSection = ({ project, activeCard }: SectionProps) => {
    const ref = useRef<HTMLDivElement | any>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    console.log(project);

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
        <section className=''>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    backgroundColor: backgroundColors[(activeCard) % backgroundColors.length],
                }}
                className='flex justify-center items-center w-full h-full overflow-hidden'>
                <div className="h-full max-w-[1100px] m-auto flex gap-[50px] flex-row items-center justify-center z-0">
                    <div ref={ref} className="flex h-2/5 z-0">
                        <Image src={`/${project.img}`} alt={project.title} width={1249} height={916} className={`z-0 object-cover w-full h-full`} />
                    </div>
                    <motion.div style={{ y }} className='flex flex-1 flex-col gap-[40px] overflow-hidden'>
                        <h2 className='text-4xl text-bold'>{project.title}</h2>
                        <p className='text-md text-gray-400'>{project.description}</p>
                        <div className='flex justify-around'>
                            <Button
                                borderRadius="1.75rem"
                                className={`${buttonBackground[project.id-1]} text-black border-[#0057be]`}
                            >
                                <SocialIcon url="https://github.com" fgColor='black' bgColor='transparent' />
                                Live Demo
                            </Button>
                            <Button
                                borderRadius="1.75rem"
                                className={`${buttonBackground[project.id-1]} text-black border-[#0057be]`}
                            >
                                <SocialIcon url="https://github.com" fgColor='black' bgColor='transparent' />
                                Code
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ProjectSection;