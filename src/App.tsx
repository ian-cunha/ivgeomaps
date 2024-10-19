import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import ConsultingServices from './components/Consulting';
import Geo from './components/Geo';

const MainContent = styled.main`
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Hero />
        <ConsultingServices />
        <Geo />
        <About />
      </MainContent>
      <Footer />
    </>
  );
};

export default App;