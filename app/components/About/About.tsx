"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import SectionWaveDivider from '../SectionWaveDivider/SectionWaveDivider';
import TextReveal from '../TextReveal/TextReveal';
import AboutContent from './AboutContent';

type Props = {}

export default function About({ }: Props) {

  const imageAnimation = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 1.2 },
  };

  return (
    <div className='pt-20 relative'>
      <SectionWaveDivider />
      <SectionHeader title="About me" />
      <div className='flex flex-col md:flex-row relative md:text-row max-w-6xl p-10 justify-between mx-auto items-center'>
        {/* <div className='relative w-full h-[600px]'> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='relative w-full h-[600px] opacity-90 hidden lg:flex'>
          <motion.img
            {...imageAnimation}
            src={'/about-pic-7.jpg'} width={340} height={340} alt={''} className='shadow-sm shadow-violet-900 absolute top-13 right-4 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-3xl md:w-72 md:h-72 xl-w-[500px] xl-h-[600px] z-10' />
          <motion.img
            {...imageAnimation}
            src={'/about-pic-2.jpg'} width={340} height={340} alt={''} className='shadow-sm shadow-violet-900 absolute bottom-12 -left-8 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-3xl md:w-72 md:h-72 xl-w-[500px] xl-h-[600px] z-0' />
          <div className='w-8 h-8 rounded-md bg-violet-950 absolute top-32 left-10' />
          <div className='w-12 h-12 rounded-md border-2 border-violet-950 absolute top-24' />
          <div className='w-8 h-8 rounded-md border-2 border-violet-950 absolute right-20 bottom-36' />
          <div className='w-12 h-12 rounded-md bg-violet-950 absolute right-10 bottom-40' />
          {/* </div> */}
        </motion.div>
        <div className='space-y-10 px-0 md:px-10 max-w-2xl'>
          <AboutContent />
        </div>
      </div>
    </div>
  )
}