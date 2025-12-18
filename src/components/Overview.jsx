import React from 'react';
import EarthCanvas from './Earth';
import { MapPin, Bell, Phone, Mail, User, GraduationCap, Download } from 'lucide-react';

const infoDetails = [
  { icon: <User size={16} />, label: 'Name', value: 'Arafat Man' },
  { icon: <MapPin size={16} />, label: 'Location', value: 'Phnom Penh, Cambodia' },
  { icon: <GraduationCap size={16} />, label: 'University', value: 'CADT' },
  { icon: <Mail size={16} />, label: 'Email', value: 'manrafat2006@gmail.com' },
  { icon: <Phone size={16} />, label: 'Phone', value: '+855 69363138' },
  { icon: <Bell size={16} />, label: 'Status', value: 'Looking for internship' },
];

const Overview = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:px-0 xl:px-10 ">
      
      <div data-aos="fade-down" data-aos-duration="1300" className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="font-bold text-4xl">About Me</h1>
        <span className="text-[15px] sm:text-sm lg:text-base block text-center sm:text-left">
          Passionate about creating innovative solutions through technology
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mt-15 w-full ">
        
        <div data-aos="fade-up" data-aos-duration="1300" className="w-full lg:w-[45%] flex justify-center">
          <div className="w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] md:w-[320px] md:h-[420px] lg:w-[350px] lg:h-[450px]">
            <EarthCanvas />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1300" className="w-full lg:w-[55%] flex flex-col gap-5 bg-gray-800/30 backdrop-blur-md rounded-xl">
          <div className="flex flex-col items-start rounded-xl p-4 pl-5 gap-2 relative overflow-hidden">
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-2xl">Hello There!</h1>
              <p data-aos="fade-up" data-aos-duration="1350" className="text-sm leading-relaxed text-gray-200 flex-wrap mt-2">
                I’m a passionate developer who enjoys solving problems and turning ideas into real
                applications. My focus is on building efficient, user-friendly solutions while
                continuously improving my technical and creative skills. My goal is to grow into a
                strong full-stack developer who can contribute to impactful projects and work with
                purpose-driven teams.
              </p>
              <div data-aos="fade-up" data-aos-duration="1355" className="w-full h-[1px] bg-gray-800 mt-4" />
            </div>

            <div className="flex flex-col gap-2 items-start w-full mt-3">
              {Array.from({ length: 3 }).map((_, rowIndex) => (
                <div data-aos="fade-up" data-aos-duration="1360" key={rowIndex} className="flex flex-col sm:flex-row items-center w-full gap-4">
                  {infoDetails
                    .slice(rowIndex * 2, rowIndex * 2 + 2)
                    .map((item, index) => (
                      <div key={index} className="flex gap-2 p-2 w-full sm:w-1/2 bg-gray-800/30 backdrop-blur-md rounded-xs pl-3 shadow-inner transition-transform transform hover:scale-[1.02] hover:shadow-md hover:shadow-gray/10 duration-200">
                        <span className="bg-gray-800/20 backdrop-blur-md p-2 rounded-xs">{item.icon}</span>
                        <div className="flex flex-col text-xs justify-center">
                          <span className="text-gray-400 font-bold">{item.label}</span>
                          <span className="font-bold text-white">{item.value}</span>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 items-start w-full">
              <div className="w-full h-[1px] bg-gray-800 mt-4" />
              <span data-aos="fade-up" data-aos-duration="1365" className="font-semibold text-sm">Interests & Focus</span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full font-semibold">
                {['Coding', 'Music', 'Technologies', 'Gaming'].map((text, i) => (
                  <span data-aos="fade-up" data-aos-duration="1370" key={i} className="text-xs p-2 bg-gray-800/30 backdrop-blur-md rounded-xl text-center transition-transform transform hover:scale-[1.05] hover:shadow-md hover:shadow-gray/10 duration-200">
                    {text}
                  </span>
                ))}
              </div>

              <div data-aos="fade-up" data-aos-duration="1375" className="flex items-start sm:items-center gap-2 mt-1 w-full">
                <a className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-xl font-semibold text-xs transition-transform transform duration-200" >
                  <Download size={14} className="font-bold" /> Download Resume
                </a>
                <a href="#contact" className="flex items-center gap-2 border-2 border-gray-800 bg-gray-800/10 hover:bg-gray-800/60 px-5 py-2.5 rounded-xl font-semibold text-xs transition-transform transform duration-200" >
                  <Mail size={14} /> Make Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
