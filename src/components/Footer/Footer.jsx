import React from "react";
import "./Footer.css";
import { facebook, instagram, youtube, twitter, footer } from "../../assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-left-first">
          <p>NEWSLETTER</p>
        </div>
        <div className="footer-left-second">
          <p>*Se inscreva e receba 10% de desconto na sua primeira compra.</p>
        </div>
        <div className="footer-left-third">
          <div className="footer-left-third-left">
            <input type="email" placeholder="seumelhoremail@email.com" />
          </div>
          <div className="footer-left-third-right">
            <button>SUBMIT</button>
          </div>
        </div>
        <div className="footer-left-fourth">
          <div className="footer-left-fourth-first">
            <p>dúvidas frequentes</p>
          </div>
          <div className="footer-left-fourth-second">
            <p>atendimento</p>
          </div>
          <div className="footer-left-fourth-third">
            <p>loja</p>
          </div>
        </div>
        <div className="footer-left-fifth">
          <p>nos siga nas redes</p>
        </div>
        <div className="footer-left-sixth">
          <div className="footer-left-sixth-facebook">
            <img src={facebook} alt="facebook" />
          </div>
          <div className="footer-left-sixth-instagram">
            <img src={instagram} alt="facebook" />
          </div>
          <div className="footer-left-sixth-youtube">
            <img src={youtube} alt="facebook" />
          </div>
          <div className="footer-left-sixth-twitter">
            <img src={twitter} alt="facebook" />
          </div>
        </div>
      </div>
      <div className="footer-right">
        <img src={footer} alt="footer" />
      </div>
    </div>
  );
};

export default Footer;
