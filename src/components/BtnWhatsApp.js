import React from "react";

import wa from "../assets/btn-whatsapp.png";

const BtnWhatsApp = () => {
  return (
    <div className="bg-white shadow rounded px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row">
      <img src={wa} alt="Botão WhatsApp"></img>
      <div className="ml-2">
        <h3 className="font-bold text-2xl">Orçar seu projeto!</h3>
        <p className="text-xs">Projeto e orçamento sem compromisso.</p>
        <p className="font-bold">(35) 9999999999</p>
      </div>
    </div>
  );
};

export default BtnWhatsApp;
