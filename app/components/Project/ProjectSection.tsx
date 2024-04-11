"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { SocialIcon } from 'react-social-icons';
import { DirectionAwareHover } from '../ui/direction-aware-hover';
import { IconType } from 'react-icons';
import MovingButton from '../Button/MovingButton';

import { projectStyles } from '../../utils/project-themes';

// import ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
import gsap from 'gsap';
import Image from 'next/image';

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

    /*PLANE GASP*/
    // const flightPath = {};
    // const tween = new TimelineLite();

    // tween.add(
    //     TweenLite.to(".paper-plane", 1, {
    //         bezier: flightPath,
    //         ease: Power1.easeInOut
    //     })
    // );

    // const controller = new ScrollMagic.Controller();

    // const scene = new ScrollMagic.Scene({
    //     triggerElement: ".animation",
    //     duration: 1000,
    //     triggerHook: 0.5,
    // }).setTween(tween).addIndicators().addTo(controller);
    /*PLANE GASP*/
    const planeRef = useRef<HTMLDivElement | any>(null);

    useEffect(() => {
        // const mask = maskRef.current;
        // const wrapper = wrapperRef.current;

        // if (!mask) return;

        // gsap.to(mask, {
        //     width: "20%",
        //     scrollTrigger: {
        //         trigger: ".wrapper",
        //         start: "bottom left",
        //         scrub: 1,
        //     },
        // });
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: planeRef.current,
                markers: true,
                start: "top 100%",
                end: "top 30%",
                scrub: 1
            }
        });
        t1.to(".plane", { x: 500, duration: 5 })
            .to(".plane", { x: 800, duration: 3 })
            .to(".plane", { x: 1500, duration: 3 })
            .to(".plane", { x: 0, duration: 1 })
            // .to(".plane", { y: 200, duration: 3 })
            // .to(".plane", { x: 0, duration: 2 })
    }, [project]);

    return (
        <section className='snap-start'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    backgroundColor: projectStyle.backgroundColors,
                }}
                className='flex flex-col justify-center items-center w-full h-full overflow-hidden'>
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
                    <div ref={planeRef} className='flex w-full'>
                        <Image alt='' src={"/papersample.png"} width={75} height={75} className="plane" />
                    </div>
            </motion.div>
        </section>
    );
};

export default ProjectSection;