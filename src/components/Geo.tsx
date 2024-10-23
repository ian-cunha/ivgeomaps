import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const theme = {
  colors: {
    primary: '#2197F3',
    text: '#333',
    background: '#fafafa',
    cardBg: '#fff',
    cardHover: '#f5f5f5',
    shadow: 'rgba(0, 0, 0, 0.15)',
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    h2: '2.5rem',
    h3: '1.5rem',
    p: '1rem',
  },
};

const Section = styled.section`
  padding: 60px 20px;
  background-color: ${props => props.theme.colors.background};
  text-align: center;
`;

const Title = styled.h2`
  font-size: ${props => props.theme.typography.h2};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 40px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 2px;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.cardBg};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px ${props => props.theme.colors.shadow};

  &:hover {
    transform: translateY(-8px);
    background-color: ${props => props.theme.colors.cardHover};
    box-shadow: 0 8px 20px ${props => props.theme.colors.shadow};
  }
`;

const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: ${props => props.theme.typography.h3};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
`;

const Geo = () => (
  <ThemeProvider theme={theme}>
    <Section id="geo">
      <Title>Serviços de Geoprocessamento</Title>
      <Grid>
        {servicesData.map(({ imgSrc, title, desc }, index) => (
          <Card key={index}>
            <Img src={imgSrc} alt={title} />
            <Content>
              <CardTitle>{title}</CardTitle>
              <Desc>{desc}</Desc>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  </ThemeProvider>
);

const servicesData = [
  {
    imgSrc: 'https://via.placeholder.com/300x180',
    title: 'Análise Espacial',
    desc: 'Utilizamos técnicas avançadas para geração de produtos cartográficos que garantem precisão na interpretação de dados geoespaciais.',
  },
  {
    imgSrc: 'https://via.placeholder.com/300x180',
    title: 'Sistemas de Informação Geográfica (SIG)',
    desc: 'Criação, gerenciamento e atualização de informações georreferenciadas.',
  },
  {
    imgSrc: 'https://via.placeholder.com/300x180',
    title: 'Modelagem e Simulação',
    desc: 'Desenvolvimento de modelos digitais de elevação e de superfície para análise de terrenos.',
  },
];

export default Geo;
