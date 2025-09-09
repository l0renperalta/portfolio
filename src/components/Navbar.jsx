import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkmode';
import { FaMoon, FaSun } from 'react-icons/fa';

import 'flag-icon-css/css/flag-icons.min.css';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'es',
    name: 'Español',
    country_code: 'es',
  },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  const { t } = useTranslation();
  const navbar = t('navbar', { returnObjects: true });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-start mx-auto p-4 md:justify-center">
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {navbar.map((e, index) => (
              <li className="my-2 md:my-0" key={index}>
                <a
                  className="link block py-2 px-3 text-gray-900 rounded hover:bg-gray md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  href={`#${e.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {e}
                </a>
              </li>
            ))}
            <li className="my-2 md:my-0 flex gap-3 items-center py-2 px-3">
              {languages?.map((language) => (
                <span
                  className="dropdown"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    i18next.changeLanguage(language.code);
                    setIsMenuOpen(false);
                  }}
                  key={language.country_code}
                >
                  <span
                    className={`flag-icon flag-icon-${language.country_code}`}
                  ></span>
                </span>
              ))}
            </li>
            <li className="my-2 md:my-0 py-2 px-3">
              <ToggleTheme />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const ToggleTheme = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <span onClick={handleMode} style={{ cursor: 'pointer' }}>
      {darkTheme ? (
        <FaSun size="22" className="top-navigation-icon" />
      ) : (
        <FaMoon size="22" className="top-navigation-icon" />
      )}
    </span>
  );
};

export default NavBar;
