import styled from 'styled-components'
import { contentFont } from 'styles/fonts'

export const SocialButton = styled.a`
  opacity: 0.7;
  display: inline-block;
  vertical-align: top;
  color: #fff;
  text-decoration: none;
  transition: all .3s ease;
  &:hover {
    opacity: 1;
  }
  > i {
    margin-right: .1em;
    font-size: 1.75em;
  }
`

export const ButtonText = styled.span`
  display: inline-block;
  vertical-align: super;
  border-bottom: 1px dotted #fff;
  font-size: 1em;
  font-family: ${contentFont};
  font-weight: 300;
`
