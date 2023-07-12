import React from "react";

export default function ProjectCard(props) {
    let {id, title, img, website, dateCreated, description} = props
    let websiteMessage = ""
    
    if (website) {
        websiteMessage = "Click here for the full website!"
    }
    
    return (
        <div className="single-project-container">
            <div className="single-project-title">{title}</div>
            {img ? <img className="single-project-img" src={img && require(`../images/${img}`)} alt="project"></img> : ""} 
            <div className="single-project-iframe-container">
                {website ? <iframe className="single-project-iframe" title="BluePrint" width="100%" height="100%" src={website}></iframe> : ""}
                {/* {website ? <p className="single-project-iframe-clickMe">(Resize)</p> : ""} */}
            </div>
            <a className="single-project-website" href={website}>{websiteMessage}</a>
            <div className="single-project-description">{description}</div>
        </div>
    )
}