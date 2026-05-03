import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Header from './components/navigation/header';
import { Header } from './components/navigation/header';
import {Footer} from './components/navigation/footer';
import {Contact} from './components/page-components/contact';
import { Home } from './components/page-components/home';
import {Projects} from './components/page-components/project';
import {About} from './components/page-components/about';
import {Skills} from './components/page-components/skill';
import {Experiences} from './components/page-components/experience';
import Squares from './utils/canvas/squres';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [enableBackground] = useState(true);

  return (
    <div className="relative text-white min-h-screen flex flex-col">
      {enableBackground && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Squares
              speed={0.2}
              squareSize={45} 
              direction="diagonal"
              borderColor="rgba(255,255,255,0.03)"
            />
          </div>
        )}
      <section className="flex sm:px-5 xl:px-15 items-center justify-center fixed top-6 z-50 w-full">
        <Header />
      </section>
      <main className="relative z-10 flex flex-col  justify-center gap-15 sm:gap-25 items-center px-4 lg:px-0 sm:mx-10 xl:mx-15">
        <section className="w-full h-[calc(100vh-40px)] sm:h-screen" id="home"><Home /></section>
        <section className="w-full" id="about"><About /></section>
        <section className='w-full' id="skills"><Skills /></section>
        <section className="w-full" id="experiences"><Experiences /></section>
        <section className='w-full' id="projects"><Projects /></section>       
        <section className="w-full" id="contact"><Contact /></section>
      </main> 
      <section className='mt-8 xl:mt-10 w-full relative z-10 bg-gray-800/30 backdrop-blur-md border-b-1 border-white/10'><Footer /></section>   
    </div>
  );
}

export default App;
