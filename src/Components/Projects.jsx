import { ArrowRight, MoveRight } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";
function Projects() {
      const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('project');
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);
  return (
    <section id="project" className="w-full py-20 scroll-mt-20 flex items-center justify-center">
      <div className={`max-w-7xl mx-auto  ${isVisible ? 'opacity-0 animate-[fadeIn_1s_ease-in_0.6s_forwards]' : 'opacity-0'}`}>
        <div className="text-white text-center mb-12">
          <h1 className="font-bold pb-12 text-4xl md:text-5xl">
            Featured Projects
          </h1>
        </div>
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid gap-5 grid-cols-1 mx-5 lg:mx-10">
          <div className=" backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 shadow-xl hover:shadow-violet-500/20 transition-all duration-300 flex flex-col">
            <div className="flex flex-col gap-3 flex-grow">
              <h1 className="font-medium text-white text-2xl">
                E-commerce
              </h1>
              <p className="text-gray-400 text-sm py-2">
                Developed a e-commerce site with dynamic cart management and
                navigation to display product details, pricing, and
                descriptions.
              </p>
              <div className="flex flex-col gap-5 mt-auto">
              <div className="flex items-center gap-2 flex-wrap">
                   <span className="bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 text-sky-300 px-2 py-3 rounded-full border border-blue-400/40 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 cursor-default text-xs">
                    Tailwind CSS
                  </span>
                 <span className="bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 text-sky-300 px-2 py-3 rounded-full border border-blue-400/40 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 cursor-default text-xs">
                    React.Js
                  </span>
                   <span className="bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 text-sky-300 px-2 py-3 rounded-full border border-blue-400/40 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 cursor-default text-xs">
                   Vercel
                  </span>
              </div>
              
              <a href="https://e-commerce-rojal.vercel.app/" className="text-violet-300 flex text-sm items-center gap-2 hover:text-purple-500">
               View Project <MoveRight size={18}/>
              </a>
              </div>
            
            </div>
          </div>
          <div className=" backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 shadow-xl hover:shadow-violet-500/20 transition-all duration-300 flex flex-col">
          <div className="flex flex-col gap-3 flex-grow">
              <h1 className="font-medium text-white text-2xl">
                Landing page
              </h1>
              <p className="text-gray-400 text-sm py-2">
                Designed and developed a visually appealing landing page showcasing modern UI/UX design
principles and responsive layout techniques.
              </p>
              <div className="flex flex-col gap-5 mt-auto">
              <div className="flex items-center gap-2 flex-wrap">
                   <span className="bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 text-sky-300 px-2 py-3 rounded-full border border-blue-400/40 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 cursor-default text-xs">
                    Tailwind CSS
                  </span>
                 <span className="bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 text-sky-300 px-2 py-3 rounded-full border border-blue-400/40 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 cursor-default text-xs">
                    React.Js
                  </span>
                   <span className="bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 text-sky-300 px-2 py-3 rounded-full border border-blue-400/40 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 cursor-default text-xs">
                   Vercel
                  </span>
              </div>
              
              <a href="https://code-flow-chi.vercel.app/" className="text-violet-300 flex text-sm items-center gap-2 hover:text-purple-500">
               View Project <MoveRight size={18}/>
              </a>
              </div>
            
            </div></div>
          <div className=" backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 shadow-xl hover:shadow-violet-500/20 transition-all duration-300 flex flex-col">
          <div className="flex flex-col gap-3 flex-grow">
              <h1 className="font-medium text-white text-2xl">
                Movie Website
              </h1>
              <p className="text-gray-400 text-sm py-2">
              Created a movie collection application using React and integrated the TMDB API with functionality
to add and remove movies, featuring a clean and responsive interface.
              </p>
              <div className="flex flex-col gap-5 mt-auto">
              <div className="flex items-center gap-2 flex-wrap">
                   <span className="bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 text-sky-300 px-2 py-3 rounded-full border border-blue-400/40 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 cursor-default text-xs">
                    Tailwind CSS
                  </span>
                 <span className="bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 text-sky-300 px-2 py-3 rounded-full border border-blue-400/40 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 cursor-default text-xs">
                    React.Js
                  </span>
                   <span className="bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 text-sky-300 px-2 py-3 rounded-full border border-blue-400/40 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 cursor-default text-xs">
                   Vercel
                  </span>
              </div>
              
              <a href="https://rojal-movies.vercel.app/" className="text-violet-300 flex text-sm items-center gap-2 hover:text-purple-500">
               View Project <MoveRight size={18}/>
              </a>
              </div>
            
            </div></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;