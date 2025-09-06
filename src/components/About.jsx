import { useTranslation } from 'react-i18next';
import Container from './Container';
const About = () => {
  const { t } = useTranslation();
  const about = t('about', { returnObjects: true });

  return (
    <Container fullHeight centered title={about.title}>
      <div
        id={about.navbarId}
        className="max-w-4xl scroll-mt-44 md:scroll-mt-80"
      >
        {about.paragraphs.map((p, index) => (
          <div key={index}>
            <p className="text-xl">{p}</p>
            <br />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default About;
