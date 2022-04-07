import React from "react"
import {BuyButton} from "./Button"
import {FixedMenu} from "./FixedMenu"

export const App = () => {
    return (
        <div className="main">
            <FixedMenu />
            <p>salut</p>
            <BuyButton />
        </div>
    )
}