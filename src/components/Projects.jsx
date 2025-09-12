import ImageViewer from 'react-simple-image-viewer';
import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from './Container';

const Projects = () => {
  const { t } = useTranslation();
  const projects = t('projects', { returnObjects: true });
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const [projectImages, setProjectImages] = useState({});

  // Usar import.meta.glob para importaciones dinámicas
  useEffect(() => {
    const loadImages = async () => {
      const imagesMap = {};
      const images = import.meta.glob(
        '../images/projects/*.{png,jpg,jpeg,svg}'
      );

      for (const project of projects.data) {
        try {
          const imagePath = `../images/projects/${project.images[0]}`;
          if (images[imagePath]) {
            const imageModule = await images[imagePath]();
            imagesMap[project.id] = imageModule.default;
          } else {
            imagesMap[project.id] = '/placeholder-image.png';
          }
        } catch (err) {
          console.error(`Error loading image for project ${project.id}:`, err);
          imagesMap[project.id] = '/placeholder-image.png';
        }
      }

      setProjectImages(imagesMap);
    };

    loadImages();
  }, [projects.data]);

  return (
    <Container
      fullHeight
      centered
      title={projects.title}
      className="mb-24 md:mb-0"
    >
      <div
        id={projects.navbarId}
        className="scroll-mt-40 md:scroll-mt-52 grid grid-cols-1"
      >
        {projects.data.map((project) => (
          <div
            key={project.id}
            className="flex flex-col lg:flex-row gap-6 m-6 p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-darkTheme-900 dark:to-darkTheme-950 border border-gray-200 dark:border-darkTheme-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Contenido Principal */}
            <div className="flex-1">
              {/* Header */}
              <div className="mb-6">
                <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Logros Clave */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {projects.archivements}
                </h4>
                <div className="space-y-2">
                  {project.archivements.map((archivement, index) => (
                    <div className="flex items-start" key={index}>
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {archivement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tecnologías */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm mb-3">
                  {projects.technologies}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-darkTheme-700 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full shadow-sm hover:bg-blue-200 dark:hover:bg-darkTheme-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botón */}
              {/* <a href="https://github.com/l0renperalta/google-drive">
              <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center">
                <span>View Project</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </button>
            </a> */}
            </div>

            {/* Imagen */}
            {project.images.length > 0 && projectImages[project.id] && (
              <div
                className="lg:w-2/5 flex justify-center items-center cursor-pointer"
                onClick={() => openImageViewer(project.id)}
              >
                <div className="relative group max-w-full">
                  <img
                    src={projectImages[project.id]}
                    alt={project.title}
                    className="rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-darkTheme-700 object-contain max-h-96 w-auto"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={projectImages}
          currentIndex={currentImage}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </Container>
  );
};

export default Projects;
