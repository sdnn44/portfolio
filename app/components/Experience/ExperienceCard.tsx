"use client";
import Image from 'next/image';
import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useInView } from 'react-intersection-observer';
import exp from 'constants';

interface Experience {
    id: number;
    img: string,
    role: string;
    grade?: string;
    company: string;
    date: string[];
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
                        width={500}
                        height={500}
                        alt={experience.company}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "100%",
                            objectFit: "cover"
                        }}
                        src={`/${experience.img}`}
                    />
                }
                contentStyle={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    background: "#0c0c1d",
                    color: "#fff",
                    boxShadow: "rgba(76,29,149, 0.35) 0px 4px 20px",
                    border: "1px solid rgba(76,29,149, 0.6)",
                    borderRadius: "7px",
                }}
                contentArrowStyle={{
                    borderRight: "7px solid rgba(76,29,149, 0.6)",
                }}
                date={experience.date[0]}
            >
                <div className='flex flex-row items-center gap-4'>
                    <Image src={`/${experience.img}`} alt={''} width={300} height={300} className='rounded-xl w-[60px] h-[60px] border-2 border-violet-900/40' />
                    <div className='flex flex-col justify-start items-start'>
                        <div className='font-semibold text-gray-300'>{experience.company}</div>
                        <div className='font-medium text-[14px] text-gray-500'>{experience.role}</div>
                        <div className='text-[12px] text-gray-500'>{experience.date.map((date, index) => (
        <div key={index}>{date}</div>
    ))}</div>
                    </div>
                </div>
                <div>
                    <span className='text-[15px] text-gray-300'>{experience.desc}</span>
                </div>

                {experience.grade && <span className='text-[14px] text-gray-400'><b>Grade:</b> {experience.grade}</span>}
                {experience.skills &&
                    <div className='flex gap-1 flex-wrap w-full'>
                        <span className='text-[14px] text-gray-400'><b>Skills:</b></span>
                        {experience.skills?.map((skill, index) => (
                            <span className='text-[14px] text-gray-400' key={index}>{skill} •</span>
                        ))}
                    </div>}
            </VerticalTimelineElement>
        </div>
    )
}