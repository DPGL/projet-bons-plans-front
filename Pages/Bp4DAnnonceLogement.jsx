import React from "react"
import Sidebar from "../component/Sidebar";
import Logement from "../component/Logement"
import Footer from "../component/Footer"

import '/Pages/Bp4DAnnonceLogement.css'
import '../component/Main.css'


const Bp4DAnnonceLogement = () => {
    return (
        <div className="page">
            <div className="header-body">
          <Sidebar />
            <Logement />
            </div>
            <Footer />
        </div>
    )
}

export default Bp4DAnnonceLogement;