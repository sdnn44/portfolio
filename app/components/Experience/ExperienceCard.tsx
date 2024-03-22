"use client";
import Image from 'next/image';
import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useInView } from 'react-intersection-observer';

interface Experience {
    id: number;
    img: string,
    role: string;
    grade?: string;
    company: string;
    date: string;
    desc: string;
    skills?: string[];
}

interface ExperienceProps {
    experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceProps) {

    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div ref={ref} className="vertical-timeline-element">
            <VerticalTimelineElement
                visible={inView}
                className="vertical-timeline-element--work"
                icon={
                    <Image
                        width={300}
                        height={300}
                        alt={experience.company}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            objectFit: "cover"
                        }}
                        src={`/${experience.img}`}
                    />
                }
                contentStyle={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    background: "#1d1836",
                    color: "#fff",
                    boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
                    backgroundColor: "rgba(17, 25, 40, 0.83)",
                    border: "1px solid rgba(255, 255, 255, 0.125)",
                    borderRadius: "7px",
                }}
                contentArrowStyle={{
                    borderRight: "7px solid rgba(255, 255, 255, 0.3)",
                }}
                date={experience.date}
            >
                <div className='flex flex-row items-center gap-4'>
                    <Image src={`/${experience.img}`} alt={''} width={300} height={300} className='rounded-xl w-[60px] h-[60px]' />
                    <div className='flex flex-col justify-start items-start'>
                        <div className='font-semibold text-gray-300'>{experience.company}</div>
                        <div className='font-medium text-[14px] text-gray-500'>{experience.role}</div>
                        <div className='text-[12px] text-gray-500'>{experience.date}</div>
                    </div>
                </div>
                <div>
                    <span className='text-[15px] text-gray-300'>{experience.desc}</span>
                </div>
                <span className='text-[14px] text-gray-400'><b>Grade:</b> {experience.grade}</span>
            </VerticalTimelineElement>
        </div>
    )
}