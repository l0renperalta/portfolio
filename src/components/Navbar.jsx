import React from 'react';
import useDarkMode from '../hooks/useDarkmode';

const NavBar = () => {
  return (
    <nav className="w-screen h-20 flex justify-center items-center font-poppins bg-white dark:bg-primary shadow-lg">
      <ul className="flex">
        <li className="my-0 mx-5">
          <a className="link" href="#">
            Home
          </a>
        </li>
        <li className="my-0 mx-5">
          <a className="link" href="#about">
            About
          </a>
        </li>
        <li className="my-0 mx-5">
          <a className="link" href="#skills">
            Skills
          </a>
        </li>
        <li className="my-0 mx-5">
          <a className="link" href="#projects">
            Projects
          </a>
        </li>
        <li className="my-0 mx-5">
          <a className="link" href="#contact">
            Contact
          </a>
        </li>
        <ToggleTheme />
      </ul>
    </nav>
  );
};

const NavBarElement = ({ text }) => {
  return (
    <li className="my-0 mx-5">
      <a className="link">{text}</a>
    </li>
  );
};

const ToggleTheme = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <li className="navElement">
          <a className="link">Light</a>
        </li>
      ) : (
        <li className="navElement">
          <a className="link">Dark</a>
        </li>
      )}
    </span>
  );
};

export default NavBar;
