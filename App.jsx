import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./public/style/index.css";
import BP7Dpro from "./Pages/BP7Dpro";
import Bp4DAnnonceLogement from "./Pages/Bp4DAnnonceLogement";
import Bp2DAnnonceStage from "./Pages/Bp2DAnnonceStage";
import Login from "./component/Form_connexion"
import Register from "./component/Form_inscription"
import Layout from "./component/Layout";
import { createRoot } from "react-dom/cjs/react-dom.production.min";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/logement" element={<Bp4DAnnonceLogement />} />
          <Route path="/pro" element={<BP7Dpro />} />
          <Route path="/stage" element={<Bp2DAnnonceStage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route />
        <Route />
      </Routes>
    </Router>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
createRoot(document.getElementById('root')).render(<App />)