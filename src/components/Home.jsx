import React, { useRef, useState, useEffect } from 'react'
import { MapPin, Calendar, Star, Music } from 'lucide-react'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import FloatingImageCanvas from '../canvas/3Dpic'

function Home() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  // Words to cycle
  const words = ["Web Developer", "Frontend Developer", "Backend Developer", "Fullstack Developer"]

  // Typing effect
  useEffect(() => {
    if (index === words.length) return

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000) // pause before deleting
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 50 : 120)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse])

  useEffect(() => {
    setText(words[index].substring(0, subIndex))
  }, [subIndex, index])

  const handleToggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <div className="flex flex-col w-full h-full justify-center items-center lg:px-0 xl:px-16">
      <div className="flex flex-col custom-flex w-full">
        
        {/* LEFT SIDE */}
        <div data-aos="fade-left" data-aos-duration="1300" className="flex flex-col gap-4 justify-center items-center lg:w-1/2 w-full pl-3 pr-3">
          <div className="flex flex-col items-start gap-6 md:pl-5 lg:pl-10 w-full">

            <h1 className="text-4xl sm:text-5xl font-semibold">Hi, I'm Arafat Man</h1>
            
            {/* 🔥 Typing Animation */}
            <h3 className="text-2xl font-semibold">
              {text}
              <span className="border-r-2 border-white animate-pulse ml-1"></span>
            </h3>

            <p className="text-base text-gray-200">
              I'm a sophomore Computer Science student passionate about coding and creative problem-solving. I enjoy building meaningful projects that make a difference. Always eager to learn, grow, and explore new technologies.
            </p>

            <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
              <span className="flex gap-2 items-center"><MapPin size={17} /> Phnom Penh, Cambodia</span>
              <span className="flex gap-2 items-center"><Calendar size={17} /> Available Now</span>
            </div>

            <div className="flex flex-wrap gap-3 mt-3">
              <a href="#projects" className="flex items-center gap-1.5 bg-blue-800 hover:bg-blue-950 px-3 py-2 rounded-xl font-semibold text-sm transition-transform transform hover:scale-[1.05] hover:shadow-md hover:shadow-blue-500/20 duration-200">
                <Star size={14} /> View Projects
              </a>

              {/* 🔥 Music Toggle Button */}
              <button
                onClick={handleToggleMusic}
                className={`flex cursor-crosshair items-center gap-1.5 px-3 py-2 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-[1.05] 
                ${isPlaying 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-red-500/40 animate-pulse' 
                  : 'border-2 border-gray-800 hover:bg-gray-800/60'}`}
              >
                <Music size={16} className={isPlaying ? 'animate-bounce' : ''} />
                {isPlaying ? 'Now Playing' : 'Music Mode'}
              </button>
            </div>

            {/* Audio element */}
            <audio ref={audioRef} loop>
              <source src="/yiruma.mp3" type="audio/mpeg" />
            </audio>

            <div className="w-full h-[1px] bg-gray-800 mt-4" />
            <div className="flex gap-4 items-center mt-2">
              <span className="font-semibold">Follow me:</span>
              <div className="flex gap-4 items-center">
                <a className='hover:text-[#1877F2]' href="https://web.facebook.com/ra.fat.626421/" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></a>
                <a className='hover:text-[#E4405F]' href="https://www.instagram.com/l4stdance_" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
                <a className='hover:text-[#0A66C2]' href="https://www.linkedin.com/in/arafat-man/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
                <a className='hover:text-[#6e5494]' href="https://github.com/Ra-Fat" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div data-aos="fade-right" data-aos-duration="1300" className="flex justify-center items-center mt-10 lg:mt-0 lg:w-1/2 w-full">
          <div className="w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] md:w-[320px] md:h-[420px] lg:w-[350px] lg:h-[450px]">
            <FloatingImageCanvas />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
