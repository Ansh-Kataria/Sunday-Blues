import React from "react";
import "./Section3.css";
import { section3 } from "../../assets";

const Section3 = () => {
  return (
    <div className="section3">
      <div className="section3-left">
        <div className="section3-left-heading">
          <p>DISCOS LIMITADOS E EXCLUSIVOS</p>
        </div>
        <div className="section3-left-text">
          <p>
            Cada assinatura inclui discos de vinil de edição limitada,
            escolhidos a dedo por nossa equipe de curadores de música, além de
            uma seleção de brindes exclusivos, como camisetas, pôsteres e outros
            itens surpresa.
          </p>
        </div>
      </div>
      <div className="section3-right">
        <img src={section3} alt="" />
      </div>
    </div>
  );
};

export default Section3;
