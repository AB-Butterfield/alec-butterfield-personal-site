import React from "react";

export default function Header() {
    return (
        <div className="header-main-container">
            <div className="header-top-section">
                <img className="header-personal-img" alt="myImage" />
                <h1 className="header-personal-name">Alec Butterfield</h1>
            </div>
            <div className="header-bottom-section">
                <a>Home</a>
                <a>Projects</a>
                <a>Goals</a>
                <a>Gizmos</a>
                <a>Contact</a>
            </div>
        </div>
    )
}