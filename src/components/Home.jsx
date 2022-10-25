import React from 'react';
import MyPhoto from '../assets/myphoto1.png';
import {RiArrowRightSFill} from 'react-icons/ri';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
       
       <div className='max-w-screen-lg mx-auto justify-center items-center flex flex-col h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-xs sm:text-lg font-bold text-center mb-6 text-green-400'>
                    Hello, I am
                </h2>
                <h2 className='text-4xl sm:text-7xl text-white font-black mb-6 font-myname'>
                   CHAN MYAE MIN
                </h2>
                <h6 className='text-xs sm:text-lg font-jobname text-center text-white'>
                   JUNIOR FULLSTACK DEVELOPER
                </h6>
                <p className='text-gray-500 py-4 max-w-md'>
                   
                </p>
                <div>
                    <Link to='contact' smooth duration={600} className='group text-white items-center bg-gradient-to-r from-blue-500 to-cyan-500 w-fit cursor-pointer px-6 py-3 my-2 flex rounded-md'>
                        Contact
                        <span className='group-hover:rotate-90 duration-300'>
                            <RiArrowRightSFill className='ml-1' size={25}/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={MyPhoto} alt="my profile" className='rounded-3xl mx-auto w-2/3 md:w-full' />
            </div>
       </div>
    </div>
  )
}

export default Home;