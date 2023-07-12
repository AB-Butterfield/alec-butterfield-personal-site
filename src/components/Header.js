import React from "react";
import profilePic from "../images/Alec-Profile-Pic.jpg"
import cautionLogo from "../images/caution-icon.png"
import { useEffect } from "react";

export default function Header() {
    const underConstructionText = "This site is still under construction. Check back later for updates!"
    
    const isSticky = (e) => {
        const header = document.querySelector('.header-bottom-section')
        const scrollTop = window.scrollY;
        scrollTop >= (250) ? header.classList.add('is-sticky') : header.classList.remove('is-sticky')
    }
    
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky)
        }
    })
    return (
        <div className="header-main-container">
            <div className="header-top-section">
                <img className="header-personal-img skeleton" src={profilePic} alt="myImage" />
                <h1 className="header-personal-name">Alec Butterfield</h1>
            </div>
            <div className="header-bottom-section">
                <div className="header-link-container">
                    <a className="header-link" href = "./home">Home</a>
                    <a className="header-link" href="./projects">Projects</a>
                    <a className="header-link" href="./goals">Goals</a>
                    <a className="header-link" href="./gizmos">Gizmos</a>
                    <a className="header-link" href = "./contact">Contact</a>
                </div>
                <div className="header-under-construction-container">
                    <div className="header-under-construction">
                        <img className="header-caution-icon" src={cautionLogo} alt="caution"/>
                        {underConstructionText}
                    </div>
                </div>
            </div>
           
        </div>
    )
}