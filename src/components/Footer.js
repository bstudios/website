import React from "react";
import styled from "styled-components";
//import { FaTwitter, FaInstagram, FaSlack, FaFacebookF } from "react-icons/fa";

import TextLink from "../components/TextLink";

import config from "../theme/config";
const { color, breakpoint } = config;

const StyledFooter = styled.div`
  margin-top: 1em;
  padding: 2em 1em;

  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${color.text};
  color: ${color.background};

  z-index: 1;

  @media (${breakpoint.md}) {
    background-color: ${color.background};
    color: ${color.text};

    padding: 1em;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const FooterRightHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;

  @media (${breakpoint.md}) {
    justify-content: flex-end;
    width: fit-content;

    & > a {
      margin-left: 1.5em;
    }
  }
`;

const CopyrightInfo = styled.p`
  margin-bottom: 1em;

  text-align: center;

  @media (${breakpoint.md}) {
    margin: 0;
  }
`;

const Footer = () => (
  <StyledFooter>
    <CopyrightInfo>© {new Date().getFullYear()} Bithell Studios Ltd.</CopyrightInfo>
    <FooterRightHolder>
      <TextLink to="https://find-and-update.company-information.service.gov.uk/company/11918238">
        Registered in England and Wales №11918238
      </TextLink>
    </FooterRightHolder>
  </StyledFooter>
);

export default Footer;
