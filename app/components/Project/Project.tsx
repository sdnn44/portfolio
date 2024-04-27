"use client";
import portfolioProjects from '@/app/utils/projects';
import React from 'react'
import PageProgress from './PageProgress';
import ProjectSection from './ProjectSection';
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

export default function Project() {

    const ref = React.useRef<HTMLDivElement | any>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const height = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const opacity = useTransform(scrollYProgress, [0.8, 0.90], [1, 0]);

    const [activeCard, setActiveCard] = React.useState(0);

    const portfolioItems = portfolioProjects.length;
    
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = portfolioProjects.map((_, index) => index / portfolioItems);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        console.log(activeCard);
        setActiveCard(closestBreakpointIndex);
    });

    return (
        <div ref={ref} className='relative'>
            <motion.div style={{ opacity }} className='text-center sticky b-0 top-0 left-0 pt-3 md:pt-6 z-10'>
                <h1 className='hero-text text-4xl md:text-5xl font-bold text-orange-400 tracking-wider'>Recent projects</h1>
                <PageProgress />
            </motion.div>

            {portfolioProjects.map(project => (
                <ProjectSection project={project} key={project.id} activeCard={activeCard} />
            ))}

        </div>
    );
}