import styled from 'styled-components'
import { RESPONSIVE_SIZES } from 'lib/enums'
import {
  gradient,
  slideToLeft,
  slideToTop,
  slideToBottom,
  scaleIn,
  fadeIn,
} from 'styles/animation'
import { titleFont, contentFont } from 'styles/fonts'

export const Background = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  font-family: ${contentFont};
`

export const Info = styled.div`
  padding: 3.5em 0;
  width: 70vw;
  text-align: left;
  > h1, h2, h3 {
    max-width: 80%;
  }

  @media screen and (max-width: ${RESPONSIVE_SIZES.MOBILE}) {
    width: 85vw;
  }
`

export const Name = styled.h1`
  margin: 0;
  color: #fff;
  font-family: ${titleFont};
  font-weight: 300;
  font-size: 5em;
  line-height: 1;
  animation: ${slideToBottom} 1s ease;

  @media screen and (max-width: ${RESPONSIVE_SIZES.MOBILE}) {
    font-size: 4em;
  }
`

export const Slogan = styled.h2`
  margin: 0;
  padding-left: 5px;
  color: #fff;
  font-weight: 300;
  font-size: 1em;
  text-transform: uppercase;
  font-family: ${titleFont};
  animation: ${slideToLeft} 1s ease;

  @media screen and (max-width: ${RESPONSIVE_SIZES.MOBILE}) {
    font-size: .9em;
  }
`

export const Description = styled.h3`
  margin: .5em 0;
  padding: 0 5px;
  color: #fff;
  font-weight: 100;
  font-size: 1.75em;
  animation: ${fadeIn} 2s ease;

  @media screen and (max-width: ${RESPONSIVE_SIZES.MOBILE}) {
    font-size: 1.5em;
  }
`

export const SocialNetwork = styled.div`
  > a {
    margin: 0 .5em;
    animation: ${scaleIn} 1s ease;
    &:first-child {
      margin-left: 0
    }
    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: ${RESPONSIVE_SIZES.TABLE}) {
    display: flex;
    flex-wrap: wrap;
    > a {
      margin: 0;
      width: 50%;
    }
  }
`

export const ViewProfile = styled.a`
`

export const Action = styled.div`
  display: flex;
  margin-top: 1em;
  animation: ${slideToTop} 1s ease;
  > a {
    margin: 0 .5em;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: ${RESPONSIVE_SIZES.TABLE}) {
    > a {
      margin: 0 .25em;
    }
  }
`

export default {}
