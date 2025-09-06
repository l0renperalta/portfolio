export default {
  translation: {
    navbar: ['About', 'Skills', 'Projects', 'Contact'],
    header: [
      'Welcome to my portfolio',
      "Hi, I'm Loren Peralta.",
      'Software developer specialized in frontend and backend.',
      'Download CV',
    ],
    about: {
      title: 'ABOUT ME',
      navbarId: 'about',
      paragraphs: [
        'I am a Systems and Computer Engineering graduate with 1.5 years of experience, passionate about software development and a self-taught individual in constant pursuit of knowledge. My fascination with technology has driven me to independently explore and learn, allowing me to acquire solid skills as a developer.',
        'My approach to software development extends beyond academic boundaries, and I am committed to continuously growing and improving my skills in this exciting discipline. Through my portfolio, I invite you to explore my journey and projects, where you can witness my dedication and passion for the world of software development in action.',
      ],
    },
    skills: {
      title: 'TECHNICAL SKILLS',
      navbarId: 'skills',
    },
    projects: {
      title: 'PROJECTS',
      navbarId: 'projects',
      archivements: 'Key archievements:',
      technologies: 'Technologies Used:',
      data: [
        {
          id: 1,
          title: 'Automated Certificate Issuance System',
          description:
            'Led the development and implementation of a comprehensive module for Instituto Continental that fully automated the process of issuing certificates and diplomas, reducing document generation time by 70%.',
          archivements: [
            'Design and optimization of 15+ stored procedures and functions in SQL Server, improving performance by 40%',
            'Implementation of a dynamic template engine for mass generation of customized documents',
            'Reduction of manual process from 2 hours to 5 minutes per certificate',
            'Seamless integration with legacy systems',
          ],
          technologies: ['.NET', 'Angular', 'SQL Server'],
          image: '',
          link: '',
        },
        {
          id: 2,
          title: 'Work Order Management System - Americatel',
          description:
            "Developed and implemented the complete editing module for Internal Work Orders for Americatel's core system, ensuring full compatibility with existing modules and company standards.",
          archivements: [
            'Reverse engineering analysis of 50k+ lines of legacy code for seamless integration',
            'Implementation of business-critical validations that eliminated 95% of data errors',
            'Development of REST endpoints for integration with financial and logistics modules',
            'Training for end users and complete technical documentation',
          ],
          technologies: ['Python', 'Django', 'PostgreSQL', 'jQuery'],
          image: '',
          link: '',
        },
        {
          id: 3,
          title: 'Web Scraping and Data Analysis Platform',
          description:
            'Contributed to the development from scratch of a scalable data extraction and processing platform that processes 100+ daily records using advanced scraping and distributed processing techniques.',
          archivements: [
            'Serverless AWS architecture with Lambda and S3',
            'Implementation of distributed system that processes 5k+ requests/minute with Python multithreading',
            'Development of real-time dashboard with Next.js',
            'Queue system and automatic retry that improves scraping success rate to 99.5%',
          ],
          technologies: ['Python', 'Next.js', 'AWS', 'Selenium'],
          image: '',
          link: '',
        },
        {
          id: 4,
          title: 'Uber Clone with Facial Biometrics',
          description:
            'Developed a Uber-like mobile application as a final university project, with an innovative focus on security through facial recognition integration to verify the identity of drivers and passengers.',
          archivements: [
            'Implementation of AWS Rekognition for a secure and reliable biometric verification system.',
            'Scalable backend architecture with Express.js and MySQL database, deployed on AWS for high availability.',
            'Development of a native mobile application with React Native, ensuring a smooth user experience on iOS and Android.',
            'Complete integration of all services (frontend, backend, database and AI) in a cloud infrastructure.',
          ],
          technologies: ['React Native', 'Express.js', 'MySQL', 'AWS'],
          image: '',
          link: '',
        },
        {
          id: 5,
          title: 'Local Google Drive Clone',
          description:
            'Developed a local Google Drive clone as a personal project to learn React, Express and Bootstrap. The application allows file and folder management with complete creation, upload and deletion functionalities.',
          archivements: [
            'Complete implementation of a file management system with Google Drive-like interface',
            'Development of CRUD operations for files and folders with local persistence',
            'Creation of a responsive and modern interface using Bootstrap',
            'Successful integration between React frontend and Express backend',
          ],
          technologies: ['React', 'Express.js', 'Bootstrap', 'Node.js'],
          image: '',
          link: '',
        },
      ],
      titles: [
        'Local Google Drive',
        'Uber clone',
        'multi-language site',
        'View Code',
      ],
    },
    contact: {
      title: 'CONTACT ME',
      navbarId: 'contact',
      form: ['Name', 'Email address', 'Message', 'Submit', 'Whatsapp'],
      messageFields: 'Fill in the fields',
      mailSent: 'Email send successfully!',
    },
  },
};
