import React from 'react'

const Starter = () => {
  return (
    <section title='Starter'>
        <div>
        
        </div>
        <div className='flex flex-col items-center justify-center just h-screen'>
            <div className='text-center mb-4 text-6xl'>
            Hello, I'm <span className='text-yellow-600'>Iago</span>
            </div>
            <div className='text-6xl text-center'>
            I'm a web developer and a system administrator
            </div>
            <a href='../../public/iago_cv.pdf'
            download={true} 
            className='my-8 bg-gradient-to-r from-yellow-600 to-gray-600
            text-white px-6 py-3 uppercase
            rounded-md tracking-wider cursor-pointer hover:scale-105
             duration-300 w-[215px] h-[60px] text-xl'>
            Watch my CV
            </a>
        </div>
    </section>


    
  )
}

export default Starter