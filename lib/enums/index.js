export const SOCIAL_NETWORK = {
  GITHUB: 'GITHUB',
  LINKEDIN: 'LINKEDIN',
  FACEBOOK: 'FACEBOOK',
  TWITTER: 'TWITTER',
}

export const SOCIAL_NETWORK_LINKS = {
  [SOCIAL_NETWORK.GITHUB]: 'https://github.com/{username}',
  [SOCIAL_NETWORK.LINKEDIN]: 'https://linkedin.com/in/{username}',
  [SOCIAL_NETWORK.FACEBOOK]: 'https://facebook.com/{username}',
  [SOCIAL_NETWORK.TWITTER]: 'https://twitter.com/{username}',
}

export const SOCIAL_NETWORK_ICONS = {
  [SOCIAL_NETWORK.GITHUB]: 'github',
  [SOCIAL_NETWORK.LINKEDIN]: 'linkedin',
  [SOCIAL_NETWORK.FACEBOOK]: 'facebook',
  [SOCIAL_NETWORK.TWITTER]: 'twitter',
}

export const RESPONSIVE_SIZES = {
  MOBILE: '30em',
  TABLE: '60em',
}

export const PROFILE = {
  IMAGE: 'https://avatars2.githubusercontent.com/u/9839768?v=4',
  TITLE: 'Hieu Lam - yep, never give up.',
  INTRODUCTION: "I love programming and open source and I want to build something, something great! I contributing and maintenance to some projects, it's so exciting.",
  NAME: 'Hieu Lam',
  SLOGAN: 'yep, never give up',
  DESCRIPTION: 'I am a homeless in the programming world.',
  SOCIAL_NETWORKS: {
    [SOCIAL_NETWORK.GITHUB]: 'lamhieu-vk',
    [SOCIAL_NETWORK.LINKEDIN]: 'lamhieu-vk',
    [SOCIAL_NETWORK.FACEBOOK]: 'lamhieu.me',
    [SOCIAL_NETWORK.TWITTER]: '_lamhieu',
  },
  ACTIONS: [
    {
      icon: 'phone',
      title: '+84 946 083 033',
      href: 'tel:+84946083033',
      text: 'Call me',
    },
    {
      icon: 'envelope',
      title: 'lamhieu.vk@gmail.com',
      href: 'mailto:lamhieu.vk@gmail.com',
      text: 'Send email',
    },
  ]
}

export const SOURCES = {
  STYLES: [
    'https://necolas.github.io/normalize.css/latest/normalize.css',
    'https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css',
    'https://fonts.googleapis.com/css?family=Roboto+Condensed:300|Roboto:100,400,700',
  ],
}
