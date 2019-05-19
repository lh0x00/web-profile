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
  AVATAR:
    'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/59750015_850606318633346_3583753924764499968_n.jpg?_nc_cat=110&_nc_oc=AQmNFO_I9Q6GNw8im-uug6GVGFZQbI7F25TMexWUFHbg6rCk_libmlzOywIYDze5Tvc&_nc_ht=scontent.fsgn5-3.fna&oh=2b65c71669a493f6d1d6d6e1fa113b51&oe=5D6BFC44', // eslint-disable-line max-len
  TITLE: 'Hieu Lam - yep, never give up.',
  INTRODUCTION: 'I love programming and open source and I want to do something, something great!', // eslint-disable-line max-len
  NAME: 'Hieu Lam',
  JOB: 'Developer',
  SLOGAN: 'yep, never give up',
  DESCRIPTION: 'I am a homeless in the programming world.',
  ABOUT:
    'I love **open source** and want to do something, something great 💭. I have knowledge about **NodeJS**, **React**, **MeteorJS**, **Mongo**, **PHP** and **MySQL**,... The **creator** and **contributor** to some **React**, **MeteorJS** and **NodeJS** projects 📦. I like complex **problem-solving** because it makes me excited 😆. I want to makes more utils to quickly solve 👻!', // eslint-disable-line max-len
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
    INTRODUCTION: {
      Name: 'Hieu Lam',
      Job: 'Developer',
      Gender: 'Male',
      Born: 'April 1999',
      Address: 'District 7, Ho Chi Minh City',
      Citizen: 'Vietnam',
      Languages: 'Vietnamese and English (basic, improving)',
      Education: 'Graduated high school in July 2017',
      Quote: 'Yep, never give up.',
    },
    EXPERIENCE: {
      'Front-end':
        'I have experience **HTML5**, **CSS3** and **Javascript**. I have knowledge about **React**, **jQuery** and other libraries, using libraries such as **Webpack**, **Rollup** and **Babel** to build and optimize performance for the projects. I am creator of [ciser](https://www.npmjs.com/package/ciser) and [liser](https://www.npmjs.com/package/liser), css functional support all responsive queries. In addition, I am contributor to some [React packages](https://www.npmjs.com/~lamhieu) such as [react-resize-detector](https://www.npmjs.com/package/react-resize-detector), [rc-image-loader](https://www.npmjs.com/package/rc-image-loader) and more. Please view [my Github](https://github.com/lamhieu-vk) to see more information.', // eslint-disable-line max-len
      'Back-end':
        'I have experience **NodeJS** and **Mongo**, I worked on **PHP** and **MySQL** before. I familiar some libraries and platform such as **MeteorJS**, **Express**, **NextJS** and I really like working on **NodeJS** native. I am proficient at building **real-time** and **server-side render** applications. Creator and contributor to some [NodeJS packages](https://www.npmjs.com/~lamhieu) such as [umitt](https://www.npmjs.com/package/umitt), [server-redirect](https://www.npmjs.com/package/server-redirect), [MeteorJS packages](https://atmospherejs.com/lamhieu) such as [meteor](https://github.com/meteor/meteor), [hypersubs](https://atmospherejs.com/lamhieu/hypersubs), [unblock](https://atmospherejs.com/lamhieu/unblock) and [meteorx](https://atmospherejs.com/lamhieu/meteorx). I have a simple project template is [web-app](https://github.com/lamhieu-vk/web-app) and really want to use CI to automation deploy applications.', // eslint-disable-line max-len
    },
    SKILL: {
      'Real-time applications (2+)':
        'I have built more than 2+ real-time applications. **Cl.y** is a **big project** for tracking and management tickets, It has **many data** and **data changing constantly**. **Cu.e** is a **big application** to technical support for many businesses. It has a built-in real-time **chat system**, **email system**, **information management**, and many other features. It was built on **Meteor** and **Mongo**.', // eslint-disable-line max-len
      'Business websites (10++)':
        'I have built more than 10+ websites for businesses in different industries. It was build on **NodeJS**, **React** and **GraphQL**.', // eslint-disable-line max-len
      'Web builder (2+)':
        'It tools to support build **responsive websites** quickly with many themes and templates. It built on **NodeJS**, **React** and **GraphQL**.', // eslint-disable-line max-len
      'Social networking (research)':
        'I researched from **2014** to **2016**. It is a **social network** and I really like it, I got many things from it and It brings to me many experiences **problem-solving** to build when **a big system**. I was built on **PHP**, **MySQL** and using some libraries to process media files and file systems such as **FFMPEG**, **ImageMagick**, **Dejavu** (in Python), and more.', // eslint-disable-line max-len
      'Unit test': 'I have experience implementing test units for the projects using **NodeJS** and **React**.', // eslint-disable-line max-len
      'E-commerce': 'Will be updated soon!',
      Other:
        'I often research how it worked on the packages I used, and sometimes contributed to those packages. Anyways, please view [my Github](https://github.com/lamhieu-vk) to see more.', // eslint-disable-line max-len
    },
    COMPANY: {
      'Connected SJC, July 2017 - January 2018':
        'Provide professional application development and marketing services. I am a **full-stack developer**, worked on **React**, **NodeJS**, **GraphQL**, and **Mongo** to develop, and maintain **websites**, **libraries**, and **tools** to help make the web more efficient. I love all the people there.', // eslint-disable-line max-len
      'Zigvy Corporation, March 2018 - March 2019':
        'Design, build and outsourcing software for customers from the US and Australia. I am a **full-stack developer**, worked on **React**, **NodeJS**, **MeteorJS**, and **Mongo** to develop, and maintain some small projects. Core team to build 2+ big projects support real-time and build-in many new technologies.', // eslint-disable-line max-len
      'Sendo JSC, March 2019 - Present':
        'Sendo is a Vietnamese **e-commerce** retailer and online commerce platform. I working to maintain the current system, build new features and products. I develop a tool to run the test for the front-end side. I maintain and optimal for some tools using develop and build the source code for the applications.', // eslint-disable-line max-len
    },
  },
}

export const SOURCES = {
  STYLES: [
    'https://necolas.github.io/normalize.css/latest/normalize.css',
    'https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css',
    'https://fonts.googleapis.com/css?family=Roboto+Slab:300,400|Roboto:100,300,400,700',
  ],
}
