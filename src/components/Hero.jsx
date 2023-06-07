import React from 'react'
import {FaLinkedin, FaGithub, FaFreeCodeCamp, FaArrowDown} from 'react-icons/fa';
import avatar from '../assets/original.jpg'
import { icons } from 'react-icons';

const Hero = () => {

    const SOCIAL = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/iago-s%C3%A1nchez-v%C3%A1zquez-34322310a/",
            icon: <FaLinkedin />,
        },
        {
            id: 2,
            link: "https://github.com/iagirr",
            icon: <FaGithub />,
        },
        {
            id: 3,
            link: "https://freecodecamp.com",
            icon: <FaFreeCodeCamp />,
        },
    ];

    window.addEventListener('scroll', function () {
        const downArrow = document.querySelector(".down-arrow");
        
        if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");
    });


    return (
    <section className='min-h-screen flex flex-col justify-start items-center p-4 text-center'>
        
        <h2 className='text-5xl text-yellow-600 font-md uppercase font-bold'>Iago Sánchez</h2>
        
        <h3 className='py-3 text-2xl'>Web Developer</h3>
        
        <p className='max-w-xl font-light text-yellow-600 py-1'>Hi world! I am a software developer and computer and network technician.
        I love working in web development, which is my current occupation</p>  
        
        <div className='flex justify-evenly py-4 lg:py-26 text-3xl w-full md:w-1/3'>
            {SOCIAL.map(({ id, link, icon }) => (
                <a href={link} key={id} target='_blank' rel='noopener noreferrer' className='cursor-pointer duration-300 hover:text-yellow-600'>
                    {icon}
                </a>
            ))}
        </div>
                
        <div>
            <img src={avatar} alt='avatar' className='w-50 h-60 md:w-64 md:h-72 rounded-xl'/>
            <a href='../../public/iago_cv.pdf' download={true} className='flex items-center justify-center mt-10 bg-gradient-to-r from-yellow-600 to-gray-600 py-2 rounded-xl'>
            Watch my CV
            </a>
        </div>
        <div className='mt-10 down-arrow'>
            <FaArrowDown className='text-yellow-600 text-2xl animate-bounce' />
        </div>

    </section>
    );
};

export default Hero;