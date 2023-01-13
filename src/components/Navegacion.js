import React from "react";
import { Link } from "react-router-dom";
import Hojas3 from '../img/hojas.jpg'
import Invierno3 from '../img/invierno.jpg'
import Isla3 from '../img/isla-tropical.jpg'
import Oceano3 from '../img/oceano.jpg'
import Otoño3 from '../img/otoño.jpg'
import Palma3 from '../img/palma.jpg'
import Trigo3 from '../img/trigo.jpg'


const Navegacion = () => {
  return (
    <div className="container mt-3 padre" >
      <Link to="/Hojas" className="Links" >
        <figure>
          <img src={Hojas3} alt="" className="tamaño-img" />
          <figcaption>Hojas</figcaption>
        </figure>
      </Link>

      <Link to="/Invierno" className="Links">
        <figure>
          <img src={Invierno3} alt="" className="tamaño-img" />
          <figcaption>Hojas</figcaption>
        </figure>
      </Link>

      <Link to="/Isla" className="Links">
        <figure>
          <img src={Isla3} alt="" className="tamaño-img" />
          <figcaption>Hojas</figcaption>
        </figure>
      </Link>

      <Link to="/Oceano" className="Links">
        <figure>
          <img src={Oceano3} alt="" className="tamaño-img" />
          <figcaption>Hojas</figcaption>
        </figure>
      </Link>

      <Link to="/Otoño" className="Links">
        <figure>
          <img src={Otoño3} alt="" className="tamaño-img" />
          <figcaption>Hojas</figcaption>
        </figure>
      </Link>

      <Link to="/Palma">
        <Link>
          <img src={Palma3} alt="" className="tamaño-img" />
          <figcaption>Hojas</figcaption>
        </Link>
      </Link>

      <Link to="Trigo" className="Links">
        <figure>
          <img src={Trigo3} alt="" className="tamaño-img" />
          <figcaption>Hojas</figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default Navegacion;
