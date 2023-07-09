import React from "react"
import ProjectCard from "../components/ProjectCard"
import data from "../db/projectsInfo"

export default function Projects() {
    const projectArray = data.map(item => {
        return (
            <ProjectCard
            key={data.id}
            {...item}
            />
        )
    })
    return (
        <div className="projects-main-container">
            <h1>Projects</h1>
            {projectArray}
        </div>
    )
}