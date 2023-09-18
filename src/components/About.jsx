import React from 'react';

const About = () => {
  return (
    <div className="w-screen bg-primary text-white" id="about">
      <div className="w-[70%] mx-auto mb-80 h-[80%] flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-10 font-semibold text-center md:text-4xl">ABOUT ME</h1>
        <div>
          <p className="text-xl">
            Soy un estudiante en el último ciclo de mi carrera universitaria, apasionado por el desarrollo de software y autodidacta en constante búsqueda de
            conocimiento. Mi fascinación por la tecnología me ha llevado a explorar y aprender por mi cuenta, lo que me ha permitido adquirir habilidades sólidas como
            desarrollador.
          </p>
          <br />
          <p className="text-xl">
            Mi enfoque en el desarrollo de software va más allá de los límites académicos, y estoy comprometido a seguir creciendo y mejorando mis habilidades en esta
            emocionante disciplina. A través de mi portafolio, te invito a explorar mi viaje y proyectos, donde podrás ver mi dedicación y pasión por el mundo del
            desarrollo de software en acción.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
