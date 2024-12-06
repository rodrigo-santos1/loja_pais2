
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #0056b3; /* Azul */
  color: #ffd700; /* Amarelo */
  padding: 20px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Loja de Baterias de Carro</h1>
      <p>Encontre a bateria perfeita para o seu carro!</p>
    </HeaderContainer>
  );
};

export default Header;
