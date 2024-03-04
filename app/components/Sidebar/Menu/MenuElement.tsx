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
        opacity: 1,
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
        // <div className='absolute w-full h-screen flex flex-col items-center justify-center gap-5'>
        //     {menu.map((item) => {
        //         return (
        //             <a href={item.link} key={item.id} className='text-3xl'>{item.title}</a>
        //         )
        //     })}
        // </div>
        <div className='p-3'>
            <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='text-3xl flex flex-row gap-5 cursor-pointer'
            >
                <div className="icon-placeholder w-10 flex justify-center">{icon}</div>
                <div className="text-placeholder tracking-widest">{title}</div>
            </motion.li>
        </div>

    )
}