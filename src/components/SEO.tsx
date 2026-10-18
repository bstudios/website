import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }: { title?: string, description?: string, pathname?: string, children?: React.ReactNode }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: (title ? title + " | " : "") + defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}/images/og.png`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      {pathname && <link rel="canonical" href={seo.url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Bithell Studios logo" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="theme-color" content="#f66d90" />
      <meta name="color-scheme" content="light" />
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" type="image/svg+xml" href="/images/logo/logo.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.webmanifest" />
      {children}
    </>
  )
}
