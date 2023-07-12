import emailIcon from "../images/gmail-icon.png"
import gitHubIcon from "../images/github-icon.png"
import linkedInIcon from "../images/linkedin-icon.png"
import React from "react"

export default function Contact() {
    const linkedIn = "http://www.linkedin.com/in/alec-butterfield"
    const gitHub = "http://www.github.com/AB-Butterfield"
    const email = "alec.butterfield1@gmail.com"

    return (
        <div className="contact-page-main-container">
            <div className="contact-page-social-container">
                <div className= "contact-page-contact-me">Contact me!</div>
                <div className= "contact-page-linkedIn">
                    <img src={linkedInIcon} className="contact-page-linkedIn-icon" alt="LinkedIn" />
                    LinkedIn:
                    <a href={linkedIn} className="contact-page-linkedIn">Alec-Butterfield</a>
                    </div>
                <div className= "contact-page-gitHub">
                    <img src={gitHubIcon} className="contact-page-gitHub-icon" alt="GitHub" />
                    GitHub: 
                    <a href={gitHub} className="contact-page-gitHub">AB-Butterfield</a>
                    </div>
                <div className= "contact-page-email">
                    <img src={emailIcon} className="contact-page-email-icon" alt="Email" />  
                    Email: {email}</div>
            </div>
            

        </div>
    )
}