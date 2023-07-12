import React from "react"
import ProjectCard from "../components/ProjectCard"
import {projectsInfo} from "../db/projectsInfo"

export default function Projects() {
    
    const projectArray = projectsInfo.map(item => {
        return (
            <ProjectCard
            key={projectsInfo.id}
            {...item}
            />
        )
    })
    return (
        <div className="projects-main-container">
            <div className="projects-main-title">Projects</div>
            {projectArray}
        </div>
    )
}