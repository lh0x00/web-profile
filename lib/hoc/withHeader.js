import React, { Component } from 'react'
import Head from 'next/head'
import { PROFILE } from 'lib/enums'

type Props = {
  children: any,
}

class withHeader extends Component<Props, any> {
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
    const { children } = this.props
    const header = this.renderHeader()
    return [header, children]
  }
}

export default withHeader
