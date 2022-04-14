import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./public/style/index.css";
import BP7Dpro from "./Pages/BP7Dpro";
import Bp4DAnnonceLogement from "./Pages/Bp4DAnnonceLogement";
import Bp2DAnnonceStage from "./Pages/Bp2DAnnonceStage";
import Layout from "./component/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/logement" element={<Bp4DAnnonceLogement />} />
          <Route path="/pro" element={<BP7Dpro />} />
          <Route path="/stage" element={<Bp2DAnnonceStage />} />
        </Route>
        <Route />
        <Route />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
