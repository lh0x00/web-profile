import styled from 'styled-components'
import { gradient } from 'styles/animation'
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
  color: #222;
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
`

export const InfoCard = styled.div`
  overflow: hidden;
  margin-top: -12em;
  padding: 0 0 1em;
  width: 30%;
  background: #fff;
  border-radius: .3em;
  box-shadow: ${boxShadow};
`

export const AvatarContainer = styled.div`
  min-height: 14em;
  background: #f5f5f5;
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
  }
`

export const InfoWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: -7em !important;
  height: 100%;
  width: 95% !important;
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
`

export const Job = styled.h2`
  margin: 0;
  padding-left: 0.1em;
  width: 100%;
  color: #fff;
  font-family: ${titleFont};
  font-weight: 300;
  font-size: 1.5em;
  line-height: 1;
  text-shadow: 1px 2px 7px rgba(0, 0, 0, 0.2);
`

export const About = styled.div`
  margin-top: 1.75em;
  padding: 0 1em;
`

export const AboutHead = styled.h3`
  margin: 0;
  font-family: ${titleFont};
  font-weight: 300;
  font-size: 1em;
  text-transform: uppercase;
  line-height: 1;
`

export const AboutContent = styled.div`
  margin-top: 0.75em;
  color: #555;
  font-weight: 300;
  font-size: .9em;
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


export const SocialNetwork = styled(About)``

export const SocialNetworkHead = styled(AboutHead)``

export const SocialNetworkContent = styled(AboutContent)``

export const SocialNetworkRow = styled.a`
  display: flex;
  align-items: center;
  margin: .5em 0;
  width: 100%;
  color: #555;
  text-decoration: none;
  > i {
    margin-right: .2em;
    font-size: 2em;
  }
`

export const SocialNetworkText = styled.span``

export const Contact = styled(SocialNetwork)``

export const ContactHead = styled(SocialNetworkHead)``

export const ContactContent = styled(SocialNetworkContent)``

export const ContactRow = styled(SocialNetworkRow)``

export const ContactText = styled(SocialNetworkText)``

export const Introduction = styled.div`
  margin: 2em auto 0;
  padding: 1em;
  width: 85%;
  background: #fff;
  border: none;
  border-radius: .3em;
  box-shadow: ${boxShadow};
`

export const IntroductionHead = styled.h4`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 0 .75em 0;
  font-family: ${titleFont};
  font-weight: 300;
  font-size: 1.5em;
  color: rgb(0, 137, 123);
  > i {
    margin-right: .2em;
    width: 1em;
    font-size: 2em;
  }
  :after {
    opacity: .75;
    position: absolute;
    top: 1.6em;
    left: 2.6em;
    display: inline-block;
    height: .05em;
    width: 1em;
    border-bottom: .075em solid;
    content: '';
  }
`

export const IntroductionContent = styled.div`
  padding: 0 .5em;
`

export const IntroductionRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: .25em 0;
  padding: .75em;
  border: none;
  border-radius: .3em;
  font-size: .9em;
  color: #555;
  :nth-child(2n+1) {
    background: #f7f7f7;
  }
`

export const IntroductionLabel = styled.div`
  color: #888;
`

export const IntroductionValue = styled.div`
  color: #333;
`

export const Experience = styled(Introduction)``

export const ExperienceHead = styled(IntroductionHead)`
  color: rgb(244, 81, 30);
`

export const ExperienceContent = styled(IntroductionContent)``

export const ExperienceRow = styled.div`
  margin-top: 1.5em;
`

export const ExperienceSubHead = styled.h5`
  margin: 0 0 .75em 0;
  font-family: ${titleFont};
  font-weight: 300;
  font-size: 1em;
  text-transform: uppercase;
  line-height: 1;
`

export const ExperienceDescription = styled.div`
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

export const Skill = styled(Experience)``

export const SkillHead = styled(ExperienceHead)`
  color: #2f7be0;
`

export const SkillContent = styled(ExperienceContent)``

export const SkillRow = styled(ExperienceRow)``

export const SkillSubHead = styled(ExperienceSubHead)``

export const SkillDescription = styled(ExperienceDescription)``

export const Company = styled(Experience)``

export const CompanyHead = styled(ExperienceHead)`
  color: rgb(84, 110, 122);
`

export const CompanyContent = styled(ExperienceContent)``

export const CompanyRow = styled(ExperienceRow)``

export const CompanySubHead = styled(ExperienceSubHead)``

export const CompanyDescription = styled(ExperienceDescription)``
