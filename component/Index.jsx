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
            <Interest />
            <Annonces />
            <Amis />
        </div>
    )
}