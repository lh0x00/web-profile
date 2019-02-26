import React, { PureComponent } from 'react'
import Head from 'next/head'
import { PROFILE } from 'lib/enums'
import SocialButton from 'components/SocialButton'
import Button from 'components/Button'

import {
  Background as BackgroundStyled,
  Info as InfoStyled,
  Name as NameStyled,
  Slogan as SloganStyled,
  Description as DescriptionStyled,
  SocialNetwork as SocialNetworkStyled,
  Action as ActionStyled,
} from './styles'

class Home extends PureComponent<any, any> {
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
    const Header = this.renderHeader()

    const SocialNetwork = Object.entries(PROFILE.SOCIAL_NETWORKS).map(([type, username]) => (
      <SocialButton key={type} type={type}>{username}</SocialButton>
    ))

    const Actions = Object.values(PROFILE.ACTIONS).map(({ icon, title, href, text }) => (
      <Button
        key={href}
        icon={icon}
        title={title}
        href={href}
      >
        {text}
      </Button>
    ))

    return [
      Header,
      <BackgroundStyled key="content">
        <InfoStyled>
          <NameStyled>{PROFILE.NAME}</NameStyled>
          <SloganStyled>{PROFILE.SLOGAN}</SloganStyled>
          <DescriptionStyled>{PROFILE.DESCRIPTION}</DescriptionStyled>
          <SocialNetworkStyled>
            {SocialNetwork}
          </SocialNetworkStyled>
          <ActionStyled>
            {Actions}
          </ActionStyled>
        </InfoStyled>
      </BackgroundStyled>,
    ]
  }
}

export default Home
