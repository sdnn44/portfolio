"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import TextReveal from '../TextReveal/TextReveal';

type Props = {}

export default function About({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='pt-20 relative'>
      <div className="custom-shape-divider-top-1712176223">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>

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