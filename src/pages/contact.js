import React from "react";

import Layout from "../components/Layout";
import styled from "styled-components";
import Button from "../components/Button";

const Text = styled.p`
  text-align: center;
`; 
// TODO come and tidy up the center tag!
const ContactPage = () => (
  <Layout title="Contact Us">
    <Text>
      To get in touch drop us an email at studios@jbithell.com, and we&apos;ll get back to you as
      soon as we can!
    </Text>
    <center>
      <Button to="https://bstudios.freshdesk.com/support/tickets/new" primary={true}>
        Create Support Ticket
      </Button><br/>
      <Button to="https://status.bithell.studio/">
        Service Status Page
      </Button>
    </center>
  </Layout>
);

export default ContactPage;
