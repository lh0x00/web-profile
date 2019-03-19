import React, { Component } from 'react'
import Markdown from 'react-markdown'
import { PROFILE } from 'lib/enums'
import { getSocialLink, getSocialIcon } from 'lib/utils'

import Icon from 'components/Icon'
import withHeader from 'lib/hoc/withHeader'

import {
  Background as BackgroundStyled,
  Cover as CoverStyled,
  InfoWrapper as InfoWrapperStyled,
  Name as NameStyled,
  Job as JobStyled,
  Container as ContainerStyled,
  Content as ContentStyled,
  InfoCard as InfoCardStyled,
  AvatarContainer as AvatarContainerStyled,
  AvatarImage as AvatarImageStyled,
  About as AboutStyled,
  AboutHead as AboutHeadStyled,
  AboutContent as AboutContentStyled,
  SocialNetwork as SocialNetworkStyled,
  SocialNetworkHead as SocialNetworkHeadStyled,
  SocialNetworkContent as SocialNetworkContentStyled,
  SocialNetworkRow as SocialNetworkRowStyled,
  SocialNetworkText as SocialNetworkTextStyled,
  Contact as ContactStyled,
  ContactHead as ContactHeadStyled,
  ContactContent as ContactContentStyled,
  ContactRow as ContactRowStyled,
  ContactText as ContactTextStyled,
  Introduction as IntroductionStyled,
  IntroductionHead as IntroductionHeadStyled,
  IntroductionContent as IntroductionContentStyled,
  IntroductionRow as IntroductionRowStyled,
  IntroductionLabel as IntroductionLabelStyled,
  IntroductionValue as IntroductionValueStyled,
  Experience as ExperienceStyled,
  ExperienceHead as ExperienceHeadStyled,
  ExperienceContent as ExperienceContentStyled,
  ExperienceRow as ExperienceRowStyled,
  ExperienceSubHead as ExperienceSubHeadStyled,
  ExperienceDescription as ExperienceDescriptionStyled,
  Portfolio as PortfolioStyled,
  PortfolioHead as PortfolioHeadStyled,
  PortfolioContent as PortfolioContentStyled,
  PortfolioRow as PortfolioRowStyled,
  PortfolioSubHead as PortfolioSubHeadStyled,
  PortfolioDescription as PortfolioDescriptionStyled,
  Company as CompanyStyled,
  CompanyHead as CompanyHeadStyled,
  CompanyContent as CompanyContentStyled,
  CompanyRow as CompanyRowStyled,
  CompanySubHead as CompanySubHeadStyled,
  CompanyDescription as CompanyDescriptionStyled,
} from './styles'

type PProfile = {
  header: any,
}

class Profile extends Component <PProfile, any> {
  renderAvatar = () => (
    <AvatarContainerStyled>
      <AvatarImageStyled src={PROFILE.AVATAR} />
    </AvatarContainerStyled>
  )

  renderAbout = () => (
    <AboutStyled>
      <AboutHeadStyled>About</AboutHeadStyled>
      <AboutContentStyled>
        <Markdown source={PROFILE.ABOUT} />
      </AboutContentStyled>
    </AboutStyled>
  )

  renderSocialNetworkRow = ([type, username]) => {
    const link = getSocialLink(type, username)
    const iconType = getSocialIcon(type)

    return (
      <SocialNetworkRowStyled key={type} href={link}>
        <Icon type={iconType} />
        <SocialNetworkTextStyled>{username}</SocialNetworkTextStyled>
      </SocialNetworkRowStyled>
    )
  }

  renderSocialNetwork = () => {
    const listSocialNetworks = Object.entries(PROFILE.SOCIAL_NETWORKS).map(
      this.renderSocialNetworkRow,
    )

    return (
      <SocialNetworkStyled>
        <SocialNetworkHeadStyled>Social network</SocialNetworkHeadStyled>
        <SocialNetworkContentStyled>{listSocialNetworks}</SocialNetworkContentStyled>
      </SocialNetworkStyled>
    )
  }

  renderContactRow = ({ icon, title, href }) => (
    <ContactRowStyled key={title} href={href} title={title}>
      <Icon type={icon} />
      <ContactTextStyled>{title}</ContactTextStyled>
    </ContactRowStyled>
  )

  renderContact = () => {
    const listContacts = Object.values(PROFILE.ACTIONS)
      .filter(action => !action.inSite).map(this.renderContactRow)

    return (
      <ContactStyled>
        <ContactHeadStyled>Contact</ContactHeadStyled>
        <ContactContentStyled>
          {listContacts}
          <ContactRowStyled href="/cv">
            <Icon type="globe" />
            <ContactTextStyled>lamhieu.info/cv</ContactTextStyled>
          </ContactRowStyled>
        </ContactContentStyled>
      </ContactStyled>
    )
  }

