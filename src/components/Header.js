import React from "react";

export default function Header() {
    return (
        <div className="header-main-container">
            <div className="header-top-section">
                <img className="header-personal-img" alt="myImage" />
                <h1 className="header-personal-name">Alec Butterfield</h1>
            </div>
            <div className="header-bottom-section">
                <a href = "./home">Home</a>
                <a href="./projects">Projects</a>
                <a href="./goals">Goals</a>
                <a href="./gizmos">Gizmos</a>
                <a href = "./contact">Contact</a>
            </div>
        </div>
    )
}