import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';

import headerImage from './images/header.png';
import html from './images/html.png';
import css3 from './images/css3.png';
import js from './images/js.png';
import react from './images/react.png';
import mysql from './images/mysql.png';
import mongodb from './images/mongodb.png';
import aws from './images/aws.png';
import nodejs from './images/nodejs.png';
import express from './images/express.png';
import git from './images/git.png';
import bootstrap from './images/bootstrap.png';
import redux from './images/redux.png';
import tailwind from './images/tailwind.png';
import java from './images/java.png';
import github from './images/github.png';

import project1 from './images/projects/project1.png';
import project2 from './images/projects/Screenshot 2023-09-04 191813.png';
import project3 from './images/projects/project3.png';
import conact from './images/contact1.png';

function App() {
  return (
    <div className="h-screen">
      <div className="bg-primary ">
        <Navbar />
        <header className="w-screen font-poppins text-white bg-primary">
          <div className="w-[70%] h-[90vh] mx-auto grid sm:grid-cols-1 md:grid-cols-2 text-center content-center">
            <div className="flex flex-col items-center justify-center">
              <p className="mt-5 font-normal">Welcome to my portfolio</p>
              <h1 className="my-5 font-bold text-3xl md:text-5xl">Hi, I'm Loren Peralta.</h1>
              <h3 className=" font-light">Software developer specializated in frontend and backend.</h3>
            </div>
            <div>
              <img src={headerImage} alt="" className="w-auto" />
            </div>
          </div>
        </header>

        <div className="w-screen bg-primary text-white" id="about">
          <div className="w-[70%] mx-auto mb-80 h-[80%] flex flex-col items-center justify-center">
            <h1 className="text-3xl mb-10 font-semibold text-center md:text-4xl">ABOUT ME</h1>
            <div>
              <p className="text-xl">
                Soy un estudiante en el último ciclo de mi carrera universitaria, apasionado por el desarrollo de software y autodidacta en constante búsqueda de
                conocimiento. Mi fascinación por la tecnología me ha llevado a explorar y aprender por mi cuenta, lo que me ha permitido adquirir habilidades sólidas como
                desarrollador.
              </p>
              <br />
              <p className="text-xl">
                Mi enfoque en el desarrollo de software va más allá de los límites académicos, y estoy comprometido a seguir creciendo y mejorando mis habilidades en esta
                emocionante disciplina. A través de mi portafolio, te invito a explorar mi viaje y proyectos, donde podrás ver mi dedicación y pasión por el mundo del
                desarrollo de software en acción.
              </p>
            </div>
          </div>
        </div>

        <div className="w-screen bg-primary text-white" id="skills">
          <div className="w-[70%] mx-auto my-24 h-[80%] flex flex-col items-center justify-center">
            <h1 className="text-3xl mb-10 font-semibold text-center md:text-4xl">SKILLS</h1>
            <div className="grid grid-cols-2 md:grid-cols-5">
              <TechElement element={html} text={'html'} />
              <TechElement element={css3} text={'css3'} />
              <TechElement element={js} text={'js'} />
              <TechElement element={react} text={'react'} />
              <TechElement element={redux} text={'redux'} />
              <TechElement element={bootstrap} text={'bootstrap'} />
              <TechElement element={tailwind} text={'tailwind'} />
              <TechElement element={nodejs} text={'nodejs'} />
              <TechElement element={express} text={'express'} />
              <TechElement element={mysql} text={'mysql'} />
              <TechElement element={mongodb} text={'mongodb'} />
              <TechElement element={aws} text={'aws'} />
              <TechElement element={java} text={'java'} />
              <TechElement element={git} text={'git'} />
              <TechElement element={github} text={'github'} />
            </div>
          </div>
        </div>

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

        <div className="w-screen bg-primary text-white" id="contact">
          <div className="w-[70%] mx-auto mb-80 h-[80%] flex flex-col items-center justify-center">
            <h1 className="text-3xl mb-10 font-semibold text-center md:text-4xl">CONTACT ME</h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <img src={conact} alt="" className="w-auto" />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p>Name</p>
                  <input type="text" className="w-4/5 h-10" />
                </div>
                <div>
                  <p>Email</p>
                  <input type="email" className="w-4/5 h-10" />
                </div>
                <div>
                  <p>Message</p>
                  <textarea name="" id="" cols="70" rows="12" className="resize-none"></textarea>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">Submit</button>
                  </div>
                  <p>or</p>
                  <div>
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ">Whatsapp</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TechElement = ({ element, text }) => {
  return (
    <div className="flex flex-col items-center bg-zinc-800 m-4 p-4 rounded-[15px] hover:bg-zinc-700">
      <img src={element} alt="" className="w-[45px] h-[45px]" />
      <p>{text}</p>
    </div>
  );
};

export default App;
