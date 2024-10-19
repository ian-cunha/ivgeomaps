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

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 35px; /* Ajuste o tamanho conforme necessário */
  width: auto;
  margin-bottom: 10px; /* Espaço abaixo da logo */

  @media (max-width: 480px) {
    height: 30px;
  }
`;

const SocialIcons = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
`;

const SocialIcon = styled.a`
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

const FooterText = styled.p`
  margin: 5px 0;
  font-size: 0.85em;
  opacity: 0.8;

  @media (max-width: 480px) {
    font-size: 0.75em;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <SocialIcons>
          <SocialIcon href="https://www.linkedin.com/in/seu-linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </SocialIcon>
          <SocialIcon href="https://github.com/seu-github" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </SocialIcon>
        </SocialIcons>
        <LogoImage src={logo} alt="IVGEOMAPS" />
        <FooterText>&copy; {new Date().getFullYear()} IVGEOMAPS. Todos os direitos reservados.</FooterText>
        <FooterText>Contato: ivanise.oly@gmail.com | Telefone: (81) 99396-4043</FooterText>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
