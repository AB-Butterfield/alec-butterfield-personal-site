import React from "react";
import profilePic from "../images/Alec-Profile-Pic.jpg"

export default function Header() {

    return (
        <div className="header-main-container">
            <div className="header-top-section">
                <img className="header-personal-img skeleton" src={profilePic} alt="myImage" />
                <h1 className="header-personal-name">Alec Butterfield</h1>
            </div>
            <div className="header-bottom-section">
                <a className="header-link" href = "./home">Home</a>
                <a className="header-link" href="./projects">Projects</a>
                <a className="header-link" href="./goals">Goals</a>
                <a className="header-link" href="./gizmos">Gizmos</a>
                <a className="header-link" href = "./contact">Contact</a>
            </div>
        </div>
    )
}