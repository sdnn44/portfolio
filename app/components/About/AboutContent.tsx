import React from 'react'
import TextReveal from '../TextReveal/TextReveal'

type Props = {}

export default function AboutContent({ }: Props) {
    return (
        <>
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
        </>

    )
}