import React from "react"
import './Description.css'
import logo from '../public/logo.png'

export const Description = () => {
    return (
        <div>
            <div className="logo-title">
                <img className="logo" src={logo} />
                <h2>Institut supérieur de design de Saint-Malo</h2>
            </div>
            <p>je suis jeune, ambitieuse, pleine d’énergie et prête à affronter le monde qui m’entour !! Ma passion ? Le cinéma. Et j’en ai même fait mon métier. À côté de mes études biensur !!!!! xd</p>
        </div>
    )
}