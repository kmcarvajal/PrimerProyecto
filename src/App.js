import React from "react";
import Encabezamiento from "./componentes/Header/index";
import { BrowserRouter as Router } from "react-router-dom";
import Paginas from "./componentes/Paginas";

function App() {
  return (
    <div className="App">
      <Router>
        <Encabezamiento />
        <Paginas />
      </Router>
    </div>
  );
}

export default App;
