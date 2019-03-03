import styled, { css } from 'styled-components'
import { contentFont } from 'styles/fonts'

export const Button = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .85em 2em .85em 1.8em;
  ${({ iconOnly }) => iconOnly && css`
    padding: 0;
    width: 4em;
    height: 4em;
  `}
  display: flex;
  border-radius: 90px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 2em;
  text-transform: uppercase;
  text-decoration: none;
  font-size: .85em;
  color: #fff;
  font-weight: 400;
  transition: all .3s ease;
  &:hover {
    background: #fff;
    color: #333;
  }
  > i {
    font-size: 1.75em;
  }
`

export const ButtonText = styled.span`
  display: inline-block;
  margin-left: 0.25em;
  font-size: 1em;
  font-family: ${contentFont};
  font-weight: 300;;
`
