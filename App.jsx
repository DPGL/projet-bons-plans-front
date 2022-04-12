import React from "react"
import ReactDOM from "react-dom"
import Bp4DAnnonceStage from "./pages/Bp4DAnnonceStage"

const App = () => {
    return (
        <div>
            <Bp4DAnnonceStage />,
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)