"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import MenuElement from './Menu/MenuElement';
import MenuToggle from './Menu/MenuToggle';
import Navigation from './Navigation';

type Props = {}

export default function AnimatedSidebar({ }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    };

    return (
        <motion.nav
            animate={isOpen ? "open" : "closed"}
            className='flex flex-col items-center justify-center bg-white text-black'>
            <motion.div
                variants={variants}
                className='fixed top-0 left-0 w-[400px] bg-white h-full'>
                <Navigation />
            </motion.div>
            <MenuToggle setOpen={setIsOpen} />
        </motion.nav>
    )
}