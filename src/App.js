import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hojas from "./components/Hojas";
import Invierno from "./components/Invierno";
import Isla from "./components/Isla";
import Oceano from "./components/Oceano";
import Otoño from "./components/Otoño";
import Palma from "./components/Palma";
import Trigo from "./components/Trigo";
import Navegacion from "./components/Navegacion";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Galeria</h1>
      </div>
      <Routes>
        <Route path="/Hojas" component={Hojas} />
        <Route path="/Invierno" component={Invierno} />
        <Route path="/Isla" component={Isla} />
        <Route path="/Oceano" component={Oceano} />
        <Route path="/Otoño" component={Otoño} />
        <Route path="/Palma" component={Palma} />
        <Route path="/Trigo" component={Trigo} />
        </Routes>
        <Navegacion />
    </Router>
  );
}

export default App;
