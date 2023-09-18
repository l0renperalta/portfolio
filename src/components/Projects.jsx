import project1 from '../images/projects/project1.png';
import project2 from '../images/projects/Screenshot 2023-09-04 191813.png';
import project3 from '../images/projects/project3.png';

const Projects = () => {
  return (
    <div className="w-screen bg-primary text-white" id="projects">
      <div className="w-[70%] mx-auto my-24 h-[80%] flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-10 font-semibold text-center md:text-4xl">PROJECTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="m-6 p-6 bg-zinc-800 rounded-xl">
            <h3 className="font-bold text-lg">Local Google Drive</h3>
            <img src={project1} alt="" className="w-auto my-4" />
            <ul className="m-3">
              <li>React </li>
              <li>Express </li>
              <li>Bootstrap</li>
            </ul>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Code</button>
          </div>
          <div className="m-6 p-6 bg-zinc-800 rounded-xl">
            <h3 className="font-bold text-lg">Local Google Drive</h3>
            <img src={project2} alt="" className="w-auto my-4" />
            <ul className="m-3">
              <li>React </li>
              <li>Express </li>
              <li>Bootstrap</li>
            </ul>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Code</button>
          </div>
          <div className="m-6 p-6 bg-zinc-800 rounded-xl">
            <h3 className="font-bold text-lg">Local Google Drive</h3>
            <img src={project3} alt="" className="w-auto my-4" />
            <ul className="m-3">
              <li>React </li>
              <li>Express </li>
              <li>Bootstrap</li>
            </ul>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
