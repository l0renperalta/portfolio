import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="h-screen">
      <div className="bg-primary ">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
