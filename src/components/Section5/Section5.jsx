import React from "react";
import "./Section5.css";
import { card1, card2, card3, review1 } from "../../assets";

const Section5 = () => {
  return (
    <div className="section5">
      <div className="section5-first">
        <img src={card1} alt="card1" />
        <img src={card2} alt="card2" />
        <img src={card3} alt="card3" />
      </div>
      {/* <hr className="hr"/> */}
      <div className="section5-second">
        <div className="section5-second-left">
          <div className="section5-second-left-heading">
            o que os membros do clube dizem:
          </div>
          <div className="section5-second-left-text">
            "Eu sou membro do clube de assinatura da Sunday Blues há alguns
            meses agora e não posso estar mais satisfeita com a minha
            experiência.”
          </div>
        </div>
        <div className="section5-second-right">
          <div className="section5-second-right-first">
            <img src={review1} alt="" />
          </div>
          <div className="section5-second-right-second">
            <p>SOFIA b.</p>
            <p>MEMBRO DESDE 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
