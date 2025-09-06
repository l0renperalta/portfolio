import { useTranslation } from 'react-i18next';
import Container from './Container';
import { SKILLS_DATA } from '../data/skillsData';

const Skills = () => {
  const { t } = useTranslation();
  const skills = t('skills', { returnObjects: true });

  return (
    <Container fullHeight centered title={skills.title} className="mb-24">
      <div
        id={skills.navbarId}
        className="scroll-mt-40 md:scroll-mt-52 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4"
      >
        {SKILLS_DATA.map((skill) => (
          <TechElement
            key={skill.id}
            element={skill.image}
            text={skill.name}
            altText={skill.altText}
          />
        ))}
      </div>
    </Container>
  );
};

const TechElement = ({ element, text, altText = '' }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg ease-[ease] bg-gradient-to-t from-blue-50 to-indigo-50 dark:from-darkTheme-900 dark:to-darkTheme-950 border border-gray-200 dark:border-darkTheme-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <img
        src={element}
        alt={altText || `${text} skill`}
        className="w-16 h-16 object-contain mb-2"
      />
      <h4 className="text-sm font-medium capitalize">{text}</h4>
    </div>
  );
};

export default Skills;
