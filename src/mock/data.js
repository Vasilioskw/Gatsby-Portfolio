import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vasilios Kambouras\'s Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name\'s',
  name: 'Vasilios Kambouras',
  subtitle: 'I\'m'+' a Real Estate Portfolio Manager and upcoming Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'head_shot8.png',
  paragraphOne: 'Born in New York, I moved to Houston, Texas to focus on myself and expand opportunities in my field of work. Currently, I do real estate management with a small team that oversees 50+ properties in over 12 states. Working on a commission basis, I\'ve constantly had to innovate myself in a field no-one ever trained me for.',
  paragraphTwo: 'Seeing the limitations of marketing, and just how out-dated the real estate industry has become, I\'ve turned to learning full-stack software engineering / development with DigitalCrafts. I\'m hoping to build a social, real estate, data-base matching application that will revolutionize the industry.',
  paragraphThree: 'With first-hand experience in issues the real estate industry is facing, I have already completed a down-scaled project version that utilizes SQL (Sequelize ORM), Postgres, JavaScript, HTML, NPM packages (such as: express es6 template engine). To build towards a full-scale version, I\'m working on the addition of PG Promise functionality, Redux, and React ( React is awesome and scale-able!). I\'m also improving my upderstanding of Ruby & the Ruby on Rails Framework - Which is the first language I learned, via the Flatiron School Prep-Course. Skills I\'ve learned include HTML, CSS (+ Animations), CLI, JavaScript, jQuery, Promises, Axios, AJAX, Node 101, Express (+Express Template Engine & Middleware), Ruby (+ Ruby on Rails), PostgreSQL, React JS, Redux, Data Modeling, pg-Promise, Sequelize ORM, & state management.'
  paragraphThree: 'This "about me" can\'t be complete without mentioning my deep involvement with original yoga from Isha Foundation. My routine practice has helped shape me into an inclusive human-being, looking out for everyones\' well-being. It has allowed my leadership to find conscious expression. It has made my responsibility unlimited so that I can do what\'s needed in the world - and do it with tremendous joy. I wish this upon everyone.',
  resume: 'https://drive.google.com/file/d/1qdR1hV9Np2BcotV7QqKWr7qqQrV2Za7j/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'caq1.png',
    title: 'Cocktails & Quotes',
    info: 'This is a fun, social drinking game that utilizes two separate APIs. The game is simple; After making your drink, you click the card to get a random Ron Swanson quote. If you laugh, you spin the wheel and see what it says to do.',
    info2: 'The first API is a seachable index of drink names, ingredients, and a corresponding image of the drink. This is done using AJAX requests and Promises. Finally, "For" and "While" loops are used to render out the data in a formated order. For the second API we did a similar process, but instead used "Math.random" for rendering. As a creative addition, we made a spin-able wheel - entirely out of CSS!',
    url: 'https://cocktails-and-quotes.netlify.app',
    repo: 'https://github.com/Vasilioskw/cocktail-Project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 're-proj.png',
    title: 'The Public Property & Buyer Portfolio',
    info: 'This is a full-stack application, utilizing Node.JS, Sequelize / MySQL, elephantsql, Postgres, Beekeeper studio, JavaScript, and Express.JS + es6Renderer). Please, give the server a moment to wake up if viewing.',
    info2: 'In ambitions to create the real estate application of my dreams, to meet deadlines I pivoted the concept and downscaled the project. I\'m hoping this project serves as a launching pad to a more advanced product that can be commercialized.',
    url: 'https://public-real-estate-forum.herokuapp.com/ ',
    repo: 'https://github.com/Vasilioskw/The_Big_Box_Group', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'crexi1.png',
    title: 'Managed Real Estate Portfolio',
    info: 'The link below goes to my Crexi profile that has some of the real estate portfolio I manage - many are also "off-marketed" by means of direct emails.',
    info2: 'I would love to discuss how I marketed and managed 50+ properties across the country, in a sucessful, organized effort.',
    url: 'https://www.crexi.com/profile/vasilios-kambouras-thegreekr',
    repo: '', // if no repo, the button will not show up
  }

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email',
  email: 'VasiliosKw@Gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vasilios-kambouras-114327157/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Vasilioskw',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
