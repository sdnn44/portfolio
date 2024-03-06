"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import portfolioProjects from '@/app/utils/projects';

interface Project {
    id: number;
    title: string;
    img: string;
    description: string;
}

interface SectionProps {
    project: Project;
    activeCard: number;
}

const backgroundColors = [
    "rgb(50,26,77)",
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
];

const ProjectSection = ({ project, activeCard }: SectionProps) => {
    const ref = useRef<HTMLDivElement | any>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
        <section className=''>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    backgroundColor: backgroundColors[(activeCard) % backgroundColors.length],
                }}
                className='flex justify-center items-center w-full h-full overflow-hidden 9'>
                <div className="h-full max-w-[1100px] m-auto flex gap-[50px] flex-row items-center justify-center z-10">
                    <div ref={ref} className="flex h-2/5">
                        <Image src={`/${project.img}`} alt={project.title} width={1249} height={916} className='z-10 object-cover w-full h-full' />
                    </div>
                    <motion.div style={{ y }} className='flex flex-1 flex-col gap-[40px]'>
                        <h2 className='text-4xl text-bold'>{project.title}</h2>
                        <p className='text-md text-gray-400'>{project.description}</p>
                        <div className='flex justify-around'>
                            <button>Live Demo</button>
                            <button>Code</button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ProjectSection;