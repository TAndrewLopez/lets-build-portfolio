import tattooBanner from "public/assets/projects/banners/tattooBanner.png";
import tattooScreenshot from "public/assets/projects/screenshots/tattooScreenshot.png";
import genRecordsBanner from "public/assets/projects/banners/genRecordsBanner.png";
import genRecordsScreenshot from "public/assets/projects/screenshots/genRecordsScreenshot.png";
import netflixBanner from "public/assets/projects/banners/netflixBanner.png";
import netflixScreenshot from "public/assets/projects/screenshots/netflixScreenshot.png";
import dashboardBanner from "public/assets/projects/banners/dashboardBanner.png";
import dashboardScreenshot from "public/assets/projects/screenshots/dashboardScreenshot.png";
import twitterBanner from "public/assets/projects/banners/twitterBanner.png";
import twitterScreenshot from "public/assets/projects/screenshots/twitterScreenshot.png";
import linkuistixBanner from "public/assets/projects/banners/linkuistixBanner.png";
import linkuistixScreenshot from "public/assets/projects/screenshots/linkuistixScreenshot.png";
import redditBanner from "public/assets/projects/banners/redditBanner.png";
import redditScreenshot from "public/assets/projects/screenshots/redditScreenshot.png";
import archivedBanner from "public/assets/projects/banners/archivedBanner.png";
import archivedScreenshot from "public/assets/projects/screenshots/archivedScreenshot.png";

