"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react'

type Props = {}

export default function PageProgress({ }: Props) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <motion.div className="p-1 m-10 text-center rounded-full bg-white" style={{ scaleX }} />
    )
}