import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/navigation/Layout"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>404</Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
