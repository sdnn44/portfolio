"use client"
import React, { useState } from 'react'
import { menu } from '../../utils/sidebar-menu';
import Link from 'next/link';
import ToggleButton from './Menu/MenuToggle';
import { motion } from 'framer-motion';

type Props = {}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export default function Sidebar({ }: Props) {

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-full p-6 z-20 text-white">
      <div className="logo absolute top-20 text-3xl capitalize">
        <ToggleButton setOpen={setOpen} />
      </div>
      <motion.ul
        variants={variants}
        className='nav list-none mt-10'>
        {menu.map((item) => {
          const link = item.link;
          return (
            <li
              key={item.id}
              className={`mb-4 flex items-center justify-start nav-item ${item.id === 1 ? "active" : ""}`}
              onClick={() => {
                // handleClick(link);
              }}>
              {item.icon}
              <Link href={link} className="block ml-3 font-semibold px-1 py-3">{item.title}</Link>
            </li>
          )
        })}
      </motion.ul>
    </div>
  )
}