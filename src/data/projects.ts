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
        title: "Discourse - Reddit Clone",
        bgImage: discourseScreenshot,
        projectURL: "/discourse",
        technologies: ["Next.js", "TypeScript", "Firebase", "CharkraUI", "Recoil"],
        screenshot: discourseBanner,
        liveSite: "https://discourse-forum.vercel.app/",
        github: "https://github.com/TAndrewLopez/discourse",
        intro: "The goal of this project was to write production ready code, focusing on readable/reusable components as well as keeping the codebase as DRY as possible. In addition, I integrating some new technologies that changed the way I approached the build process.",
        details: "Discourse (Reddit Clone) is a social forum website where users can create and join communities, as well as post and interact with other users' post. It uses Firebase for authentication and storing collections of comments, communities, posts, and users. It also utilizes Firebase's Firestore for storing images."
    },
    {
        id: 2,
        title: "Gen Records",
        bgImage: genRecordsScreenshot,
        projectURL: "/genRecords",
        technologies: ["Next.js", "Postgresql", "Sequelize", "Tailwindcss", "Redux", "Stripe"],
        screenshot: genRecordsBanner,
        liveSite: "https://gen-records.vercel.app/",
        github: "https://github.com/TAndrewLopez/gen_records_nextjs",
        intro: "",
        details: "",
    },
    {
        id: 3,
        title: "Linkuistix",
        bgImage: linkuistixScreenshot,
        projectURL: "/linkuistix",
        technologies: ["Tensorflow.js", "Pixi.js", "JavaScript", "React", "Firebase"],
        screenshot: linkuistixBanner,
        liveSite: "https://linkuistix.com/game",
        github: "https://github.com/DrTeethCapstone/Linkuistix",
        intro: "",
        details: "",
    },
    {
        id: 4,
        title: "Archived",
        bgImage: archivedScreenshot,
        projectURL: "/archived",
        technologies: ["Next.js", "TypeScript", "GraphQL", "Tailwindcss",],
        screenshot: archivedBanner,
        liveSite: "",
        github: "https://github.com/TAndrewLopez/BlogWebsite",
        intro: "",
        details: "",
    }
]