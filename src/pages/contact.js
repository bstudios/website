import React from "react";

import Layout from "../components/Layout";
import styled from "styled-components";

const Text = styled.p`
  text-align: center;
`;
const ContactPage = () => (
  <Layout title="Contact Us">
    <Text>
      To get in touch drop us an email at studios@jbithell.com, and we&apos;ll get back to you as
      soon as we can!
    </Text>
  </Layout>
);

export default ContactPage;
