import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const FooterWrapper = styled.footer`
  background-color: #2197F3;
  color: white;
  padding: 20px 10px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 15px 5px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  height: 35px;
  width: auto;
  margin-bottom: 10px;
  
  @media (max-width: 480px) {
    height: 30px;
  }
`;

const Icons = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
`;

const Icon = styled.a`
  color: white;
  margin: 0 15px;
  font-size: 1.5em;
  transition: transform 0.3s ease;

  &:hover {
    color: #007bff;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    margin: 0 10px;
    font-size: 1.3em;
  }
`;

const Text = styled.p`
  margin: 5px 0;
  font-size: 0.85em;
  opacity: 0.8;

  @media (max-width: 480px) {
    font-size: 0.75em;
  }
`;

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Content>
        <Icons>
          <Icon href="https://www.linkedin.com/in/seu-linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" />
          </Icon>
          <Icon href="https://github.com/seu-github" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </Icon>
        </Icons>
        <Logo src={logo} alt="IVGEOMAPS" />
        <Text>&copy; {year} IVGEOMAPS. Todos os direitos reservados.</Text>
        <Text>Contato: ivanise.oly@gmail.com | Telefone: (81) 99396-4043</Text>
      </Content>
    </FooterWrapper>
  );
};

export default Footer;
