import { Github, Linkedin } from 'lucide-react'
import React from 'react'

const Footer = () => {
    const github = 'https://github.com/maheshpatil132'
    const linedin = 'https://www.linkedin.com/in/mahesh-patil-bb4ba5218/'
  return (
    <div className='px-4 lg:px-12 my-10'>
        <div className=' px-4 lg:px-10  py-8 gap-10 flex flex-col-reverse items-center lg:flex-row w-full justify-between rounded-xl bg-orange-50'>
             <div className=' flex-1 gap-4 flex justify-center flex-col'>
                <div>
                    <h1 className=' text-gray-700 text-4xl font-semibold'>
                        Built by Mahesh Patil 🚀
                    </h1>
                    <p className=' text-gray-600 mt-5'>
                        Hey!, I'm Mahesh Patil a final year Student at L.D College of Engineering. I'm Pursuing <b>Instrumnetation and Control Engineering</b> but my passion towards the Web developement. That's why i'm Continuosly pushing myself to learn and explore the new technologies.
                    </p>
                </div>
                <div className='flex my-2 gap-4'>
                    <a href={linedin} target='_blank' rel='noreferrer' className=' bg-blue-500 p-1 h-9 w-9 flex items-center justify-center rounded-full'>
                        <Linkedin color='white' strokeWidth={0} fill='white' size={20}/>
                    </a>
                    <a href={github} target='_blank' rel='noreferrer' className=' bg-gray-800 p-1  h-9 w-9 flex items-end justify-center rounded-full'>
                        <Github color='white' strokeWidth={0} fill='white' size={22}/>
                    </a>
                </div>
             </div>  
             <div className=''>
                <img className=' rounded-full w-64' src="https://res.cloudinary.com/drzkvppdf/image/upload/v1702831344/Mahesh_c6jxtx.png" alt="Developer" />
             </div>
        </div>
    </div>
  )
}

export default Footer