import React from 'react'
import Section from './common/Section';

import commerce from "../assets/commerce.png"
import research from "../assets/research.png"
import web from "../assets/web.png"
import mobile from "../assets/mobile.png"


const Services = () => {


  const skills = [
    {
      id: 1,
      image: web,
      title: "Web Development",
    },
    {
      id: 2,
      image: research,
      title: "Research and Development",
    },
    {
      id: 3,
      image: web,
      title: "Linux and bash Administration",
  },
  {
    id:4,
    image:  research,
    title: "Accredited advanced level of english proficiency",
},
];


  return <Section title='Services' subtitle="Below, you will find a carefully curated selection of my programming skills, demonstrating the value I can bring to any project or team.">
    <div className='grid gap-10 lg:grid-cols-2'>
      {skills.map(({id, image, title}) =>(

          <div key={id} className='flex flex-col items-center justify-center 
          p-5 shadow-lg dark:shadow-yellow-600 rounded-xl duration-300 
          ease-in-out hover:scale-110'>
            <img src={image} alt={title} className='w-36 h-36 md:w-44 md:h-44 
            '/>
            <h3 className='mt-5 text-base'>{title}</h3>
          </div>
        ))}
    </div>
  </Section>
};

export default Services;