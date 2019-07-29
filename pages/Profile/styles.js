import styled from 'styled-components'
import { RESPONSIVE_SIZES } from 'lib/enums'
import {
  gradient, slideToRight, slideToLeft, slideToBottom, slideToTop,
} from 'styles/animation'
import { titleFont, contentFont } from 'styles/fonts'

const boxShadow = '0 1px 9px 1px rgba(0, 0, 0, 0.1)'

export const Background = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  padding-bottom: 5em;
  width: 100%;
  background: #efefef;
  color: #333;
  font-family: ${contentFont};
  font-weight: 300;
`

export const Cover = styled.div`
  height: 18em;
  width: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
`

export const Container = styled.div`
  display: flex;
  align-items: start;
  min-width: 50em;
  width: 70%;

  @media screen and (max-width: ${RESPONSIVE_SIZES.TABLE}) {
    flex-wrap: wrap;
    width: 75%;
    min-width: auto;
  }
  @media screen and (max-width: ${RESPONSIVE_SIZES.MOBILE}) {
    flex-wrap: wrap;
    width: 90%;
    min-width: auto;
  }
`

export const InfoCard = styled.div`
  overflow: hidden;
  margin-top: -12em;
  padding: 0 0 1em;
  width: 30%;
  background: #fff;
  border-radius: 0.3em;
  box-shadow: ${boxShadow};
  animation: ${slideToRight} .3s ease;

  @media screen and (max-width: ${RESPONSIVE_SIZES.TABLE}) {
    width: 100%;
  }
`

export const AvatarContainer = styled.div`
  position: relative;
  min-height: 14em;
  background: #f5f5f5;
  font-size: 0;
`

export const AvatarImage = styled.img`
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  position: relative;
  width: 70%;
  background: transparent;
  > section {
    margin: 1em auto;
    width: 90%;

    @media screen and (max-width: ${RESPONSIVE_SIZES.TABLE}) {
      width: 100%;
    }
  }

  @media screen and (max-width: ${RESPONSIVE_SIZES.TABLE}) {
    width: 100%;
    font-size: 1.1em;
  }
`

export const InfoWrapper = styled.section`
  display: ${({ isInMobile }) => (!isInMobile ? 'flex' : 'none')};
  flex-wrap: wrap;
  margin-top: -7em !important;
  height: 100%;
  width: 95% !important;

  @media screen and (max-width: ${RESPONSIVE_SIZES.TABLE}) {
    position: absolute;
    bottom: 0;
    display: ${({ isInMobile }) => (isInMobile ? 'flex' : 'none')};
    margin-top: 0 !important;
    padding: 1em .5em;
    height: auto;
    font-size: 16px;
    background: linear-gradient(0deg, rgb(2, 0, 36) 0%, rgba(0, 0, 0, .7) 0%, transparent 100%);
  }
`

export const Name = styled.h1`
  margin: 0;
  padding: 0;
  width: 100%;
  color: #fff;
  font-family: ${titleFont};
  font-weight: 300;
  font-size: 3.5em;
  line-height: 1;
  text-shadow: 1px 2px 7px rgba(0, 0, 0, 0.2);
  animation: ${slideToBottom} .3s ease;

  @media screen and (max-width: ${RESPONSIVE_SIZES.TABLE}) {
    font-size: 2.5em;
  }
`

export const Job = styled.h2`
  margin: .2em 0 0;
  padding-left: 0.1em;
  width: 100%;
  color: #fff;
  font-family: ${titleFont};
  font-weight: 300;
  font-size: 1.5em;
  line-height: 1;
  text-shadow: 1px 2px 7px rgba(0, 0, 0, 0.2);
  animation: ${slideToTop} .3s ease;

  @media screen and (max-width: ${RESPONSIVE_SIZES.TABLE}) {
    font-size: 1.2em;
  }
`

export const SocialNetwork = styled.div`
  margin-top: 1.75em;
  padding: 0 1em;
`

export const SocialNetworkHead = styled.h3`
  margin: 0;
  font-family: ${titleFont};
  font-weight: 300;
  font-size: 1.2em;
  text-transform: uppercase;
  line-height: 1;
`

export const SocialNetworkContent = styled.div`
  margin-top: 1em;
  color: #555;
  font-weight: 300;
  font-size: 1em;
  line-height: 1.4em;
  > p {
    margin: 0;
    strong {
      color: #555;
      font-weight: 400;
      line-height: 1;
    }
  }
