import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import photo from '../assets/izzi.png';

const theme = {
  colors: {
    primary: '#2197F3',
    secondary: '#6c757d',
    text: '#333',
    bg: '#fafafa',
    cardBg: '#fff',
    highlight: '#0056b3',
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    h2: '2.2rem',
    p: '1rem',
  },
};

const Section = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.bg};
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
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
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`;

const Content = styled.div`
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

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 25px;
  border: 3px solid ${({ theme }) => theme.colors.highlight};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Para = styled.p`
  font-size: ${({ theme }) => theme.typography.p};
  color: ${({ theme }) => theme.colors.text};
  margin: 15px 0;
  line-height: 1.7;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Links = styled.div`
  margin-top: 20px;
  a {
    color: ${({ theme }) => theme.colors.primary};
    margin: 0 10px;
    font-size: 3rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

const About = () => (
  <ThemeProvider theme={theme}>
    <Section id="about">
      <Title>Sobre Mim</Title>
      <Content>
        <Img src={photo} alt="Foto de Ivanise" />
        <Links>
          <a href="https://www.instagram.com/ivgeomaps/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/izzibr/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </Links>
        <Para>
          Olá! Eu sou Izzi, especialista em geoprocessamento com mais de 7 anos de experiência no setor. Minha
          paixão por mapas e análise espacial começou quando era jovem e se transformou em uma carreira dedicada a
          ajudar empresas a entenderem e utilizarem dados geoespaciais para tomadas de decisão estratégicas.
          Meu background em [formação acadêmica/áreas de especialização] me permite oferecer soluções inovadoras
          e personalizadas para seus desafios geográficos.
        </Para>
        <Para>
          Acredito que a tecnologia de geoprocessamento deve ser acessível e aplicável a diversas indústrias,
          desde a construção civil até a...
        </Para>
      </Content>
    </Section>
  </ThemeProvider>
);

export default About;
