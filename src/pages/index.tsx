import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Center, Container, Image, Text } from "@mantine/core"
import Logo from "./../images/StudiosLogo.svg";
import Layout from "../components/navigation/Layout"
import * as classes from './index.module.css';
import { SEO } from "../components/SEO";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
       <Container className={classes.root}>
        <Center>
          <Image src={Logo} w="auto" h={{ base: 200, md: 400, xl: 500 }} />
        </Center>
        <Text c="dimmed" size="lg" ta="center" className={classes.description}>
          Bithell Studios is a creative development studio based in the UK run by James Bithell. We develop Websites, Apps, SAAS Solutions and Peripherals.
        </Text>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <SEO />
)