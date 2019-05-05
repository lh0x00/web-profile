import React from 'react'
import { PROFILE } from 'lib/enums'
import SocialButton from 'components/SocialButton'
import Button from 'components/Button'

import withHeader from 'lib/hoc/withHeader'

import {
  Background as BackgroundStyled,
  Info as InfoStyled,
  Name as NameStyled,
  Slogan as SloganStyled,
  Description as DescriptionStyled,
  SocialNetwork as SocialNetworkStyled,
  Action as ActionStyled,
} from './styles'

const Home = ({ header }: { header: any }) => {
  const socialNetwork = Object.entries(PROFILE.SOCIAL_NETWORKS).map(([type, username]) => (
    <SocialButton key={type} type={type}>{username}</SocialButton>
  ))

  const actions = Object.values(PROFILE.ACTIONS).map(({ href, text, ...rest }) => (
    <Button
      key={href}
      href={href}
      {...rest}
    >
      {text}
    </Button>
  ))

  return (
    <BackgroundStyled>
      {header}
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

export default withHeader(Home)
