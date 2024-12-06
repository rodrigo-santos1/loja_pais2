"use client"

import React from "react";
import styled from "styled-components";

const MenuContainer = styled.nav`
  background-color: #0056b3; /* Azul */
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const MenuItem = styled.a`
  color: #ffd700; /* Amarelo */
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  margin: 0 15px;

  &:hover {
    background-color: #003f87; /* Azul escuro */
    border-radius: 5px;
  }
`;

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem href="#home">Home</MenuItem>
      <MenuItem href="#produtos">Produtos</MenuItem>
      <MenuItem href="#contato">Contato</MenuItem>
    </MenuContainer>
  );
};

export default Menu;
