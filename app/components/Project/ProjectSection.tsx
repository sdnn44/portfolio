import React from 'react';

interface Project {
    id: number;
    title: string;
    img: string;
    description: string;
}

interface SectionProps {
    project: Project;
}

const ProjectSection = ({ project }: SectionProps) => {
    return (
        <section>
            {project.title}
        </section>
    );
};

export default ProjectSection;