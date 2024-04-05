import React from 'react'

type HeaderProps = {
    title: string,
    description?: string
}

export default function SectionHeader({ title, description }: HeaderProps) {
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-5xl font-bold tracking-widest hero-text'>{title}</h1>
            <span className='text-xl font-semibold'>{description}</span>
        </div>
    )
}