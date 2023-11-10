import html from '../images/skills/html.png';
import css3 from '../images/skills/css3.png';
import js from '../images/skills/js.png';
import aws from '../images/skills/aws.png';
import bootstrap from '../images/skills/bootstrap.png';
import express from '../images/skills/express.png';
import git from '../images/skills/git.png';
import github from '../images/skills/github.png';
import java from '../images/skills/java.png';
import mongodb from '../images/skills/mongodb.png';
import mysql from '../images/skills/mysql.png';
import nodejs from '../images/skills/nodejs.png';
import postgreesql from '../images/skills/postgreesql.png';
import python from '../images/skills/python.png';
import react from '../images/skills/react.png';
import redux from '../images/skills/redux.png';
import tailwind from '../images/skills/tailwind.png';
import wordpress from '../images/skills/wordpress.png';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const skills = t('skills', { returnObjects: true });

  return (
    <div className="w-[100%]" id="skills">
      <div className="skillsContainer">
        <h1 className="text-3xl mb-16 font-bold text-center md:text-4xl">{skills.title}</h1>
        <div className="skillsGroup">
          <TechElement element={html} text={'html'} />
          <TechElement element={css3} text={'css3'} />
          <TechElement element={js} text={'js'} />
          <TechElement element={aws} text={'aws'} />
          <TechElement element={bootstrap} text={'bootstrap'} />
          <TechElement element={express} text={'express'} />
          <TechElement element={git} text={'git'} />
          <TechElement element={github} text={'github'} />
          <TechElement element={java} text={'java'} />
          <TechElement element={mongodb} text={'mongodb'} />
          <TechElement element={mysql} text={'mysql'} />
          <TechElement element={nodejs} text={'nodejs'} />
          <TechElement element={postgreesql} text={'postgreesql'} />
          <TechElement element={python} text={'python'} />
          <TechElement element={react} text={'react'} />
          <TechElement element={redux} text={'redux'} />
          <TechElement element={tailwind} text={'tailwind'} />
          <TechElement element={wordpress} text={'wordpress'} />
        </div>
      </div>
    </div>
  );
};

const TechElement = ({ element, text }) => {
  return (
    <div className="skill">
      <img src={element} alt="" />
      <h4>{text}</h4>
    </div>
  );
};

export default Skills;
