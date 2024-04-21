"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import SectionWaveDivider from '../SectionWaveDivider/SectionWaveDivider';
import TextReveal from '../TextReveal/TextReveal';

type Props = {}

export default function About({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='pt-20 relative'>
      <SectionWaveDivider />
      <SectionHeader title="About me" />
      <div className='flex flex-col md:flex-row relative md:text-row max-w-6xl p-10 justify-between mx-auto items-center'>
        {/* <div className='relative w-full h-[600px]'> */}
        <motion.div

          className='relative w-full h-[600px]'
        >
          <motion.img
            initial={{
              x: -100,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            src={'/hero_bg-2.jpg'} width={340} height={340} alt={''} className='absolute top-13 right-4 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-72 md:h-72 xl-w-[500px] xl-h-[600px] z-10' />
          <motion.img
            initial={{
              x: -150,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            src={'/hero_bg-2.jpg'} width={340} height={340} alt={''} className='absolute bottom-12 -left-8 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-72 md:h-72 xl-w-[500px] xl-h-[600px] z-10' />
          <div className='w-8 h-8 rounded-md bg-violet-950 absolute top-32 left-10' />
          <div className='w-12 h-12 rounded-md border-2 border-violet-950 absolute top-24' />
          <div className='w-8 h-8 rounded-md border-2 border-violet-950 absolute right-20 bottom-36' />
          <div className='w-12 h-12 rounded-md bg-violet-950 absolute right-10 bottom-40' />
          {/* </div> */}
        </motion.div>
        <div className='space-y-10 px-0 md:px-10 max-w-2xl'>
          <TextReveal>
            <h4 className='text-2xl font-semibold'>
              Here is a <span className='tracking-widest underline decoration-violet-800'>little</span> background
            </h4>
          </TextReveal>
          <TextReveal>
            <p className='text-base'>Ipsum impedit voluptate nisi! Quos dolore, dolores doloribus debitis minima alias eum quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti omnis atque sunt ipsum sequi excepturi commodi illo, error vel repellendus impedit ipsam rem sit quas iste quae autem repudiandae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </TextReveal>
          <TextReveal>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </TextReveal>
          <div className='flex flex-col md:flex-row w-full gap-4 md:gap-8'>
            <div className='flex flex-col p-4 gap-5'>
              <TextReveal>
                <div className='flex flex-col'><strong className='uppercase text-violet-800 tracking-widest'>Name:</strong> <span>Lucas</span></div>
              </TextReveal>
              <TextReveal>
                <div className='flex flex-col'><strong className='uppercase text-violet-800 tracking-widest'>Email:</strong> <span>lucaslucaslucas@wp.pl</span></div>
              </TextReveal>
            </div>
            <div className='flex flex-col p-4 gap-5'>
              <TextReveal>
                <div className='flex flex-col'><strong className='uppercase text-violet-800 tracking-widest'>Education:</strong> <span>Wyzsza szkola robienia halasu</span></div>
              </TextReveal>
              <TextReveal>
                <div className='flex flex-col'><strong className='uppercase text-violet-800 tracking-widest'>Employment:</strong> <span>Open</span></div>
              </TextReveal>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}