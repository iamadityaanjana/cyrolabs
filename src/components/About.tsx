'use client'

export default function About() {
  return (
    <div 
      id="about" 
      className="w-full bg-black py-16 md:py-24 px-4 md:px-8 lg:px-16 font-[var(--font-inter)] animate-on-scroll"
      style={{
        background: "linear-gradient(to bottom, rgba(15,15,15,1) 0%, rgba(0,0,0,1) 100%)",
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease"
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* About Header */}
        <div className="flex justify-center items-center mb-16">
          <div className="h-[1px] bg-orange-500/30 w-16 md:w-28 mr-6"></div>
          <h2 className="text-white text-4xl md:text-5xl text-center font-normal tracking-wider uppercase">
            ABOUT
          </h2>
          <div className="h-[1px] bg-orange-500/30 w-16 md:w-28 ml-6"></div>
        </div>
        
        {/* About Content */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            XION House of Builders is an incubator program designed to support and accelerate promising projects building on the XION blockchain. 
            Through mentorship, funding, and technical support, we help turn innovative ideas into successful applications.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Feature 1 */}
          <div className="bg-zinc-900/40 p-8 rounded-sm border-b-2 border-orange-500 hover:bg-zinc-800/60 transition-all duration-300 hover-lift">
            <h3 className="text-orange-500 text-2xl font-medium mb-4">Mentorship</h3>
            <p className="text-gray-400">
              Access to industry experts who provide guidance on technical challenges, business strategy, and market fit.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-zinc-900/40 p-8 rounded-sm border-b-2 border-orange-500 hover:bg-zinc-800/60 transition-all duration-300 hover-lift">
            <h3 className="text-orange-500 text-2xl font-medium mb-4">Funding</h3>
            <p className="text-gray-400">
              Selected projects receive financial support to accelerate development and growth.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-zinc-900/40 p-8 rounded-sm border-b-2 border-orange-500 hover:bg-zinc-800/60 transition-all duration-300 hover-lift">
            <h3 className="text-orange-500 text-2xl font-medium mb-4">Network</h3>
            <p className="text-gray-400">
              Connect with a community of builders, investors, and supporters in the blockchain ecosystem.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-zinc-900/40 p-8 rounded-sm border-b-2 border-orange-500 hover:bg-zinc-800/60 transition-all duration-300 hover-lift">
            <h3 className="text-orange-500 text-2xl font-medium mb-4">Technical Support</h3>
            <p className="text-gray-400">
              Direct access to XION's technical team to help solve complex blockchain challenges.
            </p>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-zinc-900/40 p-8 rounded-sm border-b-2 border-orange-500 hover:bg-zinc-800/60 transition-all duration-300 hover-lift">
            <h3 className="text-orange-500 text-2xl font-medium mb-4">Marketing</h3>
            <p className="text-gray-400">
              Marketing support to increase visibility and user acquisition for your project.
            </p>
          </div>
          
          {/* Feature 6 */}
          <div className="bg-zinc-900/40 p-8 rounded-sm border-b-2 border-orange-500 hover:bg-zinc-800/60 transition-all duration-300 hover-lift">
            <h3 className="text-orange-500 text-2xl font-medium mb-4">Launch Support</h3>
            <p className="text-gray-400">
              Comprehensive support for successful product launch and market entry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
