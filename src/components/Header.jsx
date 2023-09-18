import headerImage from '../images/header.png';

const Header = () => {
  return (
    <header className="w-screen font-poppins text-white bg-primary">
      <div className="w-[70%] h-[90vh] mx-auto grid sm:grid-cols-1 md:grid-cols-2 text-center content-center">
        <div className="flex flex-col items-center justify-center">
          <p className="mt-5 font-normal">Welcome to my portfolio</p>
          <h1 className="my-5 font-bold text-3xl md:text-5xl">Hi, I'm Loren Peralta.</h1>
          <h3 className=" font-light">Software developer specializated in frontend and backend.</h3>
        </div>
        <div>
          <img src={headerImage} alt="" className="w-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
