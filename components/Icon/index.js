import React from 'react'
import { classnames as cn } from 'lib/utils'
import { Icon as IconStyled } from './styles'

const Icon = ({
  className,
  type,
  ...rest
}: {
  className?: string,
  type: string,
}) => (
  <IconStyled className={cn('fa', `fa-${type}`, className)} {...rest} />
)

export default Icon
