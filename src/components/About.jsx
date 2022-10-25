import React from 'react'

const About = () => {
  return (
    <div name='about'
         className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
        <div className='p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl inline font-bold border-b-4 border-sky-500'>
                    Who am I?
                </p>
            </div>

            <p className=" mt-20">
                Enthusiastic, I am highly motivated software engineer student who likes to take initiative and seek out new challenges. Now, I've about one year experience in designing website.
                Currently, I’m planning to build full stack app especially e-commerce app.
            </p> 

            <br />

            <p className="">
            I love exploring new technologies, working continuously for a long period of time and working with teams.
            Besides, I love to working with technologies like Tailwind, ReactJs, ExpressJS and MongDB.
            Now, I'm learning server-side technologies such as Next.js and database.
            </p>
        </div>
    </div>
  )
}

export default About;