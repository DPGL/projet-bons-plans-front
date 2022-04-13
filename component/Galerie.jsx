import React from "react"
import './Galerie.css'
import img1 from '../public/galerie/img1.png'
import img2 from '../public/galerie/img2.png'
import img3 from '../public/galerie/img3.png'
import img4 from '../public/galerie/img4.png'

export const Galerie = () => {
    return (
        <div className="galerie">
            <img className="gal-img" src={img1} />
            <img className="gal-img" src={img2} />
            <img className="gal-img" src={img3} />
            <img className="gal-img" src={img4} />
        </div>
    )
}