import React, { useState, useEffect } from "react";
import SingleCarouselComponent  from "./SingleCarouselComponent";
import { gizmoData } from "../db/gizmoData"
import boba1 from "../images/boba1.png"
import boba2 from "../images/boba2.jpg"
import boba3 from "../images/boba3.jpg"

export default function CarouselCard() {
    const [carouselIdx, setCarouselIdx] = useState(0)
    let imgArray = [boba1, boba2, boba3]
    let carouselData = gizmoData[0].data
    let carouselArray = carouselData.map(item => {
         return (
            <SingleCarouselComponent
            {...item} imgArray={imgArray}
            />
            )
        }
    )

    function handleCarouselLeftButton(e) {
        e.preventDefault();
        setCarouselIdx((prevData) => {
            return  carouselIdx > 0 ? prevData - 1 : 2
        })
    }
    
    function handleCarouselRightButton(e) {
        e.preventDefault();
        setCarouselIdx((prevData) => {
            return carouselIdx < 2 ? prevData + 1 : 0
        })
        console.log(carouselIdx)
    }

    useEffect(() => {
        let slider = setInterval(() => {
            setCarouselIdx((prevData) => {
                console.log(prevData)
                return  prevData < 2 ? prevData + 1 : 0
            })
        }, 5000)
        return () => {
            clearInterval(slider)
        }
    }, [])

    return (
        <div className="gizmos-carousel-main-container">
            <button className="gizmo-carousel-button" name="left" onClick={handleCarouselLeftButton}>Left</button>
            <div className="gizmos-carousel-card-container">
                <div>{carouselArray[carouselIdx]}</div>
                <img className="gizmos-single-boba-img" src={imgArray[carouselIdx]} alt="boba"/>
            </div>
            <button className="gizmo-carousel-button" name="right" onClick={handleCarouselRightButton}>Right</button>
        </div>
    )
}