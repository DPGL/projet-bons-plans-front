import React from "react"
import { Amis } from "./Amis"
import { Annonces } from "./Annonces"
import { Description } from "./Description"
import { Interest } from "./Interest"
import { RadiantPicture } from "./RadiantPicture"
import './Index.css'

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
        </div>
    )
}