export const PROJECT_DATA = [
  {
    id: 0,
    title: "TattooCRM",
    screenshot: tattooScreenshot,
    projectURL: "/tattooCRM",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwindcss",
      "TRPC",
      "Prisma",
      "Next-Auth",
      "Firebase",
      "Zustand",
    ],
    banner: tattooBanner,
    liveSite: "https://booking-tattoos.vercel.app/",
    github: "https://github.com/TAndrewLopez/booking-tattoos",
    intro:
      "In this project, I developed a web application to streamline the process for a client who previously used four different platforms to manage their tattoo request. Users can submit their information on the website, which triggers a confirmation email and stores the data in MongoDB. Administrators can review and manage requests using the admin interface with filtering and searching options. The system also includes consultation and appointment scheduling with a custom calendar page, a notes section for communication history, and rejection reasons with email templates. This consolidation of platforms has improved efficiency, user experience, and team collaboration.",
    keyFeatures: [
      "Streamlined client's process by consolidating multiple platforms into one location reducing the need to transfer data between different tools and improving overall efficiency.",
      "Simplified the user submission process by allowing users to submit their contact and tattoo information on the website, leading to improved user experience and increased submissions.",
      "Enhanced administrator's ability to manage request by providing filtering and searching options, making it easier to review and accept/reject submissions, resulting in improved workflow and productivity.",
      "Improved communication and collaboration within the team by incorporating a notes section for each submission, providing a history of interactions and communication, leading to better coordination and decision-making.",
    ],
  },
  {
    id: 1,
    title: "Linkuistix",
    screenshot: linkuistixScreenshot,
    projectURL: "/linkuistix",
    technologies: [
      "TensorFlow.js",
      "Pixi.js",
      "JavaScript",
      "React",
      "Firebase",
    ],
    banner: linkuistixBanner,
    liveSite: "https://linkuistix.com/game",
    github: "https://github.com/DrTeethCapstone/Linkuistix",
    intro:
      "This projects demonstrates my ability to work with a range of technologies to build a complex web application as well as my ability to collaborate on a team to deliver a high-quality product. Linkuistix was designed using Object Oriented Programming utilizing the power of JavaScripts' Class constructors to build custom objects that inherited properties from Pixi.js elements. This meant that all through development I was able to focus on the games features and functionalities rather than the logic necessary to manage and display content on the screen.",
    keyFeatures: [
      "Designed and developed a web-based word association game using TensorFlow.js, Pixi.js, JavaScript, Firebase, and React.",
      "Implemented Firebase Authentication and Realtime Database to handle user login and track user scores.",
      "Utilized Pixi.js to create high-quality graphics and animations, enhancing the overall visual experience of the game.",
      "Collaborated with a team of designers and developers to develop and refine the game's concept and user interface.",
    ],
  },
  {
    id: 2,
    title: "Gen Records",
    screenshot: genRecordsScreenshot,
    projectURL: "/genRecords",
    technologies: [
      "Next.js",
      "Redux",
      "Postgresql",
      "Sequelize",
      "Tailwindcss",
      "Stripe",
    ],
    banner: genRecordsBanner,
    liveSite: "https://gen-records.vercel.app/",
    github: "https://github.com/TAndrewLopez/gen_records_nextjs",
    intro:
      "This project showcases my ability to use a variety of technologies to create a robust and user-friendly e-commerce website, as well as my skills in problem-solving, API integration, and database management.",
    keyFeatures: [
      "Developed a fully functional e-commerce website using Next.js and Redux to handle state management and user authentication.",
      "Integrated Stripe API for secure payment processing, allowing customers to easily checkout with their preferred payment method.",
      "Implemented Postgresql database to store and manage product information, customer data, and order details.",
      "Designed and styled the website using Tailwindcss to create a modern and responsive user interface.",
      "Utilized Next.js server-side rendering and optimized images to improve website performance and loading times.",
      "Implemented search and filtering functionality to improve the user experience and enable customers to find products more easily.",
      "Developed a custom CMS using Next.js and Postgresql to allow administrators to easily manage product information and inventory levels.",
    ],
  },
  {
    id: 3,
    title: "Netflix Clone",
    screenshot: netflixScreenshot,
    projectURL: "/netflix",
    technologies: [
      "Next.js",
      "TypeScript",
      "Next-Auth",
      "Prisma",
      "Tailwindcss",
      "Zustand",
    ],
    banner: netflixBanner,
    liveSite: "https://kibble-clone.vercel.app/auth",
    github: "https://github.com/TAndrewLopez/kibble-clone",
    intro:
      "This Netflix clone was built using modern web technologies with features like user authentication, the ability to add movies to a favorites list, and a dynamic billboard component that automatically plays a preview of a random movie from the database.",
    keyFeatures: [
      "Developed a Netflix clone with it's core features using Next.js, TypeScript, and Prisma.",
      "Utilized Next-Auth for user authentication and Zustand for global management.",
      "Designed and integrated a custom backend API using Prisma and MongoDB to store and manage movie data, user profiles, and favorites lists.",
      "Deployed the application on Vercel and optimized the website for fast load times and efficient data retrieval, resulting in positive user feedback.",
    ],
  },

  {
    id: 4,
    title: "FinTech Dashboard",
    screenshot: dashboardScreenshot,
    projectURL: "/dashboard",
    technologies: [
      "Vite.js",
      "TypeScript",
      "Material UI",
      "Recharts",
      "Redux/RTK",
      "RTK Query",
      "React Router",
    ],
    banner: dashboardBanner,
    liveSite: "",
    github: "",
    intro:
      "This web application was designed to help users track the finances of their company. It displays key performance indicators (KPIs) and other data information using multiple charts and tables, such as line, pie, and bar charts.",
    keyFeatures: [
      "Created a responsive finance dashboard that allows users to track key performance indicators and financial data for their company",
      "Implemented a machine learning library, Regression.js, to create a regression line to display the best fit line for the data.",
      "Utilized a chart library, Recharts, for creating line, pie and bar charts.",
    ],
  },
  {
    id: 5,
    title: "Twitter Clone",
    screenshot: twitterScreenshot,
    projectURL: "/twitter",
    technologies: [
      "Next.js",
      "TypeScript",
      "Next-Auth",
      "Prisma",
      "Recoil",
      "SWR",
      "Tailwindcss",
    ],
    banner: twitterBanner,
    liveSite: "https://chirp-clone.vercel.app/",
    github: "https://github.com/TAndrewLopez/chirp-clone",
    intro:
      "This Twitter clone was created using modern technologies where users are able to create accounts and login, have a custom feed of people they follow and their own posts, have a profile that can be updated with images and a bio, and receive notifications when other users follow, comment or like their posts. The application also includes toast notifications to provide real-time feedback to users.",
    keyFeatures: [
      "Developed a Twitter clone using Next.js, TypeScript, and Prisma.",
      "Utilized Next-Auth for user authentication and Recoil for global management.",
      "Designed and integrated a custom backend API using Prisma and MongoDB to store and manage user information, post, comments, likes, and notifications.",
    ],
  },
  {
    id: 6,
    title: "Archived",
    screenshot: archivedScreenshot,
    projectURL: "/archived",
    technologies: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Hygraph",
      "Tailwindcss",
    ],
    banner: archivedBanner,
    liveSite: "",
    github: "https://github.com/TAndrewLopez/BlogWebsite",
    intro:
      "Archived is a lightweight Blog Website that details some of my interest and experiences. It highlights my skills in API development and user interface design.",
    keyFeatures: [
      "Designed and developed a personal blog website using Next.js, TypeScript, GraphQL, Hygraph, and Tailwindcss.",
      "Utilized Next.js server-side rendering to improve website performance and SEO.",
      "Developed a custom GraphQL API using Hygraph to fetch and display blog posts as well as handle user comments.",
      "Implemented client-side state management using Next.js built-in features to improve website responsiveness.",
      "Utilized Tailwindcss to create a modern and responsive user interface, improving overall user experience.",
      "Utilized TypeScript to improve code readability and maintainability.",
    ],
  },
  {
    id: 7,
    title: "Reddit Clone",
    screenshot: redditScreenshot,
    projectURL: "/reddit",
    technologies: ["Next.js", "TypeScript", "Firebase", "CharkraUI", "Recoil"],
    banner: redditBanner,
    liveSite: "https://discourse-forum.vercel.app/",
    github: "https://github.com/TAndrewLopez/discourse",
    intro:
      "This project demonstrates my ability to write reuseable and maintainable components as well as my skills in user interface design, data management, and client-side state management.",
    keyFeatures: [
      "Designed and developed a Reddit clone web application using Next.js, TypeScript, Firebase, Chakra UI, and Recoil.",
      "Implemented Firebase Authentication and Firestore to handle user authentication and store posts and comments.",
      "Utilized Chakra UI to create a visually appealing and user-friendly interface, improving the overall user experience.",
      "Implemented client-side state management using Recoil to improve performance and make the application more responsive.",
      "Developed custom hooks and reusable components to improve code reusability and maintainability.",
      "Utilized server-side rendering to improve SEO and website performance.",
      "Developed a RESTful API using Firebase Functions to handle voting and comment features.",
    ],
  },
];
