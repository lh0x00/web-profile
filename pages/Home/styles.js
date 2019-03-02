import styled, { keyframes } from 'styled-components'
import { RESPONSIVE_SIZES } from 'lib/enums'

const gradient = keyframes`
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
`

const slideToLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`

const slideToTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`

const slideToBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`

const scaleIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: scale(1.1, 1.1);
  }
}
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`

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
  animation: ${gradient} 20s ease infinite;
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 100;
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
  font-family: 'Roboto Condensed',sans-serif;
  animation: ${slideToLeft} 1s ease;

  @media screen and (max-width: ${RESPONSIVE_SIZES.MOBILE}) {
    font-size: .9em;
  }
`

export const Description = styled.h3`
  margin: .5em 0;
  padding: 0 5px;
  color: #fff;
  font-weight: 300;
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
      padding: .75em 1.1em .75em .9em;
    }
  }
`

export default {}
