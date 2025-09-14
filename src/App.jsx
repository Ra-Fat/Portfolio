import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import Overview from './components/Overview';
import Projects from './components/Projects';
import Skills from './components/Skill';
import Experiences from './components/Experiences';
import StarsCanvas from './canvas/Stars';
import AOS from 'aos';  
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col gap-10 sm:gap-15 px-5 py-5 sm:px-7 sm:py-7">
      <StarsCanvas />
      <section className="flex items-center justify-center sticky top-5 z-50">
        <Navbar />
      </section>
      <main className="relative z-10 flex flex-col justify-center gap-20 sm:gap-30 items-center sm:mx-5 xl:mx-20">
        <section className="w-full" id="home"><Home /></section>
        <section className="w-full" id="about"><Overview /></section>
        <section className='w-full' id="skills"><Skills /></section>
        {/* <section id="projects"><Projects /></section> */}
        {/* <section className="w-full" id="experiences"><Experiences /></section> */}
        <section className="w-full" id="contact"><Contact /></section>
        <section className='w-full' id="footer"><Footer /></section>
      </main>    
    </div>
  );
}

export default App;
