import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Container, Title, Text, SimpleGrid, Card, ThemeIcon, List, Group, Button, Anchor, Divider } from "@mantine/core"
import { IconBox, IconUsers, IconFileInvoice, IconShieldCheck, IconWorld, IconBrandGithub, IconCalendar, IconCategory, IconTool } from "@tabler/icons-react"
import Layout from "../components/navigation/Layout"
import { SEO } from "../components/SEO"
import * as classes from './projects.module.css';

const adamRmsFeatures = [
  {
    icon: IconBox,
    title: "Asset Management",
    description: "Track thousands of assets across multiple sites. Manage barcodes, purchase receipts, maintenance history and prevent clashing hires.",
  },
  {
    icon: IconUsers,
    title: "Crew Management",
    description: "Internal recruitment platform with self-assignment, questionnaires and CV uploads. Manage crew across all your events.",
  },
  {
    icon: IconFileInvoice,
    title: "Invoicing & Finance",
    description: "Handle invoicing and financial tracking for events. Keep on top of budgets and billing from one place.",
  },
  {
    icon: IconShieldCheck,
    title: "Security & Permissions",
    description: "Granular access controls so freelancers and staff only see what they need. Full security suite built in.",
  },
  {
    icon: IconWorld,
    title: "Public-Facing Websites",
    description: "Configurable public pages to showcase your equipment stock, optionally displaying availability and pricing to reduce enquiries.",
  },
  {
    icon: IconCalendar,
    title: "Scheduling",
    description: "Keep track of a busy organisational schedule and monitor key stats across all your projects and events.",
  },
  {
    icon: IconTool,
    title: "Maintenance & Compliance",
    description: "Raise, manage and track maintenance jobs. Handle compliance requirements such as PAT and LOLER testing.",
  },
  {
    icon: IconCategory,
    title: "Asset Categories",
    description: "Create and filter custom categories and groups of assets, with smart email notifications for groups you want to monitor.",
  },
];

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container size="lg" className={classes.root}>
        <Title ta="center" mb="sm">Our Projects</Title>
        <Text c="dimmed" ta="center" mb="xl" maw={600} mx="auto">
          Software built by Bithell Studios.
        </Text>

        <Divider my="xl" />

        <Group justify="space-between" align="flex-start" mb="xl" wrap="wrap">
          <div>
            <Title order={2} mb="xs">AdamRMS</Title>
            <Text c="dimmed" maw={600}>
              An advanced Rental Management System for Theatre, AV &amp; Broadcast. AdamRMS is an all-in-one
              cloud-hosted solution for bringing together equipment, teams, and management.
            </Text>
          </div>
          <Group gap="sm" mt={{ base: "md", sm: 0 }}>
            <Anchor href="https://adam-rms.com" target="_blank" underline="never">
              <Button variant="filled">Visit adam-rms.com</Button>
            </Anchor>
            <Anchor href="https://github.com/adam-rms" target="_blank" underline="never">
              <Button variant="light" leftSection={<IconBrandGithub size={18} />}>GitHub</Button>
            </Anchor>
          </Group>
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" mb="xl">
          {adamRmsFeatures.map((feature) => (
            <Card key={feature.title} shadow="sm" radius="md" padding="lg" withBorder className={classes.card}>
              <ThemeIcon variant="light" size={44} radius="md" mb="sm">
                <feature.icon size={24} stroke={1.5} />
              </ThemeIcon>
              <Text fw={500} mb="xs">{feature.title}</Text>
              <Text fz="sm" c="dimmed">{feature.description}</Text>
            </Card>
          ))}
        </SimpleGrid>

        <Card shadow="sm" radius="md" padding="xl" withBorder>
          <Title order={3} mb="md">Pricing</Title>
          <List spacing="sm">
            <List.Item>
              <Text component="span" fw={500}>Hosted Solution</Text> — Paid hosted plans with full support. Priced per business, not per user.
            </List.Item>
            <List.Item>
              <Text component="span" fw={500}>Self-Hosted</Text> — Also available to self-host using the pre-built Docker container.
            </List.Item>
            <List.Item>
              <Text component="span" fw={500}>Education Discounts</Text> — Discounted pricing available for educational institutions.
            </List.Item>
          </List>
        </Card>

        <Divider my="xl" />

        <Title order={2} ta="center" mb="sm">Telemetry & Analytics</Title>
        <Text c="dimmed" ta="center" maw={600} mx="auto" mb="md">
          We operate a transparent telemetry platform for monitoring the health and usage of our products.
        </Text>
        <Group justify="center">
          <Anchor href="https://telemetry.bithell.studio" target="_blank" underline="never">
            <Button variant="light">View Telemetry Dashboard</Button>
          </Anchor>
        </Group>
      </Container>
    </Layout>
  )
}

export default ProjectsPage

export const Head: HeadFC = () => (
  <SEO title="Projects" description="Software projects built by Bithell Studios, including AdamRMS — a rental management system for Theatre, AV and Broadcast." />
)
