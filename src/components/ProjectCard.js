import React from "react";
import blueprintImg from "../images/blueprint-img.png"


export default function ProjectCard(props) {
    let {id, title, img, website, dateCreated, description} = props
    let websiteMessage = ""
    if (website) {
        websiteMessage = "Click here for website!"
    }
    
    return (
        <div className="single-project-container">
            <div className="single-project-title">{title}</div>
            <a className="single-project-website" href={website && {website}}>{websiteMessage}</a>
            <img className="single-project-img" src={require(`../images/${img}`)} alt="project"></img>
            <div className="single-project-dateCreated">{dateCreated}</div>
            <div className="single-project-description">{description}</div>
        </div>
    )
}