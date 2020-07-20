module.exports = {
  siteTitle: 'Harshith Venkatesh',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Harshith Venkatesh',
  twitterUsername: 'HarshithVenkat9',
  githubUsername: 'Harshi7016',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Developer, passionate about what I do. Always interested in how the sites were made, I started to study HTML by hobby. <br />In 2018 I started working as a Web Application Developer in CenturyLink India.
    I have completed my B.Tech in Manipal Institute of Technology <br /> I currently work as a frontend developer and mainly focus on <strong>Javascript, Angular, NodeJS, React.</strong>`,
  skills: [
    {
      name: 'HTML',
      level: 70,
    },
    {
      name: 'CSS',
      level: 60,
    },
    {
      name: 'Javascript',
      level: 80,
    },
    {
      name: 'NodeJs',
      level: 70,
    },
    {
      name: 'React',
      level: 77,
    },
    {
      name: 'Git',
      level: 70,
    },
    {
      name: 'Angular',
      level: 81,
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: 'CenturyLink India',
      begin: {
        month: 'aug',
        year: '2018',
      },
      duration: null,
      occupation: 'Web Application Developer',
      description:
        // 'I am part of the Corporate team, responsible for the development and maintenance of the employee management platform, giving more and more autonomy to partner companies.',
        'Created the enterprise dashboard and the data visualization module for different assets in Financial Blockchain Ledger Project. I got the opportunity to set up the front end module and maintain it. Played the role of mentor and been a part of cultural team. Collaborated on high priority projects with tact and strong attention to detail. Tech Stack: Angular, Gitlab, NodeJS',
    },
    {
      company: 'Manipal Institute of Technology',
      begin: {
        month: 'aug',
        year: '2014',
      },
      duration: '4 years',
      occupation: 'Student',
      description:
        'Secured 8.44GPA - B.Tech in Electronices and Communication.Responsibalities include: Technical Secretary, Coding and Development Head - Akshay Urja Club, Event Head for ENERGIA- Techtatva-2016(Technical Fest of MIT, Manipal),Organiser for Judges Category during REVELS-2016(Cultural Fest of MIT, Manipal)',
    },
    {
      company: 'Vidyodaya Public School',
      begin: {
        month: 'dec',
        year: '2006',
      },
      duration: '8 years',
      occupation: 'Studnet',
      description:
        'Secured 94% in +12 and got 100% Scholorship seat in MIT Manipal for securing 541 rank in MU-OET',
    },
  ],
  portifolio: [
    {
      image: '/images/project1.png',
      description: 'Where in the World!',
      url: 'https://whereintheworldismycountry.netlify.app/',
    },
    {
      image: '/images/project6.png',
      description: 'Farm2Home MERN Project',
      url: 'https://farm2wohome.herokuapp.com/',
    },
    {
      image: '/images/project2.png',
      description: 'Expense Tracker using Angular',
      url: 'https://kharchapaani.netlify.app/',
    },
    {
      image: '/images/project3.png',
      description: 'Covid Tracker using React',
      url: 'https://covid19trackerdemo.netlify.app/',
    },
    {
      image: '/images/project4.png',
      description: 'Weather Progressive Web App',
      url: 'https://progressiveweatherapp.netlify.app/',
    },
    {
      image: '/images/project5.png',
      description: 'Breaking Bad',
      url: 'https://iamtheonewhoknocks.netlify.app/',
    },

    /* more portifolio items here */
  ],
  social: {
    twitter: 'https://twitter.com/HarshithVenkat9',
    linkedin: 'https://www.linkedin.com/in/harshith-v-7016ece',
    github: 'https://github.com/Harshi7016',
    email: 'harshithece7016@gmail.com',
  },
  siteUrl: 'https://harshi7016.github.io',
  // pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-171686543-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    },
  ],
}
