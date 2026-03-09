import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Center, Container, Image, Text, SimpleGrid, Card, ThemeIcon, Title, Group, Button, Anchor } from "@mantine/core"
import { IconDeviceLaptop, IconCloud, IconTools, IconBuildingStore } from "@tabler/icons-react"
import { Link } from "gatsby"
import Logo from "./../images/StudiosLogo.svg";
import Layout from "../components/navigation/Layout"
import * as classes from './index.module.css';
import { SEO } from "../components/SEO";

const services = [
  {
    icon: IconDeviceLaptop,
    title: "Websites & Apps",
    description: "Responsive web applications and mobile apps, built with modern frameworks and best practices.",
  },
  {
    icon: IconCloud,
    title: "SaaS Solutions",
    description: "Cloud-hosted software products including AdamRMS, an advanced rental management system used by organisations worldwide.",
  },
  {
    icon: IconTools,
    title: "Open Source",
    description: "We believe in open source software. Our flagship product AdamRMS is licensed under AGPL-3.0 and free to self-host.",
  },
  {
    icon: IconBuildingStore,
    title: "For Theatre, AV & Broadcast",
    description: "Specialist tools for the live events industry, helping teams manage equipment, crews, and projects.",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container className={classes.root}>
        <Center>
          <Image src={Logo} w="auto" h={{ base: 200, md: 400, xl: 500 }} />
        </Center>
        <Text c="dimmed" size="lg" ta="center" className={classes.description}>
          Bithell Studios is a creative development studio based in the UK run by James Bithell. We develop Websites, Apps, SaaS Solutions and Peripherals.
        </Text>
      </Container>

      <Container size="lg" className={classes.services}>
        <Title order={2} ta="center" mb="md">What We Do</Title>
        <Text c="dimmed" ta="center" mb="xl" maw={600} mx="auto">
          We build software that helps organisations work more efficiently, with a focus on the live events and entertainment industry.
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          {services.map((service) => (
            <Card key={service.title} shadow="md" radius="md" padding="xl" className={classes.card}>
              <ThemeIcon variant="light" size={60} radius="md">
                <service.icon size={32} stroke={1.5} />
              </ThemeIcon>
              <Text fz="lg" fw={500} mt="md">
                {service.title}
              </Text>
              <Text fz="sm" c="dimmed" mt="sm">
                {service.description}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      <Container size="md" className={classes.cta}>
        <Card shadow="sm" radius="md" padding="xl" withBorder>
          <Title order={3} ta="center" mb="sm">AdamRMS</Title>
          <Text ta="center" c="dimmed" mb="md">
            Our flagship product is an open source advanced Rental Management System for Theatre, AV &amp; Broadcast.
            Track assets, manage crews, handle invoicing and run public-facing equipment catalogues — all in one platform.
          </Text>
          <Group justify="center" gap="md">
            <Link to="/projects"><Button variant="filled">Learn More</Button></Link>
            <Anchor href="https://adam-rms.com" target="_blank" underline="never"><Button variant="light">Visit adam-rms.com</Button></Anchor>
          </Group>
        </Card>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <SEO />
)
