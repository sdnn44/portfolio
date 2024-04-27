"use client";
import React from 'react';
import experiences from '@/app/utils/experiences';

// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import ExperienceCard from './ExperienceCard';
import { experiance } from '@/app/utils/icons';
import SectionHeader from '../SectionHeader/SectionHeader';
type Props = {}

export default function Experiance({ }: Props) {
    return (
        <div className='pb-10'>
            <SectionHeader title="Experiance" description="My work experience as a software engineer and working on different companies and projects." />
            <div className='w-full flex justify-center items-center mx-auto mt-5 md:mt-24 flex-col max-w-[1000px]'>
                {/* <Timeline position="alternate">
                    {experiences.map((experience, index) => (
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant='outlined' color='secondary' />
                                {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <ExperienceCard experience={experience} key={experience.id} />
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline> */}

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