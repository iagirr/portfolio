import React from 'react'

const Starter = () => {
  return (
    <section title='Starter'>
        <div>
        
        </div>
        <div className='flex flex-col items-center justify-center just h-screen'>
            <div className='text-center mb-4 text-5xl'>
            Hello, I'm <span className='text-yellow-600'>Iago</span>
            </div>
            <div className='text-5xl text-center'>
            I'm a web developer and a computer/network technician
            </div>
            <a href='../../public/iago_cv.pdf'
            download={true} 
            className='flex items-center justify-center mt-10 
            bg-gradient-to-r from-yellow-600 to-gray-600 py-2 rounded-xl w-[215px] h-[60px] text-2xl'>
            Watch my CV
            </a>
        </div>
    </section>


    
  )
}

export default Starter