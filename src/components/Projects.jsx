import React from 'react'
import Section from './common/Section';

import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa';

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";

const Projects = () => {

  const project = [
    {
      id: 1,
      image: p1,
      title: "This portfolio!",
      github: "https://github.com/iagirr/portfolio",
      web: "http://localhost:3000/",
    },
    {
      id: 2,
      image: p2,
      title: "Ialar: tienda de ropa de hogar",
      github: "https://github.com/iagirr/portfolio",
      web: "En construcción",
    },
    {
      id: 3,
      image: p1,
      title: "Sharpening my Programming Skills",
      github: "https://github.com/iagirr/codewars",
      web: "https://www.codewars.com/users/iagosanchez93",
    },
  ];

  return (
    <Section
    title="Projects" subtitle="Here are the projects I have completed and am currently working on. 
    If you have any inquiries or would like to discuss a future project, 
    please don't hesitate to reach out to me."
    >
      <div className='grid gap-8 lg:gap-14'>
        {project.map(({ id, image, title, github, web }) => (
          <div key={id} className='max-w-lg flex shadow-lg
           shadow-yellow-600 rounded-2xl overflow-hidden'> 
            
            <img src={image} alt={title} className='w-2/3'></img>
            <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
              <h2>{title}</h2>
              <a className='text-lg cursor-pointer duration-150 hover:scale-110' href={github} target='_blank' rel='noopener noreferrer'><FaGithub /></a>
              <a className='text-lg cursor-pointer duration-150 hover:scale-110' href={web} target='_blank' rel='noopener noreferrer'><FaExternalLinkSquareAlt /></a>
            </div>
          </div>
        ))}
        
      </div>

    </Section>
  );
};

export default Projects;