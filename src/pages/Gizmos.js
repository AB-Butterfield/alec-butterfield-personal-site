import React, { useEffect } from "react"
import { useState } from "react"
import CarouselCard from "../components/CarouselCard"
import { gizmoData } from "../db/gizmoData"


export default function Gizmos() {
    const [carouselIdx, setCarouselIdx] = useState(0)
    let carouselData = gizmoData[0].data
    const [carouselArray] = useState(carouselData)

    //Carousel
    useEffect(() => {
        const lastIdx = (carouselArray.length - 1)
        if (carouselIdx > lastIdx) {
            setCarouselIdx(0)
            console.log('Going to beginning...')
        }
        if (carouselIdx < lastIdx) {
            setCarouselIdx(lastIdx)
            console.log('Going to end')
        }
    }, [carouselIdx, carouselArray  ])

    // useEffect(() => {
    //     let slider = setInterval(() => {
    //         setCarouselIdx(carouselIdx + 1)
    //         console.log('Changing Idx...', carouselIdx)
    //     }, 5000)
    //     return () => {
    //         clearInterval(slider)
    //     }
    // }, [])

    return (
        <div className="gizmos-main-container">
            <div>Sample Carousel for Boba</div>
            <div className="gizmos-carousel-main-container">
                <CarouselCard />
            </div>
        </div>
    )
}