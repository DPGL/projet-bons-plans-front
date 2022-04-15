import React from "react"
import './RadiantPicture.css'
import ProfilePicture from '../public/profile-picture.png'

export const RadiantPicture = () => {
    return (
        <div className="radpict">
            <img className="pfp" src={ProfilePicture} />
        </div>
    )
}