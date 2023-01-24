import React from "react";
import { section2 } from "../../assets";
import "./Section2.css"

const Section2 = () => {
  return (
    <div className="section2">
      <div className="section2-left">
        <img src={section2} alt="section2" />
      </div>
      <div className="section2-right">
        <div className="section2-right-heading">
          <p>ARTISTAS NOVOS E CONSAGRADOS</p>
        </div>
        <div className="section2-right-text">
          <p>
            O serviço de assinatura mensal do clube oferece aos amantes da
            música a oportunidade de receber discos de vinil exclusivos e
            limitados diretamente em suas casas todos os meses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
