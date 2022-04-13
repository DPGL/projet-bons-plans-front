import React from "react"
import { Amis } from "../component/Amis"
import { Annonces } from "../component/Annonces"
import { Description } from "../component/Description"
import { Interest } from "../component/Interest"
import { RadiantPicture } from "../component/RadiantPicture"
import './PageProfil.css'

export const App = () => {
    return (
        <div className="main">
            <div>
                <RadiantPicture />
                <h1>Bella Thorne</h1>
            </div>
            <div>
                <Description />
            </div>
            <div className="grid">
                    <h2>Mes annonces</h2>
                    <h2>Mes centres d’interets</h2>
                    <Annonces />
                    <Interest />
            </div>
            <div>
                <h2>Mes amis</h2>
                <Amis />
            </div>
            <div>
                <h2>Mon parrain</h2>
            </div>
        </div>
    )
}