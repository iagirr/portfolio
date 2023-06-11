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
            icon: '../public/skills/html.png',
            name: "HTML",
        },
        {
            id: 2,
            icon: "/public/skills/css.png",
            name: "CSS",
        },
        {
            id: 3,
            icon: "/public/skills/tw.png",
            name: "Tailwind CSS",
        },
        {
            id: 4,
            icon: "/public/skills/js.png",
            name: "Javascript",
        },
        {
            id: 5,
            icon: "/public/skills/react.png",
            name: "React",
        },
        {
            id: 6,
            icon: "/public/skills/node.png",
            name: "Node.js",
        },
        {
            id: 7,
            icon: "/public/skills/git.png",
            name: "Git",
        },
        {
            id: 8,
            icon: "/public/skills/sql.png",
            name: "SQL",
        },
        {
            id: 9,
            icon: "/public/skills/python.png",
            name: "Python",
        },
    ];

    return (
    <section className='min-h-screen flex justify-start items-center p-4 text-center'>
    
        <div className='w-1/2 flex-col'>
            <h2 className='py-4 mx-auto text-5xl text-yellow-600 font-md uppercase font-bold'>
                Iago Sánchez
            </h2>
            <p className='py-4 mx-auto font-light text-left'>
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

        <div className='w-1/2'>
            {BOX.map(({ id, icon, name }) => (
                <img key={id} src={icon} alt={name} className='w-10 h-10 mx-2' />
            ))};
        </div>

    </section>
    );
};

export default Hero;