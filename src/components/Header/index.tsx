import React from 'react';
import Logo from '../../assets/images/logo.svg';
import { Container, Content } from './styles';
export const Header = () => {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>acompanhe os pedidos dos clientes </h2>
        </div>
        <img src={Logo} />
      </Content>
    </Container>
  );
};
