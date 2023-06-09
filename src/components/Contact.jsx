import React from 'react';
import Section from './common/Section';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {

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

  return (
    <Section
    title="Contact"
    subtitle="Do you have any inquiries or wish to work together?
    Leave your contact details, and I'll get back to you as soon as possible."
    >
        <div className='p8 text-left w-full'>
            <form action='https://getform.io/f/ef8883c9-fafb-4d2a-a620-cffeb52ccb74' method='POST'>
                
                <div className='w-full'>
                    <div className='flex flex-col my-2'>
                        <label className='capitalize text-sm py-2 font-extralight'>Name</label>
                        <input type='text' name='name'
                        className='border-2 rounded-lg p-3 flex focus:outline-none
                         border-yellow-600 dark:bg-black dark:text-white'
                        ></input>
                    </div>

                    <div className='flex flex-col'>
                        <label className='capitalize text-sm py-2 font-extralight'>Phone</label>
                        <input type='text' name='phone'
                        className='border-2 rounded-lg p-3 flex focus:outline-none
                         border-yellow-600 dark:bg-black dark:text-white'
                        ></input>
                    </div>

                    <div className='flex flex-col'>
                        <label className='capitalize text-sm py-2 font-extralight'>Mail</label>
                        <input type='text' name='mail'
                        className='border-2 rounded-lg p-3 flex focus:outline-none
                         border-yellow-600 dark:bg-black dark:text-white'
                        ></input>
                    </div>

                    <div className='flex flex-col'>
                        <label className='capitalize text-sm py-2 font-extralight'>Message</label>
                        <textarea name='message' rows='10' 
                        className='border-2 rounded-lg p-8 flex focus:outline-none
                         border-yellow-600 dark:bg-black dark:text-white resize-none'>
                        </textarea>
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <button 
                    className='my-8 bg-gradient-to-r from-yellow-600 to-gray-600
                    text-white px-6 py-3 uppercase
                    rounded-md tracking-wider cursor-pointer hover:scale-105 duration-300'>send</button>
                </div>

            </form>

        </div>
        <div
        className='flex flex-col items-center justify-center gap-8 text-center'
        >
            <div className='flex w-full items-center justify-evenly text-3xl'>
                {SOCIAL.map(({id, link, icon}) =>(
                    <a
                    href={link} target='_blank' rel='noopener noreferrer'
                    className='duration-300 ease-in-out hover:text-yellow-600 p-4'
                    >
                    {icon}
                    </a>
                ))}
            </div>
        </div>

    </Section>
  );
};

export default Contact