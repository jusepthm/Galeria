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
    <div>
      <Link to="/Hojas">
        <figure>
          <img src={Hojas3} alt="" />
          <figcaption>Hojas</figcaption>
        </figure>
      </Link>

      <Link to="/Invierno">
        <figure>
          <img src={Invierno3} alt="" />
          <figcaption>Invierno</figcaption>
        </figure>
      </Link>

      <Link to="/Isla">
        <figure>
          <img src={Isla3} alt="" />
          <figcaption>Isla</figcaption>
        </figure>
      </Link>

      <Link to="/Oceano">
        <figure>
          <img src={Oceano3} alt="" />
          <figcaption>Oceano</figcaption>
        </figure>
      </Link>

      <Link to="/Otoño">
        <figure>
          <img src={Otoño3} alt="" />
          <figcaption>Otoño</figcaption>
        </figure>
      </Link>

      <Link to="/Palma">
        <figure>
          <img src={Palma3} alt="" />
          <figcaption>Palma</figcaption>
        </figure>
      </Link>

      <Link to="Trigo">
        <figure>
          <img src={Trigo3} alt="" />
          <figcaption>Trigo</figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default Navegacion;
