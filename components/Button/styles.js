import styled from 'styled-components'

export const Button = styled.a`
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: .85em 2em .85em 1.8em;
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
    margin-right: .2em;
    font-size: 1.75em;
  }
`

export const ButtonText = styled.span`
  font-size: 1em;
  font-weight: 400;
`
