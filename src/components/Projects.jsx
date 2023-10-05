import project1 from '../images/projects/project1.png';
import project2 from '../images/projects/Screenshot 2023-09-04 191813.png';
import project3 from '../images/projects/project3.png';
import ImageViewer from 'react-simple-image-viewer';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const projects = t('projects', { returnObjects: true });

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [project1, project2, project3];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="w-[100%]" id="projects">
      {isViewerOpen && <ImageViewer src={images} currentIndex={currentImage} disableScroll={true} closeOnClickOutside={true} onClose={closeImageViewer} />}
      <div className="w-[95%] md:w-[70%] mx-auto pb-20 md:pb-48 flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-16 font-bold text-center md:text-4xl">{projects.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="m-6 p-6 rounded-xl bg-zinc-200 dark:bg-zinc-800 dark:text-white">
            <h3 className="font-bold text-lg">{projects.titles[0]}</h3>
            <img src={project1} alt="" className="w-auto my-4" onClick={() => openImageViewer(0)} />
            <ul className="m-3">
              <li>React </li>
              <li>Express </li>
              <li>Bootstrap</li>
            </ul>
            <a href="https://github.com/l0renperalta/google-drive">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{projects.titles[3]}</button>
            </a>
          </div>
          <div className="m-6 p-6 rounded-xl bg-zinc-200 dark:bg-zinc-800 dark:text-white">
            <h3 className="font-bold text-lg">{projects.titles[1]}</h3>
            <img src={project2} alt="" className="w-auto my-4" onClick={() => openImageViewer(1)} />
            <ul className="m-3">
              <li>React </li>
              <li>Express </li>
              <li>Bootstrap</li>
            </ul>
            <a href="https://github.com/l0renperalta/casa-andina">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{projects.titles[3]}</button>
            </a>
          </div>
          <div className="m-6 p-6 rounded-xl bg-zinc-200 dark:bg-zinc-800 dark:text-white">
            <h3 className="font-bold text-lg">{projects.titles[2]}</h3>
            <img src={project3} alt="" className="w-auto my-4" onClick={() => openImageViewer(2)} />
            <ul className="m-3">
              <li>React </li>
              <li>Express </li>
              <li>Bootstrap</li>
            </ul>
            <a href="https://github.com/l0renperalta/casa-andina">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{projects.titles[3]}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
