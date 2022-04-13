import React from "react"
import { BlackButton } from "../component/BlackButton"
import { Galerie } from "../component/Galerie"
import './Accueil.css'

export const Accueil = () => {
    return (
        <div className="main">
            <BlackButton />
            <h2>BONS PLANS</h2>
            <Galerie />
        </div>
    )
}