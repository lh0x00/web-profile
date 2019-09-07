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
  SITE_NAME: 'lamhieu.info',
  AUTHOR: 'Hieu Lam, lamhieu.vk@gmail.com',
  TYPE: 'personal',
  KEYWORDS:
    'lamhieu, lam, hieu, info, profile, developer, open source, react, jest, nodejs, mongodb, javascript, typescript, meteorjs, php, mysql', // eslint-disable-line max-len
  URL: 'https://lamhieu.info',
  IMAGE: '/static/images/placeholder.jpg', // eslint-disable-line max-len
  AVATAR: '/static/images/avatar.jpg', // eslint-disable-line max-len
  TITLE: 'Hieu Lam - yep, never give up.',
  INTRODUCTION:
    'I love programming and open source and I want to do something, something great!', // eslint-disable-line max-len
  NAME: 'Hieu Lam',
  JOB: 'Senior Software Developer',
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
      icon: 'info-circle',
      title: 'View profile',
      href: '/Profile',
      as: '/profile',
      prefetch: true,
      text: 'View profile',
      inSite: true,
    },
    {
      icon: 'phone',
      title: '+84 946 083 033',
      href: 'tel:+84946083033',
      text: null,
    },
    {
      icon: 'envelope',
      title: 'lamhieu.vk@gmail.com',
      href: 'mailto:lamhieu.vk@gmail.com',
      text: null,
    },
  ],
  DETAIL: {
    INFORMATION: {
      Name: 'Hieu Lam',
      Job: 'Developer',
      Gender: 'Male',
      Born: 'April 1999',
      Address: 'Saigon, Vietnam',
      Citizen: 'Vietnam',
      Languages: 'Vietnamese & English',
      Education: 'Graduated high school in July 2017',
      Quote: 'Yep, never give up.',
    },
    OBJECTIVE:
      "I **love programming** since I was a child. I started learning programming since I was in middle school and I realized I was **passionate about it**. I want to use technology to make everyone's life better. I love the fat code community and I always want to contribute to it. I like complex **problem-solving** because it makes me excited 😆. I want to makes more utils to quickly solve 👻! **Javascript** is often angry with me, I'm starting to love **Typescript**.", // eslint-disable-line max-len
    EXPERIENCE: {
      'Front-end':
        'I have experience in web development with new technologies and libraries like **Redux**, **React**, **NodeJS**, **ExpressJS** and **NextJS** combined with optimization by technology as well as technologies like **Webpack**, **Rollup** and **Babel** to bring the best user experience. You can see the libraries I have build on [NPM](https://npmjs.com/~lamhieu).', // eslint-disable-line max-len
      'Back-end':
        'I have a lot of experience in developing applications based on **NodeJS** and **PHP**, combining data bases like **MySQL** and **MongoDB**. In addition, I am proficient in developing real-time applications that have worked with **MeteorJS**. You can see the packages I have developed on [AtmosphereJS](https://atmospherejs.com/lamhieu) and [NPM](https://npmjs.com/~lamhieu).', // eslint-disable-line max-len
    },
    SKILL: {
      'Social networking (research)':
        'I researched from **2014** to **2016**. It is a **social network** and I really like it, I got many things from it and It brings to me many experiences **problem-solving** to build when **a big system**. I was built on **PHP**, **MySQL** and using some libraries to process media files and file systems such as **FFMPEG**, **ImageMagick**, **Dejavu** (in Python), and more.', // eslint-disable-line max-len
      'Real-time applications':
        'I have experienced more than two **real-time application** development projects, real-time features built with **MeteorJS** and **MongoDB**. I have knowledge of data transmission and synchronization.', // eslint-disable-line max-len
      'Web builder':
        'At **Connected SJC**, I have been involved in developing a **toolkit** and **web builder** to help create a responsive website quickly, conveniently and easily change the same user interface for the sales team.', // eslint-disable-line max-len
      'Unit test':
        'I familiar to implementing **unit testing** for **React** and **NodeJS** applications. **Jest**, **Enzyme** and **Sinon** are my favorite tools for this. At **Sendo**, I developed a new **test runner** based on some libraries, which is a combination and customized for the business., **Enzyme** and **Sinon** are my favorite tools for this. At **Sendo**, I developed a new **test runner** based on some libraries, which is a combination and customized for the business.', // eslint-disable-line max-len
      'Business websites':
        'I have developed a website for businesses that brings a high user experience with the combination of **React**, **NodeJS** and **GraphQL**., **React** and **GraphQL**.', // eslint-disable-line max-len
      'Open Source':
        'I would love to contribute to the development of the open source community, happy to be able to help everyone. To know more about what I do, I can see more at [my Github](https://github.com/lamhieu-vk) to see more.', // eslint-disable-line max-len
    },
    WORK: {
      'Connected SJC, July 2017 - January 2018':
        'Provide professional application development and marketing services. I am a **full-stack developer**, worked on **React**, **NodeJS**, **GraphQL**, and **Mongo** to develop, and maintain **websites**, **libraries**, and **tools** to help make the web more efficient. I love all the people there.', // eslint-disable-line max-len
      'Zigvy Corporation, March 2018 - March 2019':
        'Design, build and outsourcing software for customers from the US and Australia. I am a **full-stack developer**, worked on **React**, **NodeJS**, **MeteorJS**, and **Mongo** to develop, and maintain some small projects. Core team to build 2+ big projects support real-time and build-in many new technologies.', // eslint-disable-line max-len
      'Sendo JSC, March 2019 - Present':
        'Sendo is a Vietnamese **e-commerce** retailer and online commerce platform. I working to maintain the current system, build new features, products, toolkit and SDK layer. I develop tools to support development, run unit test and build with having much technology to the optimal performance. I am like a schoolboy here, learn and learn more!', // eslint-disable-line max-len
    },
  },
}

export const SOURCES = {
  STYLES: [
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
    'https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css',
    'https://fonts.googleapis.com/css?family=Roboto+Slab:300,400|Roboto:100,300,400,700',
  ],
}
