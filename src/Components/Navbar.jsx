import {Menu, X} from "lucide-react";
import React, {useState} from "react";

function Navbar() {
  const [isMobilemenuOpen, setIsMobilemenuOpen] = useState(false);

  return (
    <nav className=" fixed top-0 z-50   bg-zinc-950/50  w-full px-3 transition-all duration-300 py-6 border-b-gray-700/50 border-b backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex  justify-between items-center mx-4 md:mx-11">
          <div className=" font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-violet-300 text-lg md:text-2xl">
            ROJAL &nbsp; PRAJAPATI
          </div>

          <div className="hidden md:block">
            <div className="text-white flex gap-5">
              <a href="#">Home</a>
              <a href="#about">About</a>
              <a href="#project">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <button className="md:hidden text-white">
            {isMobilemenuOpen ? (
              <X onClick={() => setIsMobilemenuOpen(!isMobilemenuOpen)} />
            ) : (
              <Menu onClick={() => setIsMobilemenuOpen(!isMobilemenuOpen)} />
            )}
          </button>
        </div>
        {isMobilemenuOpen && (
          <div className="md:hidden pt-5 mx-4 text-white">
            <div className="flex items-center  flex-col gap-3">
              <a href="#" onClick={()=>setIsMobilemenuOpen(!isMobilemenuOpen)}>Home</a>
              <a href="#about"  onClick={()=>setIsMobilemenuOpen(!isMobilemenuOpen)}>About</a>
              <a href="#project" onClick={()=>setIsMobilemenuOpen(!isMobilemenuOpen)}>Projects</a>
              <a href="#contact"  onClick={()=>setIsMobilemenuOpen(!isMobilemenuOpen)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
