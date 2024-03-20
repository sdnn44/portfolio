import Image from 'next/image';
import React from 'react';

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
    return (
        <div>
            <div>
                <Image src={`/${experience.img}`} alt={''} width={100} height={100}/>
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
        </div>
    )
}