import html from '../images/skills/html.png';
import css3 from '../images/skills/css3.png';
import js from '../images/skills/js.png';
import react from '../images/skills/react.png';
import mysql from '../images/skills/mysql.png';
import mongodb from '../images/skills/mongodb.png';
import aws from '../images/skills/aws.png';
import nodejs from '../images/skills/nodejs.png';
import express from '../images/skills/express.png';
import git from '../images/skills/git.png';
import bootstrap from '../images/skills/bootstrap.png';
import redux from '../images/skills/redux.png';
import tailwind from '../images/skills/tailwind.png';
import java from '../images/skills/java.png';
import github from '../images/skills/github.png';

const Skills = () => {
  return (
    <div className="w-[100%] bg-white dark:bg-primary dark:text-white" id="skills">
      <div className="w-[70%] mx-auto pb-20 md:pb-48 flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-16 font-bold text-center md:text-4xl">SKILLS</h1>
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
  );
};

const TechElement = ({ element, text }) => {
  return (
    <div className="flex flex-col items-center m-4 p-4 rounded-[15px] bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">
      <img src={element} alt="" className="w-10 h-10" />
      <p>{text}</p>
    </div>
  );
};

export default Skills;
