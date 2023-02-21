import discourseLogo from 'public/assets/projects/discourseLogo.png'
import discourseScreenshot from 'public/assets/projects/screenshots/discourseScreenshot.png'
import genRecordsLogo from 'public/assets/projects/genRecordsLogo.png'
import linkuistixLogo from 'public/assets/projects/linkuistixLogo.png'

export const PROJECT_DATA = [
    {
        title: 'Discourse - Reddit Clone',
        bgImage: discourseLogo,
        projectURL: '/discourse',
        technologies: ['Next.js', 'TypeScript', 'Firebase', 'CharkraUI', 'Recoil'],
        screenshot: discourseScreenshot,
        excerpt: ''
    },
    {
        title: 'Gen Records',
        bgImage: genRecordsLogo,
        projectURL: '/genRecords',
        technologies: ['Next.js', 'Postgresql', 'Sequelize', 'Tailwindcss', 'Redux', 'Stripe'],
        screenshot: discourseScreenshot,
        excerpt: ''


    },
    {
        title: 'Linkuistix',
        bgImage: linkuistixLogo,
        projectURL: '/linkuistix',
        technologies: ['Tensorflow.js', 'JavaScript', 'Pixi.js', 'React', 'Firebase'],
        screenshot: discourseScreenshot,
        excerpt: ''

    }
]