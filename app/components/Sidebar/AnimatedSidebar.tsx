"use client";
import { motion } from 'framer-motion';
import gsap from 'gsap';
import React, { useLayoutEffect, useState } from 'react'
import MenuToggle from './Menu/MenuToggle';
import Navigation from './Navigation';
import { toggleBetweenSidebar } from '../../utils/motion';

type Props = {}

export default function AnimatedSidebar({ }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isEnable, setIsEnable] = useState<boolean>(false);

    const togglerRef = React.useRef<HTMLDivElement | any>(null);
    useLayoutEffect(() => {
        gsap.to(togglerRef.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: 200,
                onLeave: () => { gsap.to(togglerRef.current, { duration: .3, ease: "power1.in", backgroundColor: '#fff' }), setIsEnable(true) },
                onEnterBack: () => { gsap.to(togglerRef.current, { duration: .3, ease: "power1.in", backgroundColor: 'transparent', delay: 0.3 }), setIsEnable(false), setIsOpen(false) },
            }
        })
    }, []);

    return (
        <motion.nav
            animate={isOpen ? "open" : "closed"}
            className='flex flex-col items-center justify-center bg-white text-black z-30'>
            <motion.div
                ref={togglerRef}
                variants={toggleBetweenSidebar}
                className='fixed top-0 left-0 w-[400px] bg-transparent h-full'>
                <Navigation />
            </motion.div>
            <MenuToggle setOpen={setIsOpen} isEnable={isEnable} />
        </motion.nav>
    )
}