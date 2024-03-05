import portfolioProjects from '@/app/utils/projects';
import React from 'react'
import ProjectSection from './ProjectSection';

export default function Project() {
    return (
        <div>
            <div>
                <h1 className='text-3xl'>Feature works</h1>
            </div>
            {portfolioProjects.map(project => (
                <ProjectSection project={project} key={project.id} />
            ))}
        </div>
    );
}