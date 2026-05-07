import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "./components/navigation/header/header";
import { Footer } from "./components/navigation/footer/footer";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import { Projects } from "./pages/project";
import { About } from "./pages/about";
import { Skills } from "./pages/skill";
import { Experiences } from "./pages/experience";
import Squares from "./components/canvas/squres";

const sections = [
  { id: "home", component: <Home />},
  { id: "about", component: <About /> ,  },
  { id: "skills", component: <Skills /> ,  },
  { id: "experiences", component: <Experiences /> },
  { id: "projects", component: <Projects /> ,  },
  { id: "contact", component: <Contact /> ,  },
];

function App() {
  const [enableBackground] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative text-white min-h-screen flex flex-col">

      {enableBackground && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares speed={0.2} squareSize={45} direction="diagonal" borderColor="rgba(255,255,255,0.03)" />
        </div>
      )}

      <section className="fixed top-6 z-50 w-full flex sm:px-5 xl:px-15 items-center justify-center">
        <Header />
      </section>

      <main className="relative z-10 flex flex-col items-center gap-8 px-4 sm:gap-13">
        {sections.map(({ id, component }) => (
          <section key={id} id={id} className="w-full">
            {component}
          </section>
        ))}
      </main>

      <footer className="mt-8 xl:mt-10 w-full relative z-10 bg-gray-800/30 backdrop-blur-md border-t border-white/10">
        <Footer />
      </footer>

    </div>
  );
}

export default App;