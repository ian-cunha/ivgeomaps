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

const ConsultingServicesSection = styled.section`
  padding: 60px 20px;
  background-color: ${props => props.theme.colors.background};
  text-align: center;
`;

const ConsultingServicesTitle = styled.h2`
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

const ConsultingServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ConsultingServiceCard = styled.div`
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
`;

const ConsultingServiceImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const ConsultingServiceContent = styled.div`
  padding: 20px;
`;

const ConsultingServiceTitle = styled.h3`
  font-size: ${props => props.theme.typography.h3};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
`;

const ConsultingServiceDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
`;

const ConsultingServices = () => (
  <ThemeProvider theme={theme}>
    <ConsultingServicesSection id="services">
      <ConsultingServicesTitle>Serviços de Consultoria</ConsultingServicesTitle>
      <ConsultingServiceGrid>
        <ConsultingServiceCard>
          <ConsultingServiceImage src="https://via.placeholder.com/300x180" alt="Consultoria" />
          <ConsultingServiceContent>
            <ConsultingServiceTitle>Consultoria</ConsultingServiceTitle>
            <ConsultingServiceDescription>
              Oferecemos consultoria especializada para otimizar seus projetos geoespaciais.
            </ConsultingServiceDescription>
          </ConsultingServiceContent>
        </ConsultingServiceCard>
        <ConsultingServiceCard>
          <ConsultingServiceImage src="https://via.placeholder.com/300x180" alt="Aulas Particulares" />
          <ConsultingServiceContent>
            <ConsultingServiceTitle>Aulas Particulares</ConsultingServiceTitle>
            <ConsultingServiceDescription>
              Aulas personalizadas em geoprocessamento e SIG.
            </ConsultingServiceDescription>
          </ConsultingServiceContent>
        </ConsultingServiceCard>
        <ConsultingServiceCard>
          <ConsultingServiceImage src="https://via.placeholder.com/300x180" alt="Mapeamento" />
          <ConsultingServiceContent>
            <ConsultingServiceTitle>Mapeamento</ConsultingServiceTitle>
            <ConsultingServiceDescription>
              Criação de mapas personalizados para visualização de dados.
            </ConsultingServiceDescription>
          </ConsultingServiceContent>
        </ConsultingServiceCard>
        <ConsultingServiceCard>
          <ConsultingServiceImage src="https://via.placeholder.com/300x180" alt="Banco de Dados" />
          <ConsultingServiceContent>
            <ConsultingServiceTitle>Banco de Dados para Projetos e Artigos Científicos</ConsultingServiceTitle>
            <ConsultingServiceDescription>
              Estruturação de bancos de dados para armazenamento e análise de dados geográficos.
            </ConsultingServiceDescription>
          </ConsultingServiceContent>
        </ConsultingServiceCard>
      </ConsultingServiceGrid>
    </ConsultingServicesSection>
  </ThemeProvider>
);

export default ConsultingServices;