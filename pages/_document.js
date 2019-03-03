import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Favicon from 'components/Favicon'
import { SOURCES } from 'lib/enums'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        profile: {},
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const styles = SOURCES.STYLES.map(url => (
      <link
        key={url}
        rel="stylesheet"
        type="text/css"
        href={url}
      />
    ))

    return (
      <html lang="en" id="app">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Favicon />
          {styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
