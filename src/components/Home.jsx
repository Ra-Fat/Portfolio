import React, { useState, useEffect } from 'react'
import { MapPin, Calendar, GitBranch, FolderGit2, Code } from 'lucide-react'
import FloatingImageCanvas from '../canvas/3Dpic'
import axios from 'axios'

function Home() {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  // Stats
  const [repos, setRepos] = useState(0)
  const [projects, setProjects] = useState(0)
  const [commits, setCommits] = useState(0)
  const [experience, setExperience] = useState(0)

  const [displayRepos, setDisplayRepos] = useState(0)
  const [displayProjects, setDisplayProjects] = useState(0)
  const [displayCommits, setDisplayCommits] = useState(0)
  const [displayExperience, setDisplayExperience] = useState(0)

  const words = ["Web Developer", "Frontend Developer", "Backend Developer", "Fullstack Developer"]

  // Typing animation
  useEffect(() => {
    if (index === words.length) return
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000)
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

  // Fetch GitHub data
  useEffect(() => {
    const username = 'Ra-Fat'
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => {
        setRepos(res.data.public_repos)
        setProjects(20)
        setCommits(400)
        setExperience(3)
      })
      .catch(err => console.error(err))
  }, [])

  // Animate numbers
  useEffect(() => {
    const animateValue = (target, setter, duration = 1200) => {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          start = target
          clearInterval(timer)
        }
        setter(Math.floor(start))
      }, 16)
    }

    animateValue(repos, setDisplayRepos)
    animateValue(projects, setDisplayProjects)
    animateValue(commits, setDisplayCommits)
    animateValue(experience, setDisplayExperience)
  }, [repos, projects, commits, experience])

  return (
    <div className="flex flex-col w-full h-full justify-center items-center lg:px-0 xl:px-16">
      <div className="flex flex-col custom-flex w-full ">

        {/* LEFT SIDE */}
        <div data-aos="fade-up" data-aos-duration="1300" className="flex flex-col gap-4 justify-center items-center lg:w-1/2 w-full pl-3 pr-3">
          <div className="flex flex-col items-start gap-6 md:pl-5 lg:pl-10 w-full">
            <h1 className="text-4xl sm:text-5xl font-semibold">
              Hi, I'm <span className="text-blue-800">Arafat</span> Man
            </h1>
            <h3 className="text-2xl font-semibold">
              {text}
              <span className="border-r-2 border-white animate-pulse ml-1"></span>
            </h3>

            <p className="text-base text-gray-200 leading-relaxed">
              I'm a sophomore Computer Science student passionate about coding and creative problem-solving.
              I enjoy building meaningful projects that make a difference and learning new technologies.
            </p>

            {/* <div className="flex flex-wrap gap-5 text-gray-400 text-sm">
              <span className="flex gap-2 items-center"><MapPin size={17} /> Phnom Penh, Cambodia</span>
              <span className="flex gap-2 items-center"><Calendar size={17} />Looking for internship</span>
            </div> */}

            <div data-aos="fade-up" data-aos-duration="1400" className="grid grid-cols-3 gap-5 mt-4 w-full text-center items-start">
              <div className="flex flex-col items-start justify-start">
                <div className="text-blue-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <GitBranch size="100%" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2">{displayCommits}</h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Commits</p>
              </div>

              <div className="flex flex-col items-start justify-start">
                <div className="text-green-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <FolderGit2 size="100%" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2">{displayProjects} +</h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Projects</p>
              </div>

              <div className="flex flex-col items-start justify-start">
                <div className="text-yellow-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <Code size="100%" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2">{displayExperience} Years</h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Experience</p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div data-aos="fade-up" data-aos-duration="1300" className="flex justify-center items-center mt-10 lg:mt-0 lg:w-1/2 w-full">
          <div className="w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] md:w-[320px] md:h-[420px] lg:w-[350px] lg:h-[450px]">
            <FloatingImageCanvas />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
