import React from 'react'
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react';
function Contact() {
   const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const section = document.getElementById('contact');
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
    <section id='contact' className={`${isVisible ? 'opacity-0 animate-[fadeIn_1s_ease-in_0.8s_forwards]' : 'opacity-0'} pt-20 mb-10 mt-12 w-full flex items-center justify-center `}>
      <div className='w-full'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-white mb-16'>Get in Touch</h2>
          
         
          <div className='flex flex-col md:flex-row items-center justify-center gap-6 mb-12'>
            <a 
              href='mailto:prazrojal@gmail.com' 
              className='flex items-center gap-4 px-8 py-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-smrounded-lg shadow-md hover:shadow-blue-400/40 border border-zinc-700 hover:border-zinc-600 w-full md:w-auto rounded-xl'
            >
              <Mail className='w-6 h-6 text-blue-400' />
              <span className='text-lg text-gray-200'>prazrojal@gmail.com</span>
            </a>
            
            <a 
              href='tel:+977 9862693884' 
              className='flex items-center gap-4 px-8 py-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-smrounded-lg shadow-md hover:shadow-emerald-400/40 border border-zinc-700 hover:border-zinc-600 w-full md:w-auto rounded-xl'
            >
              <Phone className='w-6 h-6 text-green-400' />
              <span className='text-lg text-gray-200'>+977 9862693884</span>
            </a>
          </div>
          
       
          <div className='flex items-center justify-center gap-6'>
            <a 
              href='https://github.com/Rojalpraz' 
             
              className='p-4  rounded-full transition-all duration-300 border border-violet-400 hover:border-zinc-600 hover:scale-110'
            >
              <Github className='w-7 h-7 text-gray-200' />
            </a>
            
            <a 
              href='https://www.linkedin.com/in/rojal-prajapati-b6aa52306/' 
             
              className='p-4  rounded-full   border border-violet-400 hover:border-zinc-600 hover:scale-110'
            >
              <Linkedin className='w-7 h-7 text-blue-400' />
            </a>
            
            <a 
              href='https://www.instagram.com/rojal_praz/' 
              
              className='p-4  rounded-full   border border-violet-400 hover:border-zinc-600 hover:scale-110'
            >
              <Instagram className='w-7 h-7 text-pink-400' />
            </a>
          </div>
        </div>
        </div>
            <div className='w-full mt-16'>
          <div className='border-t border-gray-700 pt-8 '>
            <p className='text-gray-400 text-center'>
              © 2025 Rojal Prajapati. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
     
    </section>
  )
}

export default Contact;