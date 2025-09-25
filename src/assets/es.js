export default {
  translation: {
    navbar: ['Acerca de', 'Habilidades', 'Proyectos', 'Contacto'],
    header: [
      'Bienvenido a mi portafolio',
      'Hola, soy Loren Peralta.',
      'Desarrollador de software especializado en frontend y backend.',
      'Descargar CV',
    ],
    about: {
      title: 'SOBRE MÍ',
      navnarId: 'acerca de',
      paragraphs: [
        'Soy egresado de la carrera de Ingeneria de Sistemas y Computacion con 1 año y medio de experiencia, apasionado por el desarrollo de software y autodidacta en constante búsqueda de conocimiento. Mi fascinación por la tecnología me ha llevado a explorar y aprender por mi cuenta, lo que me ha permitido adquirir habilidades sólidas como desarrollador.',
        'Mi enfoque en el desarrollo de software va más allá de los límites académicos, y estoy comprometido a seguir creciendo y mejorando mis habilidades en esta emocionante disciplina. A través de mi portafolio, te invito a explorar mi viaje y proyectos, donde podrás ver mi dedicación y pasión por el mundo del desarrollo de software en acción.',
      ],
    },
    skills: {
      title: 'HABILIDADES TÉCNICAS',
      navbarId: 'habilidades',
    },
    projects: {
      title: 'PROJECTS',
      navbarId: 'proyectos',
      archivements: 'Logros clave:',
      technologies: 'Tecnologías usadas:',
      data: [
        {
          id: 1,
          title: 'Sistema Automatizado de Emisión de Constancias',
          description:
            'Lideré el desarrollo e implementación de un módulo integral para el Instituto Continental que automatizó completamente el proceso de emisión de constancias y certificados, reduciendo el tiempo de generación de documentos en un 70%.',
          archivements: [
            'Diseño y optimización de 15+ procedimientos almacenados y funciones en SQL Server, mejorando el rendimiento en un 40%',
            'Implementación de un motor de plantillas dinámicas para la generación masiva de documentos personalizados',
            'Reducción del proceso manual de 2 horas a 5 minutos por constancia',
            'Integración perfecta con sistemas legacy',
          ],
          technologies: ['.NET', 'Angular', 'SQL Server'],
          images: ['IC.png'],
          link: '',
        },
        {
          id: 2,
          title: 'Sistema de Gestión de Órdenes de Trabajo - Americatel',
          description:
            'Desarrollé e implementé el módulo completo de edición de Órdenes Internas de Trabajo para el sistema core de Americatel, asegurando compatibilidad total con los módulos existentes y estándares de la empresa.',
          archivements: [
            'Análisis reverse engineering de 50k+ líneas de código legacy para integración perfecta',
            'Implementación de validaciones business-critical que eliminaron el 95% de los errores de datos',
            'Desarrollo de endpoints REST para integración con módulos financieros y de logística',
            'Capacitación a usuarios finales y documentación técnica completa',
          ],
          technologies: ['Python', 'Django', 'PostgreSQL', 'jQuery'],
          images: ['saf 1.png'],
          link: '',
        },
        {
          id: 3,
          title: 'Plataforma de Web Scraping y Análisis de Datos',
          description:
            'Contribui con el desarrollo desde cero de una plataforma escalable de extracción y procesamiento de datos que procesa 100+ registros diarios mediante técnicas avanzadas de scraping y procesamiento distribuido.',
          archivements: [
            'Arquitectura serverless en AWS con Lambda y S3',
            'Implementación de sistema distribuido que procesa 5k+ requests/minuto con Python multihilo',
            'Desarrollo de dashboard en tiempo real con Next.js',
            'Sistema de colas y retry automático que mejora la tasa de éxito del scraping al 99.5%',
          ],
          technologies: ['Python', 'Next.js', 'AWS', 'Selenium'],
          images: ['scrapping.png'],
          link: '',
        },
        {
          id: 4,
          title: 'Clone de Uber con Biometría Facial',
          description:
            'Desarrollé una aplicación móvil tipo Uber como proyecto final universitario, con un enfoque innovador en seguridad mediante la integración de reconocimiento facial para verificar la identidad de conductores y pasajeros.',
          archivements: [
            'Implementación de AWS Rekognition para un sistema de verificación biométrica seguro y confiable.',
            'Arquitectura backend escalable con Express.js y base de datos MySQL, desplegada en AWS para alta disponibilidad.',
            'Desarrollo de una aplicación móvil nativa con React Native, garantizando una experiencia de usuario fluida en iOS y Android.',
            'Integración completa de todos los servicios (frontend, backend, base de datos y IA) en una infraestructura en la nube.',
          ],
          technologies: ['React Native', 'Express.js', 'MySQL', 'AWS'],
          images: [
            'project2-1.jpeg',
            'project2-2.jpeg',
            'project2-3.jpeg',
            'project2-4.jpeg',
            'project2-5.jpeg',
            'project2-6.jpeg',
          ],
          link: 'https://github.com/l0renperalta/casa-andina',
        },
        {
          id: 5,
          title: 'Google Drive Local Clone',
          description:
            'Desarrollé un clon local de Google Drive como proyecto personal para aprender React, Express y Bootstrap. La aplicación permite gestionar archivos y carpetas con funcionalidades completas de creación, subida y eliminación.',
          archivements: [
            'Implementación completa de un sistema de gestión de archivos con interfaz tipo Google Drive',
            'Desarrollo de operaciones CRUD para archivos y carpetas con persistencia local',
            'Creación de una interfaz responsive y moderna utilizando Bootstrap',
            'Integración exitosa entre frontend React y backend Express',
          ],
          technologies: ['React', 'Express.js', 'Bootstrap', 'Node.js'],
          images: ['googleDrive.png'],
          link: 'https://github.com/l0renperalta/google-drive',
        },
      ],
      titles: [
        'Local Google Drive',
        'Uber clone',
        'multi-language site',
        'Ver Codigo',
      ],
    },
    contact: {
      title: 'CONTÁCTAME',
      navbarId: 'contacto',
      form: [
        'Nombre',
        'Dirección de correo electrónico',
        'Mensaje',
        'Enviar',
        'Whatsapp',
      ],
      messageFields: 'Complete los campos',
      mailSent: '¡Correo electrónico enviado correctamente!',
    },
  },
};
