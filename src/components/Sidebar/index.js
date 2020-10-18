import React from 'react';

import { Container, SidebarLink } from './styles';

function Sidebar() {
  return (
    <Container>
      <SidebarLink to="/">Veículos</SidebarLink>
      <SidebarLink to="/criar">Adicionar</SidebarLink>
      <SidebarLink to="/atualizar">Atualizar</SidebarLink>
      <SidebarLink to="/deletar">Deletar</SidebarLink>
    </Container>
  );
}

export default Sidebar;