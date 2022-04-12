import React from "react"
import { Amis } from "./Amis"
import { Annonces } from "./Annonces"
import { BuyButton } from "./Button"
import { Description } from "./Description"
import { Interest } from "./Interest"

export const App = () => {
    return (
        <div className="main">
            <p>salut</p>
            <BuyButton />
            <Description />
            <h2>Mes centres d’interets</h2>
            <Interest />
            <h2>Mes annonces</h2>
            <Annonces />
            <h2>Mes amis</h2>
            <Amis />
        </div>
    )
}