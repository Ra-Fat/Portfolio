import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import FloatingImageCanvas from '../utils/canvas/3Dpic'

function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true)
  }, [])

  return (
    <div className="w-full h-full lg:px-10 xl:px-16">
      <div className="flex w-full min-[910px]:flex-row flex-col-reverse">

        {/* LEFT SIDE */}
        <div className="flex justify-center items-center lg:w-1/2 w-full">
          <div className="flex flex-col items-center min-[910px]:items-start gap-6 lg:pl-0 xl:pl-10 w-full">

            {/* Animated Title */}
            <div
              className={`flex flex-col items-center min-[910px]:items-start transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <h1
                style={{
                  color: '#000754',
                  textShadow:
                    '0.5px 0.5px 0 #00d9ff, -0.5px -0.5px 0 #00d9ff, 0.5px -0.5px 0 #00d9ff, -0.5px 0.5px 0 #00d9ff',
                }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-moderniz font-bold leading-tight select-none"
              >
                Man Arafat
              </h1>
              <span
                className="text-2xl md:text-3xl lg:text-4xl font-moderniz font-bold leading-tight select-none"
                style={{
                  display: 'block',
                  color: '#000754',
                  textShadow:
                    '0.5px 0.5px 0 #00d9ff, -0.5px -0.5px 0 #00d9ff, 0.5px -0.5px 0 #00d9ff, -0.5px 0.5px 0 #00d9ff',
                }}
              >
                Software Engineer
              </span>
            </div>

            {/* Animated Description */}
            <p
              className={`text-base font-cascadia text-gray-300 leading-relaxed text-center min-[910px]:text-left transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Passionate about coding and creative problem-solving which enjoy building meaningful projects
              that make a difference and learning new technologies.
            </p>

            {/* Animated Buttons */}
            <div
              className={`flex items-center justify-center gap-5 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div>
                <button className="cursor-pointer relative flex px-5 rounded-xl py-3 items-center justify-center border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:bg-slate-800">
                  Download Resume
                </button>
              </div>
              <div className="flex flex-row gap-4">
                <a
                  href="https://github.com/Ra-Fat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:bg-slate-800"
                >
                  <FaGithub className="h-6 w-6 text-slate-400 transition-all duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/arafat-man"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:bg-slate-800"
                >
                  <FaLinkedin className="h-6 w-6 text-slate-400 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Image Section) */}
        <div className="flex justify-center items-center mt-10 lg:mt-0 lg:w-1/2 w-full">
          <div
            className={`h-[340px] sm:h-[400px] md:h-[420px] lg:w-[390px] lg:h-[450px] transition-all duration-1200 ${
  isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-100 rotate-0'
}`}



            style={{ transitionDelay: '200ms' }}
          >
            <FloatingImageCanvas />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
