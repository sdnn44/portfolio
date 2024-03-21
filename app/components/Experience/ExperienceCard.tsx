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
                    <img
                        width="100%"
                        height="100%"
                        alt={experience.company}
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                        src={experience.img}
                    />
                }
                contentStyle={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    background: "#1d1836",
                    color: "#fff",
                    boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
                    // backdropFilter: "blur(3px) saturate(106%)",
                    backgroundColor: "rgba(17, 25, 40, 0.83)",
                    border: "1px solid rgba(255, 255, 255, 0.125)",
                    borderRadius: "6px",
                }}
                contentArrowStyle={{
                    borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
                }}
                date={experience.date}
            >
                <div>
                    <Image src={`/${experience.img}`} alt={''} width={100} height={100} />
                    <div>
                        <div>{experience.company}</div>
                        <div>{experience.role}</div>
                        <div>{experience.date}</div>
                    </div>
                </div>
                <div><b>Grade: </b>{experience.grade}</div>
                <div>
                    <span>{experience.desc}</span>
                </div>
            </VerticalTimelineElement>
        </div>
    )
}