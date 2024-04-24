import React from 'react'
import Button from '../Button/Button'
import TextReveal from '../TextReveal/TextReveal'

type Props = {}

const HeroContent = (props: Props) => {
    return (
        <div className='flex flex-col gap-6 relative max-w-[600px]'>
            <h1 className='text-5xl font-bold z-10'>
                <TextReveal>
                    <span className='z-20'>Hi, I'm</span>
                    <span className='hero-text z-20'> Łukasz</span>
                </TextReveal>
                <TextReveal>
                    <span className='text-6xl opacity-30 tracking-widest z-0'>Web Developer</span>
                </TextReveal>
            </h1>
            <TextReveal>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellat accusamus reiciendis quibusdam error modi dignissimos tempore, nam soluta, impedit explicabo, ipsa optio sit minus itaque? Modi sed atque ratione!</p>
            </TextReveal>
            <div className='flex gap-10 w-full justify-evenly'>
                <Button className="button left" label='Download CV'>
                    <p className='text-[#5a21b5]'>Resume</p>
                </Button>
                <Button className="button left" label='Get in touch'>
                    <p className='text-[#5a21b5]'>Contact</p>
                </Button>
                {/* <a href='#' className='button left'>Contact</a> */}
            </div>
        </div>
    )
}

export default HeroContent