import { menu } from '@/app/utils/sidebar-menu';
import { motion } from 'framer-motion'
import React from 'react'
import MenuElement from './Menu/MenuElement';

type Props = {}
const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export default function Navigation({ }: Props) {
    return (
        <div className='absolute w-full h-screen flex flex-col items-center justify-center'>
            <motion.ul variants={variants}>
                {menu.map(item => (
                    <MenuElement key={item.id} id={item.id} title={item.title} icon={item.icon} link={item.link} />
                ))}
            </motion.ul>
        </div>
    );
}