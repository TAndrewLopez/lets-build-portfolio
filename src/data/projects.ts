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
        intro: "This project was one of the first times working with the Next.js framework. One of the big changes was the way I approached using middleware functions to protect specific routes. Also, was the first time working with the Spotify API which required some custom logic for authentication.",
        details: "Gen Records is a E-Commerce website focused on Vinyls. Users can search and sort by keywords, genres, and artists as well as add items to their cart and proceed to checkout using Stripe. Administrators have access to a protected dashboard with protected routes for CRUD operations for inventory and user information.",
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
        intro: "Linkuistix took everything I knew about web development and flipped it on it's side. This project was designed using Object Oriented Programming where objects interacted with each other and managed their own state. I witnessed first hand the power of JavaScripts' Class constructors where I built custom objects that inherited properties from Pixi.js elements. This meant that all through development I was able to focus on the games features and functionalities rather than the logic necessary to manage and display content on the screen.",
        details: "Likuistix is a word association game built upon a pre-trained AI model available from the TensorFlow Hub. Players are presented a target word and are required to submit an associated word to score points before their time runs out.",
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
        intro: "The goal of this project was to write production ready code, focusing on readable/reusable components as well as keeping the codebase DRY. In addition, I integrated some new-to-me technologies like Recoil and ChakraUI that changed the way I approached the build process.",
        details: "Discourse (Reddit Clone) is a social forum website where users can create and join communities, as well as post and interact with other users' post. It uses Firebase for authentication and storing collections of comments, communities, posts, and users. It also utilizes Firebase's Firestore for storing images."
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
        intro: "As a Fullstack Web Developer, optimizing applications for all platforms is a serious concern. Therefore, I've increasingly interested in getting hands on with GraphQL since it allows for querying an API for exactly the data needed.",
        details: "Archived is a lightweight Blog Website that details some of my interest and experiences. Visitors are able to browse and interact with posts.",
    }
]
