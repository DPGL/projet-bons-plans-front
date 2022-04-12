import { Route, Routes } from "react-router-dom";
import AnnonceLogement from "./pages/Bp2DAnnonceStage";



const Router = () => {
    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<AnnonceLogement/>} />
                <Route path='/decouvrir' element={<Discover />} />
                <Route path='/ma-liste' element={<UserList title="Mes films a voir" ctx="later"/>} />
                <Route path='/favoris' element={<UserList title="Mes films favoris" ctx="fav"/>} />
            </Routes>
        </Fragment>
    )
}

export default Router;