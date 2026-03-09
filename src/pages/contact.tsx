import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Anchor, Card, Container, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core"
import { IconMail, IconTicket, IconBrandGithub } from "@tabler/icons-react"
import Layout from "../components/navigation/Layout"
import { SEO } from "../components/SEO"

const contactMethods = [
  {
    icon: IconMail,
    title: "Email",
    description: "Drop us an email for general enquiries or support.",
    action: "support@bithell.studio",
    href: "mailto:support@bithell.studio",
  },
  {
    icon: IconTicket,
    title: "Support Ticket",
    description: "Create a support ticket for tracked issue resolution.",
    action: "Open a ticket",
    href: "https://bstudios.freshdesk.com/support/tickets/new",
  },
  {
    icon: IconBrandGithub,
    title: "GitHub",
    description: "Report bugs or contribute to our open source projects.",
    action: "github.com/bstudios",
    href: "https://github.com/bstudios",
  },
];

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container size="md" py="xl" style={{ textAlign: "center" }}>
        <Title mb="sm">Get in Touch</Title>
        <Text c="dimmed" mb="xl" maw={500} mx="auto">
          Whether you have a question about our products, need technical support, or want to discuss a project, we are here to help.
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          {contactMethods.map((method) => (
            <Card key={method.title} shadow="sm" radius="md" padding="lg" withBorder>
              <ThemeIcon variant="light" size={50} radius="md" mx="auto" mb="md">
                <method.icon size={26} stroke={1.5} />
              </ThemeIcon>
              <Text fw={500} mb="xs">{method.title}</Text>
              <Text fz="sm" c="dimmed" mb="md">{method.description}</Text>
              <Anchor href={method.href} target={method.href.startsWith("mailto") ? undefined : "_blank"} fz="sm">
                {method.action}
              </Anchor>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default ContactPage

export const Head: HeadFC = () => (
  <SEO title="Contact" />
)
