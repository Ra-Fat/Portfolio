import React from 'react'
import { MapPin, Calendar, Star, Pin, Mail, Send } from 'lucide-react'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { label } from 'framer-motion/client';
import { MdChat } from 'react-icons/md';
import { useState } from 'react';
import { href } from 'react-router-dom';

const ContactDetail = [
  { icon: <FaLinkedin size={22} color="#0A66C2" />, ContactName: 'LinkeIn', Username: '@arafat-man' , label:"Connect with me professionally and see my career journey" , href: "https://www.linkedin.com/in/arafat-man/"},
  { icon: <FaGithub size={22} color="#6e5494"/>, ContactName: 'GitHub', Username: '@Ra-Fat' , label:"Check out my latest projects and open source contributions", href: "https://github.com/Ra-Fat"},
  { icon: <FaFacebook size={22} color="#1877F2" />, ContactName: 'Facebook', Username: '@Ra-Fat' , label:"Behind the scenes of my development journey" , href: "https://web.facebook.com/ra.fat.626421/"},
  { icon: <FaInstagram size={22} color="#E4405F" />, ContactName: 'Instagram', Username: '@L4stDance_' , label:"Behind the scenes of my development journey" , href: "https://www.instagram.com/l4stdance_"},
];
// const [FirstName, SetfirstName] = useState("");
// const [LastName, Setlastname] = useState("");
// const [Email, Setemail] = useState("");
// const [Message, Setmessage] = useState("");

const handleSubmit = (e)=>{
  e.preventDefault();
}

const Contact = () => {
  return (
    <div className='mt-10 flex flex-col items-center justify-center w-full lg:px-0 xl:px-10 '>

       <div className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="font-bold text-4xl">Get In Touch</h1>
        <p className="text-[15px] sm:text-sm lg:text-base  flex flex-col items-center">
          Ready to bring your ideas to life? Let's discuss your next project and create 
          <span className="text-center">
            something amazing together
          </span>
        </p>
      </div>

      <div className='flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-10 mt-15 w-full '>
            
            <div className="w-full lg:w-[50%] flex flex-col gap-5 bg-gray-800/20 backdrop-blur-md rounded-xs p-4">
                <div className="w-full">
                    <div className='flex flex-col gap-3 w-full'>
                        <h2 className='flex items-center gap-3 text-xl font-bold'><MdChat size={20} /> Connect With Me</h2>
                        <p className='text-gray-300 text-[15px] sm:text-sm lg:text-base'>Follow me on social media to stay updated with my latest project, tech insight and development journey. Let's connect and build something great together !!</p>
                        <div className='flex flex-col w-full gap-5 '>
                            {ContactDetail.map((item,index)=>(
                              <a target="_blank" href= {item.href} key={index} className='flex gap-5 items-center text-[14px] bg-gray-800/20 pl-5 p-4 round-xs shadow-inner cursor-pointer transition-transform transform hover:scale-[1.02] hover:shadow-md hover:shadow-gray/10 duration-200'>
                                <span>{item.icon}</span>
                                  <div className='flex flex-col'>
                                      <div className='flex gap-2 items-center'>
                                          <p className='font-bold'>{item.ContactName}</p>
                                          <p className='text-gray-400'>{item.Username}</p>
                                      </div>
                                      <p className='text-gray-400'>{item.label}</p>            
                                  </div>
                              </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          
          
          <div className="w-full lg:w-[50%] flex flex-col gap-5 bg-gray-800/20 backdrop-blur-md rounded-xs p-4">
                <div className="w-full">
                    <div className='flex flex-col gap-3 w-full'>
                        <h2 className='flex items-center gap-3 text-xl font-bold'><Mail size={20} />Contact Form</h2>
                        <p className='text-gray-300 text-[15px] sm:text-sm lg:text-base'>Have any questions or want to get in touch? Feel free to send me a message, and I will get back to you as soon as possible!</p>
                        <form onSubmit={handleSubmit} className='flex flex-col w-full gap-5'>
                            <div className='flex items-center gap-4 sm:flex-row flex-col'>
                                <div className='flex flex-col gap-2 sm:w-[50%] w-full'>
                                  <label htmlFor="">First Name</label>
                                  <input required className='border-1 pl-2 border-gray-500 p-1 rounded-xs bg-none' type="text" about='First Name'/>
                                </div>
                                <div className='flex flex-col gap-2 sm:w-[50%] w-full'>
                                  <label htmlFor="">Last Name</label>
                                  <input required className='border-1 pl-2 border-gray-500 p-1 rounded-xs' type="text" about='Last Name'/>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                  <label htmlFor="">Email</label>
                                  <input required className='border-1 pl-2 border-gray-500 p-1 rounded-xs' type="text" about='Email'/>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                  <label htmlFor="">Message*</label>
                                  <textarea className='border border-gray-500 p-2 rounded resize-y h-20' ></textarea>
                            </div>
                            <button type='submit' className='flex items-center gap-2 w-full justify-center bg-gray-800/50 cursor-pointer font-bold p-3 rounded-xs hover:bg-gray-800/70'><Send size={20} /> Send Message</button>          
                        </form>
                    </div>
                </div>
            </div>
      </div>


    </div>
  )
}

export default Contact
