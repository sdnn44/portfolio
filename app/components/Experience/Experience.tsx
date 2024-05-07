"use client";
import React from 'react';
import experiences from '@/app/utils/experiences';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import ExperienceCard from './ExperienceCard';
import SectionHeader from '../SectionHeader/SectionHeader';
type Props = {}

export default function Experiance({ }: Props) {
    return (
        <div className='pb-10'>
            <SectionHeader title="Experiance" description="My educational background, combined with my experience as a programmer across various projects and companies, has significantly shaped my skill set." />
            <div className='w-full flex justify-center items-center mx-auto mt-5 md:mt-24 flex-col max-w-[1000px]'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}