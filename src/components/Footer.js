import React from "react";

export default function Footer() {

    const contactMeInfo = "Do you need an enthusiastic individual to join your development team? Email me anytime, at email@gmail.com!"
    const pageInfo = "site by Alec Butterfield - 2023"
    return (
        <div>
            <div className="footer-main-container">
                <div className="footer-contact">
                    <p>{contactMeInfo}</p>
                </div>
                <div className="footer-information">
                    <p>{pageInfo}</p>
                </div>
            </div>
        </div>
    )
}