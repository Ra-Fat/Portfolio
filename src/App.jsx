import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Overview from './components/about';
import Skills from './components/Skill';
import Squares from './utils/canvas/Squares';
import { VectorSquare } from 'lucide-react';
import Experiences from './components/certificates';
import { Sun, Moon } from 'lucide-react';

function App() {

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [enableBackground, setEnableBackground] = useState(true);

  return (
    <div className="relative bg-back text-white min-h-screen flex flex-col gap-0 sm:gap-18">
      {enableBackground && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Squares
              speed={0.15}
              squareSize={45} 
              direction="diagonal"
              borderColor="rgba(255,255,255,0.03)"
            />
          </div>
        )}
      <section className="flex sm:px-5 xl:px-15 items-center bg-gray-800/30 backdrop-blur-md border-b-1 border-white/10 justify-center sticky top-0 z-50">
        <Navbar />
      </section>
      {/* <Navbar /> */}
      <main className="relative z-10 flex flex-col  justify-center gap-15 sm:gap-25 items-center px-4 lg:px-0 sm:mx-10 xl:mx-15">
        <section className="w-full" id="home"><Home /></section>
        <section className="w-full mt-10" id="about"><Overview /></section>
        <section className='w-full' id="skills"><Skills /></section>
        <section className="w-full" id="experiences"><Experiences /></section>
        <section className='w-full' id="projects"><Projects /></section>       
        <section className="w-full" id="contact"><Contact /></section>
      </main> 
      <section className='mt-8 xl:mt-0 w-full relative z-10 bg-gray-800/30 backdrop-blur-md border-b-1 border-white/10'><Footer /></section>   
      {/* <button  onClick={() => setIsDark(!isDark)} className=" fixed  bottom-6 cursor-pointer  right-6  z-50  bg-gray-800  hover:bg-gray-700  text-white  p-3  rounded-full  shadow-lg  transition">
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button> */}
    </div>
  );
}

export default App;
