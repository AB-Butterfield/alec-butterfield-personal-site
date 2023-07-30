import React, { useEffect } from "react"
import { useState } from "react"
import CarouselCard from "../components/CarouselCard"
import { gizmoData } from "../db/gizmoData"
import Toontown from "../components/Toontown"
import ToontownGagCard from "../components/ToontownGagCard"

export default function Gizmos() {
    const [carouselIdx, setCarouselIdx] = useState(0)
    let carouselData = gizmoData[0].data
    const [carouselArray] = useState(carouselData)

    const toontownGags = gizmoData[1].data
    const [gagClicked, setGagClicked] = useState(0)

    //Carousel
    useEffect(() => {
        const lastIdx = (carouselArray.length - 1)
        if (carouselIdx > lastIdx) {
            setCarouselIdx(0)
        }
        if (carouselIdx < lastIdx) {
            setCarouselIdx(lastIdx)
        }
    }, [carouselIdx, carouselArray])

    // useEffect(() => {
    //     let slider = setInterval(() => {
    //         setCarouselIdx(carouselIdx + 1)
    //         console.log('Changing Idx...', carouselIdx)
    //     }, 5000)
    //     return () => {
    //         clearInterval(slider)
    //     }
    // }, [])

    //Toontown



    return (
        <div className="gizmos-main-container"> Gizmos
            <div className="gizmos-single-name">Sample Carousel for Boba</div>
            <div className="gizmos-carousel-main-container">
                <CarouselCard />
            </div>
            <div className="gizmos-toontown-main">
                <Toontown 
                data = {toontownGags}
                isGagClicked = {gagClicked === false}
                />
            </div>
        </div>
    )
}