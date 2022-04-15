import React from "react"
import './Interest.css'
import img1 from '../public/interest/Camera alt.png'
import img2 from '../public/interest/Chef Hat.png'
import img3 from '../public/interest/Cinema.png'
import img4 from '../public/interest/Cocktail.png'
import img5 from '../public/interest/Market Square.png'
import img6 from '../public/interest/Queue music.png'

export const Interest = () => {
    return (
        <div className="interest">
            <img className="int-img" src={img1} />
            <img className="int-img" src={img2} />
            <img className="int-img" src={img3} />
            <img className="int-img" src={img4} />
            <img className="int-img" src={img5} />
            <img className="int-img" src={img6} />
        </div>
    )
}