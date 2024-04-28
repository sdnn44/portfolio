import React from 'react'
import TextReveal from '../TextReveal/TextReveal'

type Props = {}

export default function AboutContent({ }: Props) {
    return (
        <>
            <TextReveal>
                <h4 className='text-xl md:text-2xl font-semibold'>
                    Here is a <span className='tracking-widest underline decoration-violet-800'>little</span> background
                </h4>
            </TextReveal>
            <TextReveal>
                <p className='text-sm md:text-base'>Ipsum impedit voluptate nisi! Quos dolore, dolores doloribus debitis minima alias eum quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti omnis atque sunt ipsum sequi excepturi commodi illo, error vel repellendus impedit ipsam rem sit quas iste quae autem repudiandae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </TextReveal>
            <TextReveal>
                <p className='text-sm md:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </TextReveal>
            <div className='flex flex-row md:flex-row w-full md:gap-8'>
                <div className='flex flex-col p-4 gap-5 md:gap-5'>
                    <TextReveal>
                        <div className='text-sm flex flex-col'><strong className='uppercase text-violet-800 tracking-widest text-base md:text-lg'>Name:</strong> <span className='text-sm'>Lucas</span></div>
                    </TextReveal>
                    <TextReveal>
                        <div className='text-sm flex flex-col'><strong className='uppercase text-violet-800 tracking-widest text-base md:text-lg'>Email:</strong> <span className='text-sm'>lucaslucaslucas@wp.pl</span></div>
                    </TextReveal>
                </div>
                <div className='flex flex-col p-4 gap-5 md:gap-5'>
                    <TextReveal>
                        <div className='text-sm flex flex-col'><strong className='uppercase text-violet-800 tracking-widest text-base md:text-lg'>Education:</strong> <span className='text-sm'>Wyzsza szkola </span></div>
                    </TextReveal>
                    <TextReveal>
                        <div className='text-sm flex flex-col'><strong className='uppercase text-violet-800 tracking-widest text-base md:text-lg'>Employment:</strong> <span className='text-sm'>Open</span></div>
                    </TextReveal>
                </div>
            </div>
        </>

    )
}