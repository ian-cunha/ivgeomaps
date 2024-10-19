import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const theme = {
  colors: {
    primary: '#2197F3',
    text: '#333',
    background: '#fafafa',
    cardBackground: '#fff',
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

const GeoSection = styled.section`
  padding: 60px 20px;
  background-color: ${props => props.theme.colors.background};
  text-align: center;
`;

const GeoTitle = styled.h2`
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

const GeoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GeoCard = styled.div`
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.cardBackground};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px ${props => props.theme.colors.shadow};
  &:hover {
    transform: translateY(-8px);
    background-color: ${props => props.theme.colors.cardHover};
    box-shadow: 0 8px 20px ${props => props.theme.colors.shadow};
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const GeoImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const GeoContent = styled.div`
  padding: 20px;
`;

const GeoServiceTitle = styled.h3`
  font-size: ${props => props.theme.typography.h3};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
`;

const GeoDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
`;

const Geo = () => (
  <ThemeProvider theme={theme}>
    <GeoSection id="geo">
      <GeoTitle>Serviços de Geoprocessamento</GeoTitle>
      <GeoGrid>
        <GeoCard>
          <GeoImage src="https://via.placeholder.com/300x180" alt="Análise Espacial" />
          <GeoContent>
            <GeoServiceTitle>Análise Espacial</GeoServiceTitle>
            <GeoDescription>Utilizamos técnicas avançadas para interpretar dados geoespaciais.</GeoDescription>
          </GeoContent>
        </GeoCard>
        <GeoCard>
          <GeoImage src="https://via.placeholder.com/300x180" alt="Sistemas de Informação Geográfica" />
          <GeoContent>
            <GeoServiceTitle>Sistemas de Informação Geográfica (SIG)</GeoServiceTitle>
            <GeoDescription>Criação e gerenciamento de bases de dados geográficas.</GeoDescription>
          </GeoContent>
        </GeoCard>
        <GeoCard>
          <GeoImage src="https://via.placeholder.com/300x180" alt="Modelagem e Simulação" />
          <GeoContent>
            <GeoServiceTitle>Modelagem e Simulação</GeoServiceTitle>
            <GeoDescription>Desenvolvimento de modelos para prever e simular fenômenos geográficos.</GeoDescription>
          </GeoContent>
        </GeoCard>
      </GeoGrid>
    </GeoSection>
  </ThemeProvider>
);

export default Geo;
