import React from "react";
import styled from "styled-components";

import IndexHeader from "../components/IndexHeader";
import Layout from "../components/Layout";
//import Button from "../components/Button";

import config from "../theme/config";
const { color, breakpoint } = config;

const HeroTitle = styled.h1`
  color: ${color.text};
  font-size: 3em;
`;
/*

const blinkingAnimation = css`
  animation: blink-animation 1.5s steps(2, start) infinite;

  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
`;

const HeroTag = styled.h2`
  color: ${color.text};
  font-weight: ${font.weight.normal};

  ::after {
    content: "_";
    font-weight: ${font.weight.bold};
    color: ${color.accent};
    ${blinkingAnimation}
  }
`;

const HeroButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

  @media (${breakpoint.md}) {
    flex-direction: row;
    width: auto;

    > * {
      margin: 1em;
    }
  }
`;
*/
const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);

  text-align: center;

  width: 100%;

  padding: 1em 1.5em;

  @media (${breakpoint.md}) {
    padding: 0;
  }
`;

const Description = styled.p`
  color: ${color.text};
  max-width: 500px;
  text-align: center;
`;

const IndexPage = () => {
  return (
    <Layout
      title="Home"
      description="Bithell Studios is a creative development studio based in the UK run by James Bithell.">
      <IndexHeader>
        <Hero>
          <HeroTitle>Bithell Studios Ltd</HeroTitle>
          <Description>
            Bithell Studios is a creative development studio based in the UK run by James Bithell.
            We develop Websites, Apps, SAAS Solutions and Peripherals.
          </Description>
          {/*<HeroButtons>
            <Button to="/about" primary>
              About Us
            </Button>
            <Button to="/contact">Contact</Button>
          </HeroButtons>*/}
        </Hero>
      </IndexHeader>
    </Layout>
  );
};

export default IndexPage;
