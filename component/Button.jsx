import React, {useState} from "react"
import './Button.css'

export const BuyButton = () => {

    const [bool, setBool] = useState(false)

    const handleClick = () => {
        console.log("Hello World!")
        setBool(!bool)
        console.log(bool)
    }

    return (
        <button className="yellowBtn" onClick={handleClick}>Acheter</button>
    )
}