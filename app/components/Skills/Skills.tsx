"use client";
import React from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

type Props = {}

export default function Skills({ }: Props) {

    const ref = React.useRef<HTMLDivElement | any>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const height = useTransform(scrollYProgress, [0, 1], [50, 0]);
    return (
        <div ref={ref} className='relative'>
            <motion.div style={{ height }} className="relative">
                <div className="absolute rounded-bl-[50%] rounded-br-[50%] shadow-xl shadow-black h-[1550%] w-[110%] bg-[#2b1643] left-[-10%]"></div>
            </motion.div>
        </div>
    );
}