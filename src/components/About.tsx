import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import photo from '../assets/izzi.png';

const theme = {
  colors: {
    primary: '#2197F3',
    secondary: '#6c757d',
    text: '#333',
    background: '#fafafa',
    cardBackground: '#fff',
    highlight: '#0056b3',
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    h2: '2.2rem',
    p: '1rem',
  },
};

const AboutSection = styled.section`
  padding: 80px 20px;
  background-color: ${props => props.theme.colors.background};
  text-align: center;
`;

const AboutTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 30px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 2px;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.theme.colors.highlight};
  }
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 15px;
  }
`;

const AboutImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 25px;
  border: 3px solid ${props => props.theme.colors.highlight};
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const AboutParagraph = styled.p`
  font-size: ${props => props.theme.typography.p};
  color: ${props => props.theme.colors.text};
  margin: 15px 0;
  line-height: 1.7;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: justify;
  }
`;

const SocialLinks = styled.div`
  margin-top: 20px;
  a {
    color: ${props => props.theme.colors.primary};
    margin: 0 10px;
    font-size: 3rem;
    transition: color 0.3s ease;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`;

const About = () => (
  <ThemeProvider theme={theme}>
    <AboutSection id="about">
      <AboutTitle>Sobre Mim</AboutTitle>
      <AboutContent>
        <AboutImage src={photo} alt="Foto de Ivanise" />
        <SocialLinks>
          <a href="https://www.instagram.com/ivgeomaps/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/izzibr/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </SocialLinks>
        <AboutParagraph>
          Olá! Eu sou Izzi, especialista em geoprocessamento com mais de 7 anos de experiência no setor. Minha paixão por mapas e análise espacial começou quando era jovem e se transformou em uma carreira dedicada a ajudar empresas a entenderem e utilizarem dados geoespaciais para tomadas de decisão estratégicas. Meu background em [formação acadêmica/áreas de especialização] me permite oferecer soluções inovadoras e personalizadas para seus desafios geográficos.
        </AboutParagraph>
        <AboutParagraph>
          Acredito que a tecnologia de geoprocessamento deve ser acessível e aplicável a diversas indústrias, desde a construção civil até a...
        </AboutParagraph>
      </AboutContent>
    </AboutSection>
  </ThemeProvider>
);

export default About;