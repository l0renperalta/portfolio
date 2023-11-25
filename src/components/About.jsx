import React from 'react';
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t } = useTranslation();
  const about = t('about', { returnObjects: true });

  return (
    <div className="w-[100%]" id="about">
      <div className="w-[85%] mx-auto pb-20 md:pb-48 flex flex-col items-center justify-center md:w-[50%]">
        <h1 className="text-3xl mb-16 font-bold text-center md:text-4xl">{about.title}</h1>
        <div>
          {about.paragraphs.map((p, index) => (
            <div key={index}>
              <p className="text-xl">{p}</p>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
