'use client'

import { useState } from 'react';

export default function Application() {
  const [showForm, setShowForm] = useState(false);
  
  const toggleForm = () => {
    setShowForm(!showForm);
    
    // Wait for animation to complete before focusing on first input
    if (!showForm) {
      setTimeout(() => {
        const firstInput = document.getElementById('firstName');
        if (firstInput) {
          firstInput.focus();
        }
      }, 300);
    }
  };
  
  return (
    <div 
      id="apply" 
      className="w-full bg-black py-16 md:py-24 px-4 md:px-8 lg:px-16 font-[var(--font-inter)] animate-on-scroll"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(10,10,10,1) 100%)",
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease"
      }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Apply Header */}
        <div className="flex justify-center items-center mb-16">
          <div className="h-[1px] bg-orange-500/30 w-16 md:w-28 mr-6"></div>
          <h2 className="text-white text-4xl md:text-5xl text-center font-normal tracking-wider uppercase">
            APPLY
          </h2>
          <div className="h-[1px] bg-orange-500/30 w-16 md:w-28 ml-6"></div>
        </div>
        
        {/* Apply Content */}
        <div className="text-center mb-10">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Ready to build the future on XION? Apply now for our next batch of House of Builders program.
          </p>

          <button 
            onClick={toggleForm}
            className="bg-orange-500 text-white py-3.5 px-8 rounded-md font-medium transition-all hover:bg-orange-600 inline-block"
          >
            {showForm ? 'Hide Application Form' : 'Start Application'}
          </button>
        </div>

        {/* Application Form */}
        <form 
          className={`space-y-6 transition-all duration-300 ease-in-out ${showForm ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-white text-sm font-medium mb-2">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-white text-sm font-medium mb-2">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
              placeholder="Enter your email address"
              required
            />
          </div>
          
          <div>
            <label htmlFor="projectIdea" className="block text-white text-sm font-medium mb-2">Project Idea</label>
            <textarea 
              id="projectIdea" 
              rows={4} 
              className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
              placeholder="Briefly describe your project idea"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="experience" className="block text-white text-sm font-medium mb-2">Relevant Experience</label>
            <textarea 
              id="experience" 
              rows={3} 
              className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
              placeholder="Tell us about your relevant experience"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="socialLinks" className="block text-white text-sm font-medium mb-2">Social Links</label>
            <input 
              type="text" 
              id="socialLinks" 
              className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
              placeholder="GitHub, Twitter, LinkedIn, etc."
            />
          </div>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="terms" 
              className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-600 rounded" 
              required
            />
            <label htmlFor="terms" className="ml-3 block text-sm text-gray-400">
              I agree to the <a href="#" className="text-orange-500 hover:text-orange-400">Terms of Service</a> and <a href="#" className="text-orange-500 hover:text-orange-400">Privacy Policy</a>
            </label>
          </div>
          
          <div>
            <button 
              type="submit" 
              className="w-full bg-orange-500 text-white py-3 px-8 rounded-md font-medium transition-all hover:bg-orange-600 inline-block"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
