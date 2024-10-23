import styled, { keyframes, ThemeProvider } from 'styled-components';
import { IoMdChatbubbles } from 'react-icons/io';
import logo from '../assets/logo.svg';

const theme = {
  primaryColor: '#2197F3',
  textColor: 'white',
  secondaryTextColor: 'rgba(255, 255, 255, 0.8)',
  borderColor: 'white',
  hoverColor: 'rgba(255, 255, 255, 0.2)',
};

const jumpAndSpinAnimation = keyframes`
  0% { transform: translateY(0) rotate(0deg) scale(1); }
  25% { transform: translateY(-20px) rotate(5deg) scale(1.02); }
  50% { transform: translateY(-30px) rotate(0deg) scale(1.05); }
  75% { transform: translateY(-20px) rotate(-5deg) scale(1.02); }
  100% { transform: translateY(0) rotate(0deg) scale(1); }
`;

const scrollDownAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
`;

const HeroSection = styled.section`
  background-color: ${props => props.theme.primaryColor};
  padding: 40px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const LogoImage = styled.img`
  width: 400px;
  height: auto;
  margin-bottom: 20px;
  animation: ${jumpAndSpinAnimation} 7s ease-in-out infinite;
  
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  margin: 20px 10px;
  color: ${props => props.theme.textColor};
  font-weight: 700;
  word-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  margin: 0 10px;
  margin-bottom: 30px;
  color: ${props => props.theme.secondaryTextColor};
  max-width: 700px;
  line-height: 1.5;
  word-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    max-width: 100%;
  }
`;

const HeroButton = styled.a`
  padding: 12px 28px;
  font-size: 0.9rem;
  background-color: transparent;
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.borderColor};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  text-decoration: none;
  
  &:hover {
    background-color: ${props => props.theme.hoverColor};
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const ChatIcon = styled(IoMdChatbubbles)`
  margin-right: 8px;
`;

const ScrollDownIcon = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: ${props => props.theme.textColor};
  animation: ${scrollDownAnimation} 1.5s infinite;
  cursor: pointer;
`;

const Hero = () => {
  const handleWhatsAppMessage = () => {
    const phoneNumber = '5581993964043';
    const message = encodeURIComponent('Olá, cheguei do seu site, tenho interesse em um serviço seu!');
    window.open(`https://wa.me/${phoneNumber}/?text=${message}`, '_blank');
  };

  return (
    <ThemeProvider theme={theme}>
      <HeroSection id="home">
        <LogoImage src={logo} alt="Logo da IVGEOMAPS" />
        <HeroTitle>TRANSFORMANDO DADOS EM DECISÕES INTELIGENTES</HeroTitle>
        <HeroSubtitle>Descubra como as ferramentas de geoprocessamento podem impulsionar seu projeto.</HeroSubtitle>
        <HeroButton onClick={handleWhatsAppMessage}>
          <ChatIcon /> FALE COMIGO
        </HeroButton>
        <ScrollDownIcon> &#x2193; </ScrollDownIcon>
      </HeroSection>
    </ThemeProvider>
  );
};

export default Hero;
