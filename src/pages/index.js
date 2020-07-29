import React from "react";

import BtnWhatsApp from "../components/BtnWhatsApp";
import Logo from "../components/Logo";
import "./style.css";

import img from "../assets/img.png";
import selo from "../assets/selo.png"

const Header = ({ children }) => {
  return (
    <div className="p-4 bg-indigo-800 sm:flex justify-between items-center">
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="p-4 bg-gray-200 sm:flex justify-between items-center">
      <div>
        <h5>Lima Móveis</h5>
        <p>Rua dos abacates, no mundo da lua</p>
      </div>
      <BtnWhatsApp />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
      <div className="p-8">
        <h2 className="font-bold text-2xl">Móveis Planejados</h2>
        <p className="text-xl">
          Comerciais e residenciais para todos os ambientes
        </p>
        <p className="text-gray-700">Atendemos Pouso Alegre e toda região</p>
      </div>
      <div>
        <img src={img} alt="Móveis Planejados"></img>
      </div>
    </div>
  );
};

const index = () => {
  const selos = [...Array(4).keys()]

  return (
    <div>
      <Header>
        <Logo />
        <BtnWhatsApp />
      </Header>
      <Hero />

      <div className="flex flex-col items-center sm:flex-row justify-around">
      {
        selos.map(() => {
          return <img src={selo} alt="Selos" className="my-4"></img>
        })
      }
      </div>
      <Footer />
    </div>
  );
};

export default index;
