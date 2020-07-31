import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet";

import BtnWhatsApp from "../components/BtnWhatsApp";
import Logo from "../components/Logo";
import "./style.css";

import img from "../assets/img.png";
import selo from "../assets/selo.png";

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

const Index = () => {
  const { site } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const selos = [...Array(4).keys()];
  const projetos = [...Array(8).keys()];

  return (
    <div>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
      </Helmet>

      <Header>
        <Logo />
        <BtnWhatsApp />
      </Header>
      <Hero />

      <div className="flex flex-col items-center sm:flex-row justify-around">
        {selos.map(() => {
          return <img src={selo} alt="Selos" className="my-4"></img>;
        })}
      </div>

      <div>
        <h2 className="px-8 py-2 text-2xl font-bold">
          Projetos de móveis planejados
        </h2>
        <div className="flex flex-wrap justify-around">
          {projetos.map(() => {
            return (
              <div className="max-w-md ">
                <div className="m-2 rounded shadow-lg">
                  <img src={img} alt="Projeto"></img>
                  <div className="px-6 py-4">
                    <p className="font-bold text-xl mb-2">Projeto</p>
                    <p>Descrição</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
