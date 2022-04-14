import React from "react"
import { BlackButton } from "../component/BlackButton"
import { Galerie } from "../component/Galerie"
import './Accueil.css'

export const Accueil = () => {
    return (
        <div className="main">
            <div className="centered">
                <BlackButton />
                <BlackButton />
                <h2>Qui êtes-vous ?</h2>
            </div>
            <h2>BONS PLANS</h2>
            <Galerie />
            <h2>CE QUI PLAIT LE +</h2>
            <Galerie />
            <h2>DERNIÈREMENT</h2>
            <Galerie />
        </div>
    )
}