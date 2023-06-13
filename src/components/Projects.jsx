import React from 'react'
import portf from '../capturas/portf.png'
import bedr from '../capturas/bd.png'

const Projects = () => {

  return (
    <section>

    <h1 className='text-5xl font-bold text-yellow-600 text-center pt-40 pb-20'>
      PROJECTS
    </h1>

    <div className="h-screen flex pt-8">
      <a href="http://localhost:3000/" rel='noreferrer' target="_blank" 
      className="bg-blue-900 h-3/4 w-3/4 flex items-center hover:scale-105 transition-transform duration-300">
        <div className="m-auto">
          <img src={portf} alt="imagen" className="w-4/5 ml-4"/>
        </div>
      </a>
      
      <div className="w-1/4 flex items-center">
        <div className="m-auto">
          <h3 className="relative -mt-40 -ml-40 text-yellow-600 text-3xl font-bold">
            Iago Sánchez || My portfolio
          </h3>
          <br></br>
          <p className="relative -ml-40 text-white text-xl">
            My portfolio app is a showcase of my skills, experiences, and projects. 
            It features a modern and user-friendly interface that allows visitors to 
            explore my work and learn more about me.
          </p>
          <br></br>
          <a href="http://localhost:3000/" target="_blank" rel='noreferrer' className="relative -ml-40 text-white text-xl">
            View the app
          </a>
        </div>
      </div>
    </div>

    <div className="h-screen flex pt-8">
      <div className="w-1/4 flex items-center">
        <div className="m-auto ml-10 -mr-80">
          <h3 className="absolute -mt-10 text-yellow-600 text-3xl font-bold">
            CURRENTLY || IALAR
          </h3>
          <br/>
          <p className="relative -ml-70 text-white text-xl max-w-ful z-10">
          I'm working on a project for a website focused on curtains and home textiles.
          The website aims to provide a wide range of curtains and home decor items
           for customers to choose from.
          </p>
          <br/>
          <a href="http://localhost:3000/" target="_blank" rel='noreferrer' className="relative mt-40 text-blue-600 text-xl max-w-full">
            View the app
          </a>
        </div>
      </div>
      
      <a href="http://localhost:3000/" rel='noreferrer' target="_blank" 
      className="bg-blue-900 h-3/4 w-3/4 flex items-center hover:scale-105 transition-transform duration-300">
        <div className="m-auto">
          <img src={bedr} alt="imagen" className="w-2/3 ml-auto -mr-2"/>
        </div>
      </a>
    </div>


    </section>
  );
};

export default Projects;