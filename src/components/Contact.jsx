import React from 'react'

const Contact = () => {
  return (
    <div name="contact"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-500'>Contact</p>
                <p className='py-6'>Please fill out the form below to contact me and I will cantact you later</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/4298add0-accf-4207-99b3-79627d970d72" method='POST' className='flex flex-col w-full md:w-1/2'>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="phone-number"
              placeholder="Enter your phone-number"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-blue-500 to-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-lg hover:scale-110 duration-500">
                Contact Me
            </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;