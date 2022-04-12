import React from "react"
import Sidebar from "../component/Sidebar";
import Logement from "../component/Bp4DAnnonceLogement"

import '/pages/Bp4DAnnonceStage.css'
import '../component/Main.css'


const Bp4DAnnonceStage = () => {
    return (
        <div className="body-header">
            <Sidebar />
            <Logement />
        </div>
    )
}

export default Bp4DAnnonceStage;