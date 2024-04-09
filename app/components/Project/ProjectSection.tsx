"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { SocialIcon } from 'react-social-icons';
import { DirectionAwareHover } from '../ui/direction-aware-hover';
import { IconType } from 'react-icons';
import MovingButton from '../Button/MovingButton';

import { projectStyles } from '../../utils/project-themes';

interface Project {
    id: number;
    title: string;
    img: string;
    description: string;
    tech: IconType[];
    buttonBackground?: string;
}

interface SectionProps {
    project: Project;
    activeCard: number;
}

const ProjectSection = ({ project, activeCard }: SectionProps) => {
    const ref = useRef<HTMLDivElement | any>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const projectStyle = projectStyles[(activeCard) % projectStyles.length];
    const projectStyleVar = projectStyles[project.id - 1];

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
        <section className='snap-start'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    backgroundColor: projectStyle.backgroundColors,
                }}
                className='flex justify-center items-center w-full h-full overflow-hidden'>
                <div className="h-full max-w-[1100px] m-auto flex gap-[50px] flex-row items-center justify-center z-0">
                    <div ref={ref} className="flex h-2/5 w-1/2 z-0">
                        <DirectionAwareHover imageUrl={`/${project.img}`}>
                            <div className='space-y-5'>
                                <h1 className='text-2xl font-bold'>{project.title}</h1>
                                <div className='flex items-center gap-5'>
                                    {project.tech.map((Icon, index) => {
                                        return (
                                            <Icon
                                                className='w-7 h-7'
                                                key={index}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </DirectionAwareHover>
                        {/* <Image src={`/${project.img}`} alt={project.title} width={1249} height={916} className={`z-0 object-cover w-full h-full`} /> */}
                    </div>
                    <motion.div style={{ y }} className='flex flex-1 flex-col gap-[40px] overflow-hidden'>
                        <div className='flex flex-row items-center gap-2'>
                            <h2 className={`text-4xl text-bold underline underline-offset-4 ${projectStyleVar.underlineColors}`}>{project.title}</h2>
                            <span className={`text-4xl text-bold ${projectStyleVar.closeTag}`}>{'/>'}</span>
                        </div>
                        <p className='text-md text-gray-400'>{project.description}</p>
                        <div className='flex justify-around'>
                            <MovingButton className={`${projectStyleVar.buttonBackground} duration-300 ease-in-out ${projectStyleVar.buttonBackgroundHover}`} borderClassName={`${projectStyleVar.border}`}>
                                <SocialIcon url="https://github.com" fgColor='white' bgColor='transparent' />
                                <span className='flex tracking-wider font-medium'>Live demo</span>
                            </MovingButton>
                            <MovingButton className={`${projectStyleVar.buttonBackground} duration-300 ease-in-out ${projectStyleVar.buttonBackgroundHover}`} borderClassName={`${projectStyleVar.border}`}>
                                <SocialIcon url="https://github.com" fgColor='white' bgColor='transparent' />
                                <span className='flex tracking-wider font-medium'>Code</span>
                            </MovingButton>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ProjectSection;