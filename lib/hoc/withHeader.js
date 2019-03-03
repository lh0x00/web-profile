import React, { Component } from 'react'
import Head from 'next/head'
import { PROFILE } from 'lib/enums'

type Props = {
  children: any,
}

const withHeader = (WrappedComponent) => {
  class WrappedHeader extends Component<Props, any> {
    renderHeader = () => (
      <Head key="head">
        <title>{PROFILE.TITLE}</title>
        <meta name="og:title" content={PROFILE.TITLE} />
        <meta name="description" content={PROFILE.INTRODUCTION} />
        <meta name="og:description" content={PROFILE.INTRODUCTION} />
        <meta itemProp="image" content={PROFILE.IMAGE} />
        <meta name="og:image" content={PROFILE.IMAGE} />
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
