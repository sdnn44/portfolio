"use client";

import gsap from 'gsap';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

type Props = {}

export default function HeroHeadline({ }: Props) {

    const firstParagraph = useRef(null);
    const secondParagraph = useRef(null);

    let xDirection = 0;
    let direction = -1;

    useEffect(() => {
        requestAnimationFrame(animation)
    }, []);

    const animation = () => {
        if (xDirection < -1640) {
            xDirection = 0;
        }
        gsap.set(firstParagraph.current, { x: xDirection });
        gsap.set(secondParagraph.current, { x: xDirection });
        xDirection += 1 * direction;
        requestAnimationFrame(animation);
    }

    return (
        <div className='relative overflow-hidden bottom-36 '>
            <div className="whitespace-nowrap relative opacity-10">
                <p ref={firstParagraph} className="relative text-[20vh] pr-[50px] top-0 w-1/2 font-bold">Rzedzicki Łukasz-</p>
                <p ref={secondParagraph} className="absolute left-[130%] text-[20vh] pr-[50px] top-0 w-1/2 font-bold">Rzedzicki Łukasz-</p>
            </div>
        </div>
    )
}