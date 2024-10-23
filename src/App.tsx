import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Geo from './components/Geo';
import Consulting from './components/Consulting';

const MainContent = styled.main`
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Hero />
        <Consulting />
        <Geo />
        <About />
      </MainContent>
      <Footer />
    </>
  );
};

export default App;