import React, { useState } from 'react';
import emailjs from '@emailjs/browser'

function Contect() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Here you can send the data to your server or email service
    const contactData = {
      name,
      email,
      message,
    };
    const serviceId = `service_wplhc8k`
    const publickey = `WQsnJgwgIc2AutbbA`
    const templateid = `template_6k7zevq`
    emailjs
      .send(serviceId, templateid, {from_name: contactData.name,
        message: contactData.message,
        name: contactData.name,
        email: contactData.email}, {
        publicKey: publickey,
      })
      .then(
        () => {
          // console.log('SUCCESS!');
        },
        (error) => {
          // console.log('FAILED...', error.text);
        },
      );

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <div className="h-full w-3/4 m-auto relative z-50">
        <div className="mt-10 w-full h-max">
          <h4 className='text-center text-3xl'>Let's Work Together Contact Me</h4>
          <p className='text-center mt-5'>Contact me for any work or collaboration, and I'm waiting for your text.</p>
          <form onSubmit={handleSubmit} className='w-full grid grid-cols-1 gap-3 mt-20 items-center justify-center place-content-center pb-10 '>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='text-black sm:w-2/4 w-full m-auto rounded-md p-3 h-10 outline-none'
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='text-black sm:w-2/4 w-full m-auto rounded-md p-3 h-10 outline-none'
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='text-black sm:w-2/4 w-full m-auto rounded-md p-3 h-10 outline-none'
              required
            />
            <button type="submit" className='m-auto h-[40px] sm:h-[40px] w-full sm:w-2/6 bg-red-800 rounded-md text-white outline-none border-none font-semibold'>
              Contact Me
            </button>
          </form>
        </div>
        <div className='w-full h-max absolute bottom-5 left-0 place-items-center place-content-end text-white'>
          <span className='text-3xl text-center w-full'>Phoolchand Kumawat</span>
          <ul className='flex w-4/6 mt-16 justify-between '>
            <li><a href="">Home</a></li>
            <li><a href="">Project</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Contact Me</a></li>
          </ul>
          <div className="social"></div>
        </div>
      </div>

      <div className="w-full h-full absolute top-0 left-0 z-0">
        <div className='w-20 h-20 bg-red-600 rounded-full relative top-2/3 left-2/5'></div>
        <div className='w-20 h-20 bg-green-600 rounded-full relative top-2/4 left-1/2'></div>
        <div className='w-20 h-20 bg-blue-600 rounded-full relative top-1/4 left-1/4'></div>
          <div className='w-20 h-20 bg-blue-600 rounded-full relative top-1/4 left-3/4'></div>
          <div className='w-20 h-20 bg-blue-600 rounded-full relative top-1/4 left-3/4 ml-52'></div>
        </div>
   </div>
  )
}

export default Contect