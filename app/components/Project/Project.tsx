"use client";
import portfolioProjects from '@/app/utils/projects';
import React from 'react'
import PageProgress from './PageProgress';
import ProjectSection from './ProjectSection';
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function Project() {

    const ref = React.useRef<HTMLDivElement | any>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

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
            <div className='text-center sticky top-0 left-0 pt-6 flex-col z-10 overflow-hidden'>
                <h1 className='text-5xl font-bold text-orange-400 tracking-wider'>Recent projects</h1>
                <PageProgress />
            </div>

            {portfolioProjects.map(project => (
                <ProjectSection project={project} key={project.id} activeCard={activeCard} />
            ))}
        </div>
    );
}