import html from '../images/html.png';
import css3 from '../images/css3.png';
import js from '../images/js.png';
import react from '../images/react.png';
import mysql from '../images/mysql.png';
import mongodb from '../images/mongodb.png';
import aws from '../images/aws.png';
import nodejs from '../images/nodejs.png';
import express from '../images/express.png';
import git from '../images/git.png';
import bootstrap from '../images/bootstrap.png';
import redux from '../images/redux.png';
import tailwind from '../images/tailwind.png';
import java from '../images/java.png';
import github from '../images/github.png';

const Skills = () => {
  return (
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
  );
};

const TechElement = ({ element, text }) => {
  return (
    <div className="flex flex-col items-center bg-zinc-800 m-4 p-4 rounded-[15px] hover:bg-zinc-700">
      <img src={element} alt="" className="w-[45px] h-[45px]" />
      <p>{text}</p>
    </div>
  );
};

export default Skills;
