import React from "react";
import "./Section4.css"
import { section4 } from "../../assets";
const Section4 = () => {
  return (
    <div className="section4">
      <div className="section4-left">
        <img src={section4} alt="section4" />
        <div className="section4-left-text">
            <p>CONHEÇA OS PLANOS:</p>
        </div>
      </div>
      <div className="section4-right">
        <div className="section4-right-heading">
          <p>OFERTAS EXCLUSIVAS PARA MEMBROS</p>
        </div>
        <div className="section4-right-text">
          <p>
            Além de receber discos especiais em casa todos os meses, os
            assinantes têm acesso a ofertas exclusivas e ganham cashback para
            utilizar na loja da Sunday Blues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
