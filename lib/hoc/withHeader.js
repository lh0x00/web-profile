import React, { Component } from 'react'
import { register, unregister } from 'lib/utils/serviceWorker'
import Head from 'next/head'
import { PROFILE } from 'lib/enums'

type Props = {
  children: any,
}

const withHeader = (WrappedComponent) => {
  class WrappedHeader extends Component<Props, any> {
    componentDidMount() {
      register()
    }

    componentWillUnmount() {
      unregister()
    }

    renderHeader = () => (
      <Head key="head">
        <title>{PROFILE.TITLE}</title>

        <meta name="robots" content="index,follow" />
        <meta name="author" content={PROFILE.AUTHOR} />
        <meta name="keywords" content={PROFILE.KEYWORDS} />
        <meta name="description" content={PROFILE.INTRODUCTION} />
        <meta name="url" content={PROFILE.URL} />

        <meta name="og:title" content={PROFILE.TITLE} />
        <meta name="og:type" content={PROFILE.TYPE} />
        <meta name="og:url" content={PROFILE.URL} />
        <meta name="og:image" content={PROFILE.IMAGE} />
        <meta name="og:site_name" content={PROFILE.SITE_NAME} />
        <meta name="og:description" content={PROFILE.INTRODUCTION} />

        <link href="https://lamhieu.info" rel="preconnect" />
        <link href="https://cdnjs.cloudflare.com" rel="preconnect" crossOrigin="true" />
        <link href="https://maxcdn.icons8.com" rel="preconnect" crossOrigin="true" />
        <link href="https://fonts.googleapis.com" rel="preconnect" crossOrigin="true" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="true" />

        <link rel="dns-prefetch" href="//lamhieu.info" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//maxcdn.icons8.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </Head>
    )

    render() {
      const { ...rest } = this.props
      const header = this.renderHeader()
      return <WrappedComponent header={header} {...rest} />
    }
  }

  return WrappedHeader
}

export default withHeader
