export const experiences: Array<any> = [

    {
        type: 'work',
        description:'I am still waiting!',
        date: Date.now(),
        title: 'You May Be My Next!',
        subtitle: 'can be ASAP',
        images: [], 
        expanded: false, 
    },
    // Professional Experience
    {
        type: 'work',
        description:
            'Developed an innovative conversational trip recommendation web tool that personalizes travel and route planning. Implemented the backend server using Python Django, utilized A* algorithm for Points of Interest recommendations. Designed the frontend interface with Angular framework, integrated Google Dialogflow for natural language understanding.The conversational interface captured users’ verbal instructions with 85% accuracy rate. Performed weekly code reviews to ensure accurate and reliable user experience; conducted bi-weekly client meetings to provide progress updates and ensure alignment using Agile methodologies.',
        date: new Date(2021, 5, 1),  // Assuming June 2021
        title: 'iNAGO - Full Stack Developer',
        subtitle: 'Jun 2021 – Apr 2022',
        images: [], 
        expanded: false, 
    
    },
    { type: 'work',
        description:
            'Automated the manual airplane workshop process check by designing and developing a web application named ‘ePCS’; enhanced an internal process flow efficiency for 150 daily users. Developed C# ASP.NET backend, implemented and tested RESTful APIs. Utilized Angular for frontend, implementing distinct version control among website administrators, line managers, and general workers.',
        date: new Date(2020, 5, 1),  // Assuming June 2020
        title: 'Bombardier Inc - Full Stack Developer',
        subtitle: 'Jun 2020 – May 2021',
        images: [],
        expanded: false, 
    },
    { type: 'work',
        description:
            'Served as Full Stack Developer. Contributed to the development of a platform enabling users to report special war risks insurance for vessels. Utilized Vue.js to ensure user-centric design, reducing design iteration time by up to 30%. Contributed to the backend development using Java Spring, creating 20% of RESTful API endpoints with JWT authentication.',
        date: new Date(2019, 4, 1),  // Assuming May 2019
        title: 'COSCO Shipping Inc - Software Engineer Intern',
        subtitle: 'May 2019 – Sep 2019',
        images: [],
        expanded: false, 
    },
    { type: 'work',
        description:
            'Served as Front End Developer. Participated in the development of a mobile application for patients’ online booking system using the React.js framework. Created and documented the UI testing procedures using Jest framework to ensure consistent quality and reliability across all UI components.',
        date: new Date(2018, 5, 1),  // Assuming June 2018
        title: 'ParkwayHealth - Software Engineer Intern',
        subtitle: 'Jun 2018 – Sep 2018',
        expanded: false, 

        images: [],
    },

    // Education Experience
    { type: 'education',
        description:
            'Master of Applied Science in Mechanical and Industrial Engineering with a thesis focused on grid lattices and their applications in modeling and reasoning about temporal and spatial relationships. The thesis integrates concepts from Allen’s time interval algebra and rectangle algebra, with potential applications in computer science, robotics, and engineering.',
        date: new Date(2022, 9, 1),  // Assuming September 2022
        title: 'University of Toronto',
        subtitle: 'Sep 2022 – May 2024',
        images: [],
        expanded: false, 

    },
    {type: 'education',
        description:
            'Bachelor of Engineering in Industrial Engineering with a focus on information system and web development. Gained hands-on experience through internships and projects, contributing to a solid foundation in full-stack development.',
        date: new Date(2017, 8, 1),  // Assuming September 2015
        title: 'University of Toronto',
        subtitle: 'Sep 2017 – May 2022',
        images: [],
        expanded: false, 
    },
];
