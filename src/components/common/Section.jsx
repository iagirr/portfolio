import React, { Children } from 'react'

const Section = ({title, subtitle, children}) => {
    return (
        <section className='min-h-fit flex flex-col justify-star items-center py-20 px-5 text-center'>
            <h3 className='py-4 mx-auto text-6xl text-yellow-600 font-md uppercase font-bold'>{title}</h3>
            <p className='py-4 max-w-xl mb-4'>{subtitle}</p>
            {children}
        </section>
    );
};

export default Section;