import { keyframes } from 'styled-components'

export const gradient = keyframes`
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

export const slideToLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`

export const slideToTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`

export const slideToBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`

export const scaleIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: scale(1.1, 1.1);
  }
}
`

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`