`

export const SocialNetworkRow = styled.a`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
  width: 100%;
  color: #555;
  text-decoration: none;
  > i {
    margin-right: 0.3em;
    font-size: 2em;
  }
`

export const SocialNetworkText = styled.span``

export const Contact = styled(SocialNetwork)``

export const ContactHead = styled(SocialNetworkHead)``

export const ContactContent = styled(SocialNetworkContent)``

export const ContactRow = styled(SocialNetworkRow)``

export const ContactText = styled(SocialNetworkText)``

export const Information = styled.div`
  margin: 2em auto 0;
  padding: 1.3em 1.1em 1.5em;
  width: 85%;
  background: #fff;
  border: none;
  border-radius: 0.3em;
  box-shadow: ${boxShadow};
  animation: ${slideToLeft} .3s ease;

  @media screen and (max-width: ${RESPONSIVE_SIZES.TABLE}) {
    width: 100%;
  }
`

export const InformationHead = styled.h4`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 0 0.6em 0;
  padding: 0 .1em;
  font-family: ${titleFont};
  font-weight: 300;
  font-size: 1.5em;
  color: rgb(0, 137, 123);
  > i {
    margin-right: 0.2em;
    width: 1em;
    font-size: 2em;
  }
  :after {
    opacity: 0.75;
    position: absolute;
    top: 1.6em;
    left: 2.6em;
    display: inline-block;
    height: 0.05em;
    width: 1em;
    border-bottom: 0.075em solid;
    content: '';
  }
`

export const InformationContent = styled.div`
  padding: 0 0.5em;
`

export const InformationRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.25em 0;
  padding: 0.75em;
  border: none;
  border-radius: 0.3em;
  font-size: 1em;
  color: #555;
  :nth-child(2n + 1) {
    background: #f7f7f7;
  }

  @media screen and (max-width: ${RESPONSIVE_SIZES.TABLE}) {
    flex-wrap: wrap;
  }
`

export const InformationLabel = styled.div`
  color: #999;

  @media screen and (max-width: ${RESPONSIVE_SIZES.TABLE}) {
    margin-bottom: 0.4em;
    width: 100%;
    font-size: 0.75em;
    text-transform: uppercase;
  }
`

export const InformationValue = styled.div`
  color: #333;
`

export const Objective = styled(Information)``

export const ObjectiveHead = styled(InformationHead)`
  color: rgb(92, 107, 192);
`

export const ObjectiveContent = styled(InformationContent)``

export const ObjectiveDescription = styled.div`
  line-height: 1.4em;
  > p {
    margin: 0;
    strong,
    a {
      font-weight: 400;
      line-height: 1;
      text-decoration: none;
      color: #555;
    }
    a {
      font-weight: 300;
      border-bottom: 1px dotted #555;
    }
  }
`

export const Technologies = styled(Information)``

export const TechnologiesHead = styled(InformationHead)`
  color: rgb(244, 81, 30);
`

export const TechnologiesContent = styled(InformationContent)``

export const TechnologiesRow = styled.div`
  margin-top: 1.5em;
`

export const TechnologiesSubHead = styled.h5`
  margin: 0 0 0.5em 0;
  color: #555;
  font-family: ${titleFont};
  font-weight: 300;
  font-size: 1.2em;
  text-transform: uppercase;
  line-height: 1.4;
`

export const TechnologiesDescription = styled(ObjectiveDescription)``

export const Experiences = styled(Technologies)``

export const ExperiencesHead = styled(TechnologiesHead)`
  color: #2f7be0;
`

export const ExperiencesContent = styled(TechnologiesContent)``

export const ExperiencesRow = styled(TechnologiesRow)``

export const ExperiencesSubHead = styled(TechnologiesSubHead)``

export const ExperiencesDescription = styled(TechnologiesDescription)``

export const Work = styled(Technologies)``

export const WorkHead = styled(TechnologiesHead)`
  color: rgb(84, 110, 122);
`

export const WorkContent = styled(TechnologiesContent)``

export const WorkRow = styled(TechnologiesRow)``

export const WorkSubHead = styled(TechnologiesSubHead)``

export const WorkDescription = styled(TechnologiesDescription)``
