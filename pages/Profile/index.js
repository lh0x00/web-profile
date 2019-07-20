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
  Technologies as TechnologiesStyled,
  TechnologiesHead as TechnologiesHeadStyled,
  TechnologiesContent as TechnologiesContentStyled,
  TechnologiesRow as TechnologiesRowStyled,
  TechnologiesSubHead as TechnologiesSubHeadStyled,
  TechnologiesDescription as TechnologiesDescriptionStyled,
  Experiences as ExperiencesStyled,
  ExperiencesHead as ExperiencesHeadStyled,
  ExperiencesContent as ExperiencesContentStyled,
  ExperiencesRow as ExperiencesRowStyled,
  ExperiencesSubHead as ExperiencesSubHeadStyled,
  ExperiencesDescription as ExperiencesDescriptionStyled,
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
  renderAvatar = () => {
    const infoInMobile = this.renderInfo(true)

    return (
      <AvatarContainerStyled>
        <AvatarImageStyled src={PROFILE.AVATAR} />
        {infoInMobile}
      </AvatarContainerStyled>
    )
  }

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
          <ContactRowStyled href="/profile">
            <Icon type="globe" />
            <ContactTextStyled>lamhieu.info/profile</ContactTextStyled>
          </ContactRowStyled>
        </ContactContentStyled>
      </ContactStyled>
    )
  }

  renderInfo = (isInMobile = false) => (
    <InfoWrapperStyled isInMobile={isInMobile}>
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

  renderTechnologiesRow = ([title, source]) => (
    <TechnologiesRowStyled key={title}>
      <TechnologiesSubHeadStyled>{title}</TechnologiesSubHeadStyled>
      <TechnologiesDescriptionStyled>
        <Markdown source={source} />
      </TechnologiesDescriptionStyled>
    </TechnologiesRowStyled>
  )

  renderTechnologies = () => {
    const entriesTechnologies = Object.entries(PROFILE.DETAIL.EXPERIENCE)
    const listTechnologiess = entriesTechnologies.map(this.renderTechnologiesRow)

    return (
      <TechnologiesStyled>
        <TechnologiesHeadStyled>
          <Icon type="object-ungroup" />
          Technologies
        </TechnologiesHeadStyled>
        <TechnologiesContentStyled>{listTechnologiess}</TechnologiesContentStyled>
      </TechnologiesStyled>
    )
  }

  renderExperiencesRow = ([title, source]) => (
    <ExperiencesRowStyled key={title}>
      <ExperiencesSubHeadStyled>{title}</ExperiencesSubHeadStyled>
      <ExperiencesDescriptionStyled>
        <Markdown source={source} />
      </ExperiencesDescriptionStyled>
    </ExperiencesRowStyled>
  )

  renderExperiences = () => {
    const entriesExperiences = Object.entries(PROFILE.DETAIL.SKILL)
    const listExperiencess = entriesExperiences.map(this.renderExperiencesRow)

    return (
      <ExperiencesStyled>
        <ExperiencesHeadStyled>
          <Icon type="object-group" />
          Experiences
        </ExperiencesHeadStyled>
        <ExperiencesContentStyled>{listExperiencess}</ExperiencesContentStyled>
      </ExperiencesStyled>
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
    const technologies = this.renderTechnologies()
    const experiences = this.renderExperiences()
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
            {technologies}
            {experiences}
            {company}
          </ContentStyled>
        </ContainerStyled>
      </BackgroundStyled>
    )
  }
}

export default withHeader(Profile)
