import React from "react";
import "./Brands.css";
import nikeLogo from "../Assets/nikelogo.png";
import pumaLogo from "../Assets/pumalogo.png";
import adidasLogo from "../Assets/adidaslogo.png";
import airJordanLogo from "../Assets/airjordanlogo.png";
import reebokLogo from "../Assets/reeboklogo.png";
import filaLogo from "../Assets/filalogo.png";
import decathlonLogo from "../Assets/decathlonlogo.png";
import converseLogo from "../Assets/converselogo.png";

function Brands() {
  const brands = [
    { src: nikeLogo, alt: "Nike Logo" },
    { src: pumaLogo, alt: "Puma Logo" },
    { src: adidasLogo, alt: "Adidas Logo" },
    { src: airJordanLogo, alt: "Air Jordan Logo" },
    { src: reebokLogo, alt: "Reebok Logo" },
    { src: filaLogo, alt: "Fila Logo" },
    { src: decathlonLogo, alt: "Decathlon Logo" },
    { src: converseLogo, alt: "Converse Logo" }
  ];

  return (
    <div className="brands">
      <h2 className="title">Brands We Serve</h2>
      <div className="row">
        {brands.map((brand, index) => (
          <div className="col-5" key={index}>
            <img src={brand.src} alt={brand.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