  renderInfo = () => (
    <InfoWrapperStyled>
      <NameStyled>{PROFILE.NAME}</NameStyled>
      <JobStyled>{PROFILE.JOB}</JobStyled>
    </InfoWrapperStyled>
  )

  renderIntroductionRow = ([label, value]) => (
    <IntroductionRowStyled key={label}>
      <IntroductionLabelStyled>{label}</IntroductionLabelStyled>
      <IntroductionValueStyled>{value}</IntroductionValueStyled>
    </IntroductionRowStyled>
  )

  renderIntroduction = () => {
    const listIntroductions = Object.entries(PROFILE.DETAIL.INTRODUCTION).map(
      this.renderIntroductionRow,
    )

    return (
      <IntroductionStyled>
        <IntroductionHeadStyled>
          <Icon type="credit-card" />
          Introduction
        </IntroductionHeadStyled>
        <IntroductionContentStyled>{listIntroductions}</IntroductionContentStyled>
      </IntroductionStyled>
    )
  }

  renderExperienceRow = ([title, source]) => (
    <ExperienceRowStyled key={title}>
      <ExperienceSubHeadStyled>{title}</ExperienceSubHeadStyled>
      <ExperienceDescriptionStyled>
        <Markdown source={source} />
      </ExperienceDescriptionStyled>
    </ExperienceRowStyled>
  )

  renderExperience = () => {
    const entriesExperience = Object.entries(PROFILE.DETAIL.EXPERIENCE)
    const listExperiences = entriesExperience.map(this.renderExperienceRow)

    return (
      <ExperienceStyled>
        <ExperienceHeadStyled>
          <Icon type="object-ungroup" />
          Experience
        </ExperienceHeadStyled>
        <ExperienceContentStyled>{listExperiences}</ExperienceContentStyled>
      </ExperienceStyled>
    )
  }

  renderPortfolioRow = ([title, source]) => (
    <PortfolioRowStyled key={title}>
      <PortfolioSubHeadStyled>{title}</PortfolioSubHeadStyled>
      <PortfolioDescriptionStyled>
        <Markdown source={source} />
      </PortfolioDescriptionStyled>
    </PortfolioRowStyled>
  )

  renderPortfolio = () => {
    const entriesPortfolio = Object.entries(PROFILE.DETAIL.SKILL)
    const listPortfolios = entriesPortfolio.map(this.renderPortfolioRow)

    return (
      <PortfolioStyled>
        <PortfolioHeadStyled>
          <Icon type="object-group" />
          Portfolio
        </PortfolioHeadStyled>
        <PortfolioContentStyled>{listPortfolios}</PortfolioContentStyled>
      </PortfolioStyled>
    )
  }

  renderCompanyRow = ([title, source]) => (
    <CompanyRowStyled key={title}>
      <CompanySubHeadStyled>{title}</CompanySubHeadStyled>
      <CompanyDescriptionStyled>
        <Markdown source={source} />
      </CompanyDescriptionStyled>
    </CompanyRowStyled>
  )

  renderCompany = () => {
    const entriesCompany = Object.entries(PROFILE.DETAIL.COMPANY)
    const listCompanys = entriesCompany.map(this.renderCompanyRow)

    return (
      <CompanyStyled>
        <CompanyHeadStyled>
          <Icon type="suitcase" />
          Company
        </CompanyHeadStyled>
        <CompanyContentStyled>{listCompanys}</CompanyContentStyled>
      </CompanyStyled>
    )
  }

  render() {
    const { header } = this.props

    const avatar = this.renderAvatar()
    const about = this.renderAbout()
    const socialNetwork = this.renderSocialNetwork()
    const contact = this.renderContact()
    const info = this.renderInfo()
    const introduction = this.renderIntroduction()
    const experience = this.renderExperience()
    const skill = this.renderPortfolio()
    const company = this.renderCompany()

    return (
      <BackgroundStyled>
        {header}
        <CoverStyled />

        <ContainerStyled>
          <InfoCardStyled>
            {avatar}
            {about}
            {socialNetwork}
            {contact}
          </InfoCardStyled>
          <ContentStyled>
            {info}
            {introduction}
            {experience}
            {skill}
            {company}
          </ContentStyled>
        </ContainerStyled>
      </BackgroundStyled>
    )
  }
}

export default withHeader(Profile)
