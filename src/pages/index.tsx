import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Text } from "@mantine/core"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Text>Hi</Text>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>