import { AppShell } from "@mantine/core"
import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell>
      <AppShell.Header><Header /></AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer><Footer /></AppShell.Footer>
    </AppShell>
  )
}