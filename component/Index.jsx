import React from "react"
import {BuyButton} from "./Button"
import { Description } from "./Description"
import { Interest } from "./Interest"

export const App = () => {
    return (
        <div className="main">
            <p>salut</p>
            <BuyButton />
            <Description />
            <Interest />
        </div>
    )
}