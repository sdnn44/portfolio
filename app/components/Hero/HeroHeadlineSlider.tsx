"use client";

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

type Props = {}

export default function HeroHeadlineSlider({ }: Props) {

    const firstParagraph = useRef<HTMLDivElement | null>(null);
    const secondParagraph = useRef<HTMLDivElement | null>(null);
    let xPercent = 0;

    useEffect(() => {
        gsap.set(secondParagraph.current, { left: secondParagraph.current?.getBoundingClientRect().width })
        requestAnimationFrame(animate);
    }, [])

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        gsap.set(firstParagraph.current, { xPercent: xPercent })
        gsap.set(secondParagraph.current, { xPercent: xPercent })
        requestAnimationFrame(animate);
        xPercent -= 0.05;
    }

    return (
        <div className="whitespace-nowrap relative">
            <p ref={firstParagraph} className="relative slider-paragraph">Rzedzicki Łukasz</p>
            <p ref={secondParagraph} className="absolute left-full top-0 slider-paragraph">Rzedzicki Łukasz</p>
        </div>
    )
}