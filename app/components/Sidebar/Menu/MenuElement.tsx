import { menu } from '@/app/utils/sidebar-menu';
import { motion } from 'framer-motion';
import React from 'react'

type MenuItemProps = {
    id: number,
    title: string,
    link: string,
    icon: any
}

const variants = {
    open: {
        y: 0,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

export default function MenuElement({ id, title, link, icon }: MenuItemProps) {
    return (
        <div className='p-3'>
            <motion.a
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={link}
                className='text-3xl flex flex-row gap-5 cursor-pointer z-20'
            >
                <div className="icon-placeholder w-10 flex justify-center">{icon}</div>
                <div className="text-placeholder tracking-widest">{title}</div>
            </motion.a>
        </div>

    )
}