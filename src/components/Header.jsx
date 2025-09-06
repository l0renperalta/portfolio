import headerImage from '../images/header.png';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Navnar from './Navbar';

const Header = () => {
  const { t } = useTranslation();
  const header = t('header', { returnObjects: true });

  return (
    <>
      <Navnar />
      <div className="w-[70%] h-screen pb-24 mx-auto grid sm:grid-cols-1 md:grid-cols-2 text-center content-center">
        <div className="flex flex-col items-center justify-center">
          <p className="mt-5 font-normal md:text-xl">{header[0]}</p>
          <h1 className="my-5 font-bold text-3xl md:text-5xl">{header[1]}</h1>
          <h3 className="font-normal md:text-xl">{header[2]}</h3>
          <div className="flex my-4 gap-4 items-center">
            <a
              href="https://github.com/l0renperalta"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} className="my-3" />
            </a>
            <a
              href="https://leetcode.com/stinkoala/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode size={30} className="my-3" />
            </a>
            <a
              href="https://drive.google.com/file/d/1t4T3jlIXIzfQpV-B0m9Cp1FpwcL-hh8v/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-lighTheme-400 hover:bg-lighTheme-500 dark:bg-darkTheme-700 dark:hover:bg-darkTheme-600 text-white font-bold py-2 px-4 rounded">
                {header[3]}
              </button>
            </a>
          </div>
        </div>
        <div>
          <img src={headerImage} alt="" className="w-auto" />
        </div>
      </div>
    </>
  );
};

export default Header;
