import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import logo from '../assets/logo.svg';

interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  isOpen?: boolean;
}

const Nav = styled.nav<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2197F3;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.3s ease;
`;

const Logo = styled.img`
  width: 60px;
  height: auto;
  @media (max-width: 768px) {
    width: 50px;
  }
`;

const MenuToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 5px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Line = styled.span`
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
`;

const Menu = styled.ul<MenuProps>`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #2197F3;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    text-align: center;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: ${props => (props.isOpen ? '1' : '0')};
    transform: ${props => (props.isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  }
`;

const MenuItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    margin-left: 1.5rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 20px;
    &:hover,
    &:focus {
      background: rgba(255, 255, 255, 0.2);
      opacity: 1;
      transform: translateY(-2px);
    }
    @media (max-width: 768px) {
      margin: 0;
      padding: 10px 0;
      justify-content: center;
      padding-left: 30vw;
      padding-right: 30vw;
    }
  }
`;

const Icon = styled.span`
  margin-right: 0.5rem;
  font-size: 1.2em;
  opacity: 0.8;
`;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavVisible(true);
      } else {
        setNavVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Nav visible={navVisible}>
      <Logo src={logo} alt="IVGEOMAPS" />
      <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
        <Line style={menuOpen ? { transform: 'rotate(-45deg) translate(-5px, 5px)' } : {}} />
        <Line style={menuOpen ? { opacity: 0 } : {}} />
        <Line style={menuOpen ? { transform: 'rotate(45deg) translate(-3px, -3px)' } : {}} />
      </MenuToggle>
      <Menu isOpen={menuOpen}>
        <MenuItem onClick={closeMenu}>
          <a href="#home">
            <Icon className="icon-home"></Icon> Início
          </a>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <a href="#services">
            <Icon className="icon-services"></Icon> Consultoria
          </a>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <a href="#geo">
            <Icon className="icon-services"></Icon> Geoprocessamento
          </a>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <a href="#about">
            <Icon className="icon-about"></Icon> Sobre
          </a>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Header;
