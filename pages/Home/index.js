import React from 'react'
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

const Home = () => {
  const socialNetwork = Object.entries(PROFILE.SOCIAL_NETWORKS).map(([type, username]) => (
    <SocialButton key={type} type={type}>{username}</SocialButton>
  ))

  const actions = Object.values(PROFILE.ACTIONS).map(({
    icon, title, href, text, inSite,
  }) => (
    <Button
      key={href}
      icon={icon}
      title={title}
      href={href}
      inSite={inSite}
    >
      {text}
    </Button>
  ))

  return (
    <BackgroundStyled key="content">
      <InfoStyled>
        <NameStyled>{PROFILE.NAME}</NameStyled>
        <SloganStyled>{PROFILE.SLOGAN}</SloganStyled>
        <DescriptionStyled>{PROFILE.DESCRIPTION}</DescriptionStyled>
        <SocialNetworkStyled>
          {socialNetwork}
        </SocialNetworkStyled>
        <ActionStyled>
          {actions}
        </ActionStyled>
      </InfoStyled>
    </BackgroundStyled>
  )
}

export default Home
