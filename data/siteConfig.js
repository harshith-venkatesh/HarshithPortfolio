module.exports = {
  siteTitle: 'Harshith Venkatesh',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Harshith Venkatesh',
  twitterUsername: 'Harshith_V007',
  githubUsername: 'harshith-venkatesh',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Experienced Coordinator with a demonstrated history of working on UI Development. Skilled in <strong>React.js, JavaScript, Angular, NodeJS, CSS, HTML</strong>.
  Actively involved in product discussion, development of three projects on Angular and React in Lumen Technologies. Apart from office work, I am an active member, App Owner(Events Page) of an open-source community - Real Dev Squad where I involve in building unique features, interact with students on web development from various parts of the world, code reviews, etc`,
  jobs: [
    /* more jobs here */
    {
      company: 'Lumen India',
      begin: {
        month: 'dec',
        year: '2021',
      },
      
      duration: null,
      occupation: 'Senior Software Engineer',
      description:
        
        `
       ● Part of the platforms team, building a product called Custom Objects involved from ideation, design, and
system design discussion to releasing the product that millions of customers have consumed.
● Designed and developed components known as Entity Builder, Widget which was appreciated by the team
and products team for its feasibility and adaptability by users
● Improved delight metrics Apdex scores of our product from 0.86 to 0.95 through various measures like
improving widget loading speed, reducing bundled size, and UI deployment architecture changes.
● Migrated Ember application from 3.0 to 3.16 to resolve security issues and support product requirements.
● Involved in migrating the application from manual deployment to CI/CD pipeline using Jenkins and GitHub
actions.
● Appreciated and awarded in the organization for quick delivery of managing the translations of dynamic
headers through YAML file upload and internationalization.
● Appreciated for introducing web component providing features to add & link records in product page within
a quarter leading to 340k+ USD revenue for the product.
● Taken multiple organization-wide sessions on React and Web Security and Mentored a team of 3-5
engineers to the Custom Object React.js codebase through code reviews and guided them to enhance their
debugging skills
        
        `,
    },
    {
      company: 'Lumen India',
      begin: {
        month: 'aug',
        year: '2018',
      },
      end: {
        month: 'dec',
        year: '2021'
      },
      duration: 3,
      occupation: 'Software Development Consultant I',
      description:
        
        `
        - Developed Responsive SPA Enterprise Dashboard, assets   display for 1M+ transactions using Angular 8, NodeJS, GitLab, Material UI. 

        - Devoted special emphasis to display relevant data based on criteria and implemented features to ease data visualization. 

        - Awarded for initiating and leading a team of 3 people for devising a tracking tool, Enterprise Dashboard project which automates PASE team's performance by 40%.

        - Improved project performance by 60% by caching, lazy loading,optimization of code. 

        - Created an SPA using ReactJS, Ag-Grid,D3.js consisting of multiple dashboards for invoice portal. 
        
        - Involved in migrating the application from manual deployment to CI/CD pipeline using Jenkins and GitHub actions.
        
        `,
    },
    {
      company: 'Real Dev Squad',
      begin: {
        month: 'aug',
        year: '2020',
      },

      duration: 3,
      occupation: 'Open Source Contributor',
      description:
        `
        - Managing open source web development community having 100+ members 

        - App Owner of Events App which contains the role of TechLead, Project Manager.

        - Moderated and coordinated in building multiple projects built on React, NextJS, NodeJS at Real Dev Squad. 

        - Proactively involved in setting up repositories, reviewing codes, and overseeing PRs.
        
        `,
    },
    ,
  ],
  portifolio: [
    {
      image:'/images/project_techkart.png',
      description:'Tech Kart',
      url: 'https://techcart-app.herokuapp.com/'
    },
    {
      image:'/images/project_shankha.PNG',
      description:'Shankha CSS',
      url: 'http://shankhacss.netlify.app/'
    },
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
    twitter: 'https://twitter.com/Harshith_V007',
    linkedin: 'https://www.linkedin.com/in/harshithvenkatesh/',
    github: 'https://github.com/harshith-venkatesh',
    email: 'harshithece7016@gmail.com',
  },
  siteUrl: 'https://harshith-venkatesh.github.io',
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
