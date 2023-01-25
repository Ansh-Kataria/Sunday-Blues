import React from "react";
import { section2 } from "../../assets";
import "./Section2.css";

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
            Os álbuns são de artistas consagrados e também de novos talentos,
            garantindo uma experiência musical eclética e sempre emocionante.
            Além disso, os assinantes têm acesso a conteúdo exclusivo, como
            entrevistas com os artistas e sessões de perguntas e respostas com a
            equipe de curadores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
