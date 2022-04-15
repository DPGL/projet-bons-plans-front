import React from "react"
import './Annonces.css'
import img1 from '../public/annonces/photo1.png'
import img2 from '../public/annonces/photo2.png'
import img3 from '../public/annonces/photo3.png'

export const Annonces = () => {
    return (
        <div className="annonces">
            <button className="nextPrevBtn">❮</button>
            <img className="ann-img" src={img1} />
            <img className="ann-img" src={img2} />
            <img className="ann-img" src={img3} />
            <button className="nextPrevBtn">❯</button>
        </div>
    )
}