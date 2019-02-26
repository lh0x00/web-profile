import React from 'react'
import Icon from 'components/Icon'
import {
  Button as ButtonStyled,
  ButtonText as ButtonTextStyled,
} from './styles'

const Button = ({
  icon,
  children,
  ...rest
}: {
  icon?: string,
  children: any,
}) => {
  const iconElement = icon && (<Icon type={icon} />)

  return (
    <ButtonStyled {...rest}>
      {iconElement}
      <ButtonTextStyled>{children}</ButtonTextStyled>
    </ButtonStyled>
  )
}

export default Button
