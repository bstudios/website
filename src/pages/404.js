import React from "react";

import Layout from "../components/Layout";
import styled from "styled-components";

const Text = styled.p`
  text-align: center;
`;
const NotFoundPage = () => (
  <Layout title="404 Page Not Found">
    <Text>Sorry - the page you requested couldn&apos;t be found</Text>
  </Layout>
);

export default NotFoundPage;
