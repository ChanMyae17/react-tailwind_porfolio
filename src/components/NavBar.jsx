import React, { useState } from 'react';
import {FaTimes} from 'react-icons/fa';
import {HiBars3BottomRight} from 'react-icons/hi2';
import Logo from '../assets/logo1.png'
import {Link} from 'react-scroll';


const NavBar = () => {
    const [nav,setNav] = useState(false);
    const links = [
        {
            id : 1,
            link : 'home',
        },
        {
            id : 2,
            link : 'about',
        },
        {
            id : 3,
            link : 'skills',
        },
        {
            id : 4,
            link : 'contact',
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white backdrop-blur-md fixed'>
        <div>
            <img src={Logo} alt="logo" className='rounded-2xl mx-1 w-32 ml-2' />
            
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id,link})=>(
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-110 hover:text-green-400 duration-300'>
                   <Link to={link} smooth duration={500}>{link}</Link>
                </li>  
            ))}
        </ul>

        <div onClick={()=>setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30}/> : <HiBars3BottomRight size={35}/>}
        </div>
        
        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
            {links.map(({id,link})=>(
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-110 hover:text-green-400 duration-500'>
                       <Link onClick={()=>setNav(!nav)} to={link} smooth duration={700}>{link}</Link>
                    </li>  
                ))}
            </ul>
        )}
        
    </div>
  )
}

export default NavBar;