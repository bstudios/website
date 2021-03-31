import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../images/StudiosLogo.svg";
import config from "../theme/config";
const { color, font, breakpoint, transition } = config;

const StyledNavbar = styled.div`
  padding: 0 1.5em;
  padding-top: 2em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${color.background};

  z-index: 2;

  @media (${breakpoint.lg}) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 2em 2.5em;
  }
`;

const StyledNav = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;

  @media (${breakpoint.lg}) {
    display: flex;
    flex-direction: row;
  }
`;

const StyledNavBrand = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  margin-right: auto;
  text-decoration: none;
  color: black;
  outline: none;
  transition: all ${transition.standard};
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${color.text};
  margin: 0.5em 0.3em;
  font-weight: ${font.weight.semibold};
  position: relative;
  outline: none;
  z-index: 1;

  &:last-child {
    margin-bottom: 0;
  }

  @media (${breakpoint.lg}) {
    padding: 0.5em 0.8em;

    &:last-child {
      margin-right: 0;
      margin-bottom: auto;
    }
  }
`;

const StyledNavHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  /* margin-bottom: 1em; */

  @media (${breakpoint.lg}) {
    margin: 0;
    margin-right: auto;
    width: auto;
  }
`;

const StyledMenuToggle = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${breakpoint.lg}) {
    display: none;
  }
`;

const StyledNavLogo = styled.img`
  height: 3rem;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNavbar id="navbar">
      <NavHeader toggle={toggle} isOpen={isOpen} />
      <Nav isOpen={isOpen} />
    </StyledNavbar>
  );
};

const Nav = ({ isOpen }) => {
  return (
    <StyledNav isOpen={isOpen}>
      <StyledNavLink to="/">Home</StyledNavLink>
      {/*<StyledNavLink to="/projects">Projects</StyledNavLink>*/}
      <StyledNavLink to="/contact">Contact Us</StyledNavLink>
    </StyledNav>
  );
};

const MenuToggle = ({ toggle, isOpen }) => (
  <StyledMenuToggle onClick={toggle}>
    {isOpen ? <FiX style={{ fontSize: 24 }} /> : <FiMenu style={{ fontSize: 24 }} />}
  </StyledMenuToggle>
);

const NavHeader = ({ toggle, isOpen }) => (
  <StyledNavHeader>
    <StyledNavBrand to="/">
      <StyledNavLogo src={Logo} />
    </StyledNavBrand>
    <MenuToggle toggle={toggle} isOpen={isOpen} />
  </StyledNavHeader>
);

export default Navbar;
