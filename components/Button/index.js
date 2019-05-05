import React, { Fragment } from 'react'
import Link from 'next/link'
import Icon from 'components/Icon'
import {
  Button as ButtonStyled,
  ButtonText as ButtonTextStyled,
} from './styles'

const Button = ({
  href,
  as,
  icon,
  children,
  inSite,
  ...rest
}: {
  href: string,
  as?: string,
  icon?: string,
  inSite?: boolean,
  children: any,
}) => {
  const otherProps = inSite ? rest : { ...rest, href }
  const wrapProps = !inSite ? {} : { as, href }
  const Component = inSite ? Link : Fragment
  const iconElement = icon && (<Icon type={icon} />)

  return (
    <Component {...wrapProps}>
      <ButtonStyled iconOnly={!children} {...otherProps}>
        {iconElement}
        {children && (<ButtonTextStyled>{children}</ButtonTextStyled>)}
      </ButtonStyled>
    </Component>
  )
}

export default Button
