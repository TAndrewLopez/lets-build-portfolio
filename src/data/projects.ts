import discourseBanner from 'public/assets/projects/banners/discourseBanner.png'
import discourseScreenshot from 'public/assets/projects/screenshots/discourseScreenshot.png'
import genRecordsBanner from 'public/assets/projects/banners/genRecordsBanner.png'
import genRecordsScreenshot from 'public/assets/projects/screenshots/genRecordsScreenshot.png'
import linkuistixBanner from 'public/assets/projects/banners/linkuistixBanner.png'
import linkuistixScreenshot from 'public/assets/projects/screenshots/linkuistixScreenshot.png'
import archivedBanner from 'public/assets/projects/banners/archivedBanner.png'
import archivedScreenshot from 'public/assets/projects/screenshots/archivedScreenshot.png'

export const PROJECT_DATA = [
    {
        id: 1,
        title: "Gen Records",
        bgImage: genRecordsScreenshot,
        projectURL: "/genRecords",
        technologies: ["Next.js", "Redux", "Postgresql", "Sequelize", "Tailwindcss", "Stripe"],
        screenshot: genRecordsBanner,
        liveSite: "https://gen-records.vercel.app/",
        github: "https://github.com/TAndrewLopez/gen_records_nextjs",
        intro: "This project showcases my ability to use a variety of technologies to create a robust and user-friendly e-commerce website, as well as my skills in problem-solving, API integration, and database management.",
        keyFeatures: [
            "Developed a fully functional e-commerce website using Next.js and Redux to handle state management and user authentication.",
            "Integrated Stripe API for secure payment processing, allowing customers to easily checkout with their preferred payment method.",
            "Implemented Postgresql database to store and manage product information, customer data, and order details.",
            "Designed and styled the website using Tailwindcss to create a modern and responsive user interface.",
            "Utilized Next.js server-side rendering and optimized images to improve website performance and loading times.",
            "Implemented search and filtering functionality to improve the user experience and enable customers to find products more easily.",
            "Developed a custom CMS using Next.js and Postgresql to allow administrators to easily manage product information and inventory levels."
        ],
    },
    {
        id: 2,
        title: "Linkuistix",
        bgImage: linkuistixScreenshot,
        projectURL: "/linkuistix",
        technologies: ["TensorFlow.js", "Pixi.js", "JavaScript", "React", "Firebase"],
        screenshot: linkuistixBanner,
        liveSite: "https://linkuistix.com/game",
        github: "https://github.com/DrTeethCapstone/Linkuistix",
        intro: "This projects demonstrates my ability to work with a range of technologies to build a complex web application as well as my ability to collaborate on a team to deliver a high-quality product. Linkuistix was designed using Object Oriented Programming utilizing the power of JavaScripts' Class constructors to build custom objects that inherited properties from Pixi.js elements. This meant that all through development I was able to focus on the games features and functionalities rather than the logic necessary to manage and display content on the screen.",
        keyFeatures: [
            "Designed and developed a web-based word association game using TensorFlow.js, Pixi.js, JavaScript, Firebase, and React.",
            "Implemented Firebase Authentication and Realtime Database to handle user login and track user scores.",
            "Utilized Pixi.js to create high-quality graphics and animations, enhancing the overall visual experience of the game.",
            "Collaborated with a team of designers and developers to develop and refine the game's concept and user interface."
        ],
    },
    {
        id: 3,
        title: "Discourse - Reddit Clone",
        bgImage: discourseScreenshot,
        projectURL: "/discourse",
        technologies: ["Next.js", "TypeScript", "Firebase", "CharkraUI", "Recoil"],
        screenshot: discourseBanner,
        liveSite: "https://discourse-forum.vercel.app/",
        github: "https://github.com/TAndrewLopez/discourse",
        intro: "This project demonstrates my ability to write reuseable and maintainable components as well as my skills in user interface design, data management, and client-side state management.",
        keyFeatures: [
            "Designed and developed a Reddit clone web application using Next.js, TypeScript, Firebase, Chakra UI, and Recoil.",
            "Implemented Firebase Authentication and Firestore to handle user authentication and store posts and comments.",
            "Utilized Chakra UI to create a visually appealing and user-friendly interface, improving the overall user experience.",
            "Implemented client-side state management using Recoil to improve performance and make the application more responsive.",
            "Developed custom hooks and reusable components to improve code reusability and maintainability.",
            "Utilized server-side rendering to improve SEO and website performance.",
            "Developed a RESTful API using Firebase Functions to handle voting and comment features.",
        ]
    },
    {
        id: 4,
        title: "Archived",
        bgImage: archivedScreenshot,
        projectURL: "/archived",
        technologies: ["Next.js", "TypeScript", "GraphQL", "Hygraph", "Tailwindcss",],
        screenshot: archivedBanner,
        liveSite: "Being a fullstack web developer",
        github: "https://github.com/TAndrewLopez/BlogWebsite",
        intro: "Archived is a lightweight Blog Website that details some of my interest and experiences. It highlights my skills in API development and user interface design.",
        keyFeatures: [
            "Designed and developed a personal blog website using Next.js, TypeScript, GraphQL, Hygraph, and Tailwindcss.",
            "Utilized Next.js server-side rendering to improve website performance and SEO.",
            "Developed a custom GraphQL API using Hygraph to fetch and display blog posts as well as handle user comments.",
            "Implemented client-side state management using Next.js built-in features to improve website responsiveness.",
            "Utilized Tailwindcss to create a modern and responsive user interface, improving overall user experience.",
            "Utilized TypeScript to improve code readability and maintainability."
        ],
    }
]

/*
gen records
     keyFeatures: "This project was one of the first times working with the Next.js framework. One of the big changes was the way I approached using middleware functions to protect specific routes. Also, was the first time working with the Spotify API which required some custom logic for authentication. Gen Records is a E-Commerce website focused on Vinyls. Users can search and sort by keywords, genres, and artists as well as add items to their cart and proceed to checkout using Stripe. Administrators have access to a protected dashboard with protected routes for CRUD operations for inventory and user information.",
*/