import React from "react";

export default function ProjectCard(props) {
    let {id, title, img, dateCreated, description} = props
    console.log(props)
    return (
        <div className="single-project-container">
            <div className="single-project-id">{id}</div>
            <div className="single-project-title">{title}</div>
            <div className="single-project-img">{img}</div>
            <div className="single-project-dateCreated">{dateCreated}</div>
            <div className="single-project-description">{description}</div>
        </div>
    )
}