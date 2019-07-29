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
  Objective as ObjectiveStyled,
  ObjectiveHead as ObjectiveHeadStyled,
  ObjectiveContent as ObjectiveContentStyled,
  ObjectiveDescription as ObjectiveDescriptionStyled,
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
  Information as InformationStyled,
  InformationHead as InformationHeadStyled,
  InformationContent as InformationContentStyled,
  InformationRow as InformationRowStyled,
  InformationLabel as InformationLabelStyled,
  InformationValue as InformationValueStyled,
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
  Work as WorkStyled,
  WorkHead as WorkHeadStyled,
  WorkContent as WorkContentStyled,
  WorkRow as WorkRowStyled,
  WorkSubHead as WorkSubHeadStyled,
  WorkDescription as WorkDescriptionStyled,
} from './styles'

type PProfile = {
  header: any,
}

class Profile extends Component <PProfile, any> {
  renderAvatar = () => {
    const headInMobile = this.renderHead(true)

    return (
      <AvatarContainerStyled>
        <AvatarImageStyled src={PROFILE.AVATAR} />
        {headInMobile}
      </AvatarContainerStyled>
    )
  }

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

  renderHead = (isInMobile = false) => (
    <InfoWrapperStyled isInMobile={isInMobile}>
      <NameStyled>{PROFILE.NAME}</NameStyled>
      <JobStyled>{PROFILE.JOB}</JobStyled>
    </InfoWrapperStyled>
  )

  renderInformationRow = ([label, value]) => (
    <InformationRowStyled key={label}>
      <InformationLabelStyled>{label}</InformationLabelStyled>
      <InformationValueStyled>{value}</InformationValueStyled>
    </InformationRowStyled>
  )

  renderInformation = () => {
    const listInformations = Object.entries(PROFILE.DETAIL.INFORMATION).map(
      this.renderInformationRow,
    )

    return (
      <InformationStyled>
        <InformationHeadStyled>
          <Icon type="credit-card" />
          Information
        </InformationHeadStyled>
        <InformationContentStyled>{listInformations}</InformationContentStyled>
      </InformationStyled>
    )
  }

  renderObjective = () => (
    <ObjectiveStyled>
      <ObjectiveHeadStyled>
        <Icon type="question-circle" />
        About me
      </ObjectiveHeadStyled>
      <ObjectiveContentStyled>
        <ObjectiveDescriptionStyled>
          <Markdown source={PROFILE.DETAIL.OBJECTIVE} />
        </ObjectiveDescriptionStyled>
      </ObjectiveContentStyled>
    </ObjectiveStyled>
  )

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

  renderWorkRow = ([title, source]) => (
    <WorkRowStyled key={title}>
      <WorkSubHeadStyled>{title}</WorkSubHeadStyled>
      <WorkDescriptionStyled>
        <Markdown source={source} />
      </WorkDescriptionStyled>
    </WorkRowStyled>
  )

  renderWork = () => {
    const entriesWork = Object.entries(PROFILE.DETAIL.WORK)
    const listWorks = entriesWork.map(this.renderWorkRow)

    return (
      <WorkStyled>
        <WorkHeadStyled>
          <Icon type="suitcase" />
          Work
        </WorkHeadStyled>
        <WorkContentStyled>{listWorks}</WorkContentStyled>
      </WorkStyled>
    )
  }

  render() {
    const { header } = this.props

    const avatar = this.renderAvatar()
    const socialNetwork = this.renderSocialNetwork()
    const contact = this.renderContact()
    const head = this.renderHead()
    const information = this.renderInformation()
    const objective = this.renderObjective()
    const technologies = this.renderTechnologies()
    const experiences = this.renderExperiences()
    const company = this.renderWork()

    return (
      <BackgroundStyled>
        {header}
        <CoverStyled />

        <ContainerStyled>
          <InfoCardStyled>
            {avatar}
            {socialNetwork}
            {contact}
          </InfoCardStyled>
          <ContentStyled>
            {head}
            {information}
            {objective}
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
