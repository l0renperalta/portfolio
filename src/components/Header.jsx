import headerImage from '../images/header.png';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const header = t('header', { returnObjects: true });

  return (
    <header className="w-[100%]">
      <div className="w-[70%] h-screen pb-24 mx-auto grid sm:grid-cols-1 md:grid-cols-2 text-center content-center">
        <div className="flex flex-col items-center justify-center">
          <p className="mt-5 font-normal md:text-xl">{header[0]}</p>
          <h1 className="my-5 font-bold text-3xl md:text-5xl">{header[1]}</h1>
          <h3 className="font-normal md:text-xl">{header[2]}</h3>
        </div>
        <div>
          <img src={headerImage} alt="" className="w-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
