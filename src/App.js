import React from "react";
import Encabezamiento from "./componentes/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Paginas from "./componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";
import Carrito from "./componentes/Carrito";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Encabezamiento />
        <Carrito />
        <Paginas />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
