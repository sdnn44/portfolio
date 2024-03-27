"use client";

import gsap from 'gsap';
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
        if(xDirection < -500) {
            xDirection = 0;
        }
        gsap.set(firstParagraph.current, { x: xDirection });
        gsap.set(secondParagraph.current, { x: xDirection });
        xDirection += 0.1 * direction;
        requestAnimationFrame(animation);
    }

    return (
        <div className='absolute top-[calc(100vh-300px)]'>
            <div className='relative whitespace-nowrap '>
                <p ref={firstParagraph} className='m-0 text-white text-[230px] font-medium pr-[50px] opacity-10 '>Freelance Photographer</p>
                {/* <p ref={secondParagraph} className='m-0 left-[100%] text-white text-[230px] font-medium pr-[50px] opacity-10 absolute'>Freelance Photographer -</p> */}
            </div>
        </div>
    )
}