import React from "react"
import ReactDOM from "react-dom"

import Footer from "./component/Footer"
import Bp4DAnnonceStage from "./pages/Bp4DAnnonceStage"

const App = () => {
    return (
        <div>
            <Bp4DAnnonceStage />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)