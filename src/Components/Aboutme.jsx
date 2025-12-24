import {GraduationCap, Code2} from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";

function Aboutme() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('about');
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
    <section
      id="about"
      className="scroll-mt-20 py-20 w-full relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h1 className="text-white font-bold text-4xl md:text-5xl pb-7 mb-3">
            About <span className="text-violet-300">Me</span>
          </h1>
        </div>

        <div className="lg:flex gap-10 justify-around mx-5 lg:mx-10 py-2">
     
          <div className="lg:w-1/2 space-y-6">
            <div className={`bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 shadow-xl hover:shadow-violet-500/20 transition-all duration-300 ${isVisible ? 'opacity-0 animate-[fadeIn_1s_ease-in_0.3s_forwards]' : 'opacity-0'}`}>
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-violet-300" size={28} />
                <h3 className="text-xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-400 text-base md:text-lg ">
                I am{" "}
                <span className="text-violet-300 font-semibold">
                  Rojal Prajapati
                </span>
                , a dedicated BSc. CSIT student at Tribhuwan University with a
                passion for front-end development, modern technology, and
                exploring Artificial Intelligence/Machine Learning.
              </p>
            </div>

            <div className={`bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-sm p-8 rounded-3xl border border-violet-500/30 shadow-xl hover:shadow-violet-500/30 transition-all duration-300 hover:scale-[1.02] ${isVisible ? 'opacity-0 animate-[fadeIn_1s_ease-in_0.8s_forwards]' : 'opacity-0'}`}>
              <div className="flex items-start space-x-5">
                <div className="bg-gradient-to-r from-violet-500 to-purple-500 p-4 rounded-2xl shadow-lg">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-white font-bold text-lg">
                    Education
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Bachelor of Science in Computer Science and Information
                    Technology
                    <span className="block text-violet-300 font-medium mt-1">
                      2024 - 2028
                    </span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                   Swastik College, Tribhuwan University
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className={`bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 shadow-xl ${isVisible ? 'opacity-0 animate-[fadeIn_1s_ease-in_1.3s_forwards]' : 'opacity-0'}`}>
              <h2 className="text-white lg:text-left text-center font-bold text-2xl mb-6 ">
                Technical Skills
              </h2>

              <div className="space-y-3">
                <div className="flex  justify-center lg:justify-start gap-3">
                  <span className=" bg-gradient-to-r from-zinc-800/20 to-zinc-950/20 text-purple-300 px-6 py-3 rounded-full border border-purple-400/40 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 cursor-default font-medium">
                    HTML5
                  </span>
                  <span className=" bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 text-sky-300 px-6 py-3 rounded-full border border-blue-400/40 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 cursor-default font-medium">
                    CSS
                  </span>
                  <span className="bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 text-purple-300 px-6 py-3 rounded-full border border-purple-400/40 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 cursor-default font-medium">
                    JavaScript
                  </span>
                </div>

                <div className="flex  justify-center lg:justify-start gap-3">
                  <span className="bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 text-sky-300 px-6 py-3 rounded-full border border-blue-400/40 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 cursor-default font-medium">
                    Tailwind CSS
                  </span>
                  <span className=" bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 text-purple-300 px-6 py-3 rounded-full border border-violet-400/40 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 cursor-default font-medium">
                    React.Js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;