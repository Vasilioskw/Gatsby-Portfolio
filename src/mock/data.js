import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
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
  paragraphOne: 'Born in New York, I moved to Houston, Texas to focus on myself and expand opportunities in my field of work. Currently, I do real estate marketing with a small team that oversees 50+ properties in over 12 states. Working on a commission basis, I\'ve constantly had to innovate myself in a field no-one ever trained me for.',
  paragraphTwo: 'Seeing the limitations of marketing, and just how out-dated the real estate industry has become, I\'ve turned to learning full-stack software engineering / development. I\'m hoping to build a social, real estate, data-base matching application that will revolutionize the industry.',
  paragraphThree: 'With first-hand experience in issues the real estate industry is facing, I have already completed a down-scaled project version that utilizes SQL (Sequelize ORM), Postgres, JavaScript, HTML, NPM packages (such as: express es6 template engine). To build towards a full-scale version, I\'m working on the addition of PG Promise functionality, Redux, and React ( React is awesome and scale-able!).',
  paragraphThree: 'This "about me" can\'t be complete without mentioning my deep involvment with original yoga from Isha Foundation. My routine practice has helped shape me into an inclusive human-being. It has allowed my leadership to find concious expression. It has made my responability unlimited, so that I can do what\'s needed in the world - and do it with tremendous joy. I wish this upon everyone.',
  resume: 'https://drive.google.com/file/d/1Inw2K2c8YQZhDoK0_SDMz6ikMKBTpoah/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1-1.png',
    title: 'Cocktails & Quotes',
    info: 'This is a fun, social drinking game that utilizes two seperate APIs. The game is simple; After making your drink, you click the card to get a random Ron Swanson quote. If you laugh, you spin the wheel and see what it says to do.',
    info2: 'The first API is a seachable index of drink names, ingredients, and a corresponding image of the drink. This is done using AJAX requests and Promises. Finally, "For" and "While" loops are used to render out the data in a formated order. For the second API we did a similar proccess, but instead used "Math.random" for rendering. As a creative addition, we made a spin-able wheel - entirely out of CSS!',
    url: 'https://cocktails-and-quotes.netlify.app',
    repo: 'https://github.com/Vasilioskw/cocktail-Project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
