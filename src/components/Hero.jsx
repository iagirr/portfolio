import React from 'react';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import avatar from '../assets/original.jpg';


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
    ];

    const BOX = [
        {
            id: 1,
            icon: '../skills/html.png',
            name: "HTML",
        },
        {
            id: 2,
            icon: '../skills/css.png',
            name: "CSS",
        },
        {
            id: 4,
            icon: "../skills/js.png",
            name: "Javascript",
        },
        {
            id: 3,
            icon: '../skills/tw2.png',
            name: "Tailwind CSS",
        },
        {
            id: 5,
            icon: "../skills/react.png",
            name: "React",
        },
        {
            id: 6,
            icon: "../skills/node.png",
            name: "Node.js",
        },
        {
            id: 7,
            icon: "../skills/git.png",
            name: "Git",
        },
        {
            id: 8,
            icon: "../skills/sql2.png",
            name: "SQL",
        },
        {
            id: 9,
            icon: "../skills/python.png",
            name: "Python",
        },
    ];

    return (
    <section className='min-h-screen flex justify-start items-center pb-16 text-center'>
    
        <div className='w-1/2 flex-col'>
            <h2 className='py-4 mx-auto text-5xl text-yellow-600 font-md 
            uppercase font-bold'>
                Iago Sánchez
            </h2>
            <p className='py-4 mx-auto font-light text-left ml-6'>
            Completely dedicated to the philosophy of lifelong learning,
            I'm a full stack developer with a strong enthusiasm for JavaScript, Node,
            React, and the vast world of web development.
            Experienced in system administration and in Bash scripting,
            I bring a strong background in systems management and automation. 
            And, oh, I am also a history teacher! When I'm not coding,
            you'll find me immersed in books, and also lifting weights!</p>  
            <div className='mx-auto flex justify-evenly py-4 lg:py-26 text-3xl w-full md:w-1/3'>
                {SOCIAL.map(({ id, link, icon }) => (
                    <a href={link} key={id} target='_blank' rel='noopener noreferrer' className='cursor-pointer duration-300 hover:text-yellow-600'>
                        {icon}
                    </a>
                ))}
            </div>     
            <div>
                <img src={avatar} alt='avatar' className='mt-6 mx-auto w-50 h-60 md:w-64 md:h-72 rounded-xl'/>
            </div>
        </div>
        <div className='w-1/2 grid grid-cols-3 gap-4'>
            {BOX.map(({ id, icon, name }) => (
                <div
                key={id}
                className='relative flex flex-col items-center 
                transform hover:scale-110 transition-transform'
                >
                <div className='rounded-full bg-black w-20 h-20 border-2
                 border-yellow-400 flex items-center justify-center'>
                    <div className='rounded-full bg-black w-16 h-16 
                    flex items-center justify-center'>
                    <img src={icon} alt={name} className='w-10 h-10' />
                    </div>
                </div>
                <p className='mt-2 text-center'>{name}</p>
                </div>
            ))}
        </div>




    </section>
    );
};

export default Hero;