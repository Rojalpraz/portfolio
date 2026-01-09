import React from "react";

function Hero() {
  return (
    <section
      id="#"
      className="w-full relative flex flex-col  items-center  justify-center pt-24  min-h-screen"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className=" mx-6 max-w-3xl">
          <div className="space-y-5">
            <h1 className=" text-5xl md:text-6xl text-violet-300 font-semibold opacity-0 animate-[fadeIn_1s_ease-in_0.3s_forwards]">
              Hi, I am Rojal Prajapati
            </h1>
            <span className="text-white text-base md:text-xl opacity-0 animate-[fadeIn_1s_ease-in_1.5s_forwards] ">
              A passionate front-end developer creating responsive,
              user-friendly, and interactive websites. Explore my portfolio to
              see my work.
            </span>
          </div>
          <div className="inline-flex gap-6 pt-6 opacity-0 animate-[fadeIn_1s_ease-in_1.5s_forwards]">
            <a href="#project">
            <button className="bg-violet-300 rounded-2xl md:rounded-3xl px-5 py-3 md:px-7 md:py-4">
              View My Projects
            </button>
            </a>
            <a href="/CV.pdf" download="CV.pdf">
         
              <button className="bg-white rounded-2xl  md:rounded-3xl py-3 px-5 md:py-4 md:px-7 ">
                My Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
