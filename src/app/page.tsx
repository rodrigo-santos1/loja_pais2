"use client"

import React from "react";
import Header from "./components/header/page";
import Footer from "./components/foooter/page";
import Menu from "./components/menu/page";
import styled from "styled-components";

const MainContent = styled.main`
  padding: 20px;
  background-color: #f7f7f7; /* Fundo claro */
  min-height: 80vh; /* Para garantir que o conteúdo ocupe uma boa parte da tela */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  background-color: #0056b3; /* Azul */
  color: #ffd700; /* Amarelo */
  padding: 30px;
  width: 80%;
  text-align: center;
  border-radius: 10px;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <MainContent>
        <Banner>
          <h2>Bem-vindo à nossa loja de baterias de carro!</h2>
          <p>
            Encontre as melhores baterias para seu veículo com segurança e
            preços especiais.
          </p>
        </Banner>
        <div>
          <h3>Ofertas Especiais</h3>
        </div>
      </MainContent>
      <Footer />
    </>
  );
};

export default Home;
