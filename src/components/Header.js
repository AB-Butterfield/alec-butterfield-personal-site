import React from "react";
import profilePic from "../images/Alec-Profile-Pic.jpg"
import cautionLogo from "../images/caution-icon.png"

export default function Header() {
    const underConstructionText = "This site is still under construction. Check back later for updates!"
    var header = document.getElementsByClassName("header-main-container");
    var sticky = header.offsetTop;

    console.log("header", header[0])
    console.log("sticky", sticky)

    window.onscroll = function() {makeStickyHeader()};

    function makeStickyHeader() {
        if (window.scrollY > sticky) {
            header.classList.add("sticky")
        } else {
            header.classList.remove("sticky")
        }
    }

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
            <div className="header-under-construction-container">
                <div className="header-under-construction">
                    <img className="header-caution-icon" src={cautionLogo} alt="caution"/>
                    {underConstructionText}</div>
                </div>
        </div>
    )
}