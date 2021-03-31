import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import IndexBackgroundImage from "../images/skyline.jpg";

const StyledHeader = styled.div`
  position: absolute;
  width: 100%;
  height: ${({ offset }) => `calc(100% - ${offset}px)`};
  left: 0;
  /* top: 0; */
  margin: -1em 0;
  overflow: hidden;
  z-index: 0;
  background-image: url(${IndexBackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const IndexHeader = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    setNavbarHeight(document.getElementById("navbar").offsetHeight);
  }, []);

  return (
    <StyledHeader offset={navbarHeight} ref={myRef}>
      {children}
    </StyledHeader>
  );
};

export default IndexHeader;
