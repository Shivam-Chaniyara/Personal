import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Lorem ipsum dolor',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laborum reprehenderit assumenda distinctio accusantium praesentium omnis, ut iure dignissimos odit consequatur fugit in inventore delectus blanditiis! Inventore illum cumque nesciunt ipsa rem sed, iusto possimus.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laborum reprehenderit assumenda distinctio accusantium praesentium omnis, ut iure dignissimos odit consequatur fugit in inventore delectus blanditiis! Inventore illum cumque nesciunt ipsa rem sed, iusto possimus.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laborum reprehenderit assumenda distinctio accusantium praesentium omnis, ut iure dignissimos odit consequatur fugit in inventore delectus blanditiis! Inventore illum cumque nesciunt ipsa rem sed, iusto possimus.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Lorem ipsum dolor',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laborum reprehenderit assumenda distinctio accusantium praesentium omnis, ut iure dignissimos odit consequatur fugit in inventore delectus blanditiis! Inventore illum cumque nesciunt ipsa rem sed, iusto possimus.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },