import React from 'react'
import { getSocialLink, getSocialIcon } from 'lib/utils'
import Icon from 'components/Icon'
import {
  SocialButton as SocialButtonStyled,
  ButtonText as ButtonTextStyled,
} from './styles'

const SocialButton = ({
  type,
  children,
  ...rest
}: {
  type: string,
  children: any,
}) => {
  const link = getSocialLink(type, children)
  const iconType = getSocialIcon(type)
  return (
    <SocialButtonStyled href={link} {...rest}>
      <Icon type={iconType} />
      <ButtonTextStyled>{children}</ButtonTextStyled>
    </SocialButtonStyled>
  )
}

export default SocialButton
