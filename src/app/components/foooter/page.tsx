
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #ffd700; /* Amarelo */
  color: #0056b3; /* Azul */
  text-align: center;
  padding: 10px;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Loja de Baterias. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
