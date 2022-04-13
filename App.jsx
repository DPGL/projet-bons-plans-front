import React from "react"
import ReactDOM from "react-dom"
import "./App.css"
import "./public/style/index.css"
import Form_Connexion from "./component/Form_connexion"
import Form_inscription from "./component/Form_inscription"

const App = () => {
    return (
        <Form_inscription/>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)



