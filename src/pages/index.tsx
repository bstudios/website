import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Text } from "@mantine/core"
import Layout from "../components/navigation/Layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>Hi</Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
