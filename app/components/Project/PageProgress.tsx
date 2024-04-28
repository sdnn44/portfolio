"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react'
import { projectStyles } from '../../utils/project-themes';

type Props = {}

export default function PageProgress({ progressColor }: { progressColor: number }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const projectStyle = projectStyles[(progressColor) % projectStyles.length];

    return (
        <motion.div className={`${projectStyle.buttonBackground} p-1 m-10 text-center rounded-full `} style={{ scaleX }} />
    )
}