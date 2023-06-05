import React, { Children } from 'react'

const Section = ({title, subtitle, children}) => {
    return (
        <section className='min-h-fit flex flex-col justify-star items-center py-16 px-5 text-center'>
            <h3 className='py-3 text-4xl lg:text-5xl'>{title}</h3>
            <p className='max-w-xl font-light text-yellow-600 mb-10 text-1xl md:text-base'>{subtitle}</p>
            {children}
        </section>
    );
};

export default Section;