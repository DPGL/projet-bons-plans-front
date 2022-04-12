import React from "react"
import Sidebar from "../component/Sidebar";
import Logement from "../component/Bp4DAnnonceLogement"
import Footer from "../component/Footer"

import '/pages/Bp4DAnnonceLogement.css'
import '../component/Main.css'


const Bp4DAnnonceLogement = () => {
    return (
        <div className="body-header">
            <Sidebar />
            <Logement />
        </div>
    )
}

export default Bp4DAnnonceLogement;