import React from "react";
import "./Section1.css";
import { section11 } from "../../assets";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="section1-left">
        <div className="section1-left-heading">
          <p>O CLUBE DO DISCO THE DISC CLUB</p>
        </div>
        <div className="section1-left-text">
          <p>
            O serviço de assinatura mensal do clube oferece aos amantes da
            música a oportunidade de receber discos de vinil exclusivos e
            limitados diretamente em suas casas todos os meses.
          </p>
        </div>
      </div>
      <div className="section1-right">
        <img src={section11} alt="section1" />
      </div>
    </div>
  );
};

export default Section1;
