import React from "react"
import ReactDOM from "react-dom"
import "./public/style/index.css"
import BP7Dpro from "./Pages/BP7Dpro"
import Bp4DAnnonceLogement from "./Pages/Bp4DAnnonceLogement"

const App = () => {
    return(
    <Bp4DAnnonceLogement />
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)



