import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { Button, Center, Container, Text } from "@mantine/core"
import Layout from "../components/navigation/Layout"
import { SEO } from "../components/SEO"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container style={{textAlign: "center"}}>
        <Text>
          To get in touch drop us an email at <a href="mailto:support@bithell.studio">support@bithell.studio</a>, or{" "}<Link to="https://bstudios.freshdesk.com/support/tickets/new">create a support ticket</Link>.
        </Text>
        
          
        </Container>
    </Layout>
  )
}

export default IndexPage


export const Head: HeadFC = () => (
  <SEO title="Contact" />
)