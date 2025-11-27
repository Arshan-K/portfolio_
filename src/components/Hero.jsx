export default function Hero() {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
  
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gold tracking-wide">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow to-orange">
            CodeKing
          </span>
        </h1>
  
        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-2xl">
          A passionate developer building  
          <span className="text-yellow font-semibold"> bold</span>,  
          <span className="text-orange font-semibold"> modern</span>, and  
          <span className="text-gold font-semibold"> luxurious</span> digital experiences.
        </p>
  
        {/* Buttons */}
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 bg-gold text-black font-bold rounded-md hover:bg-yellow transition">
            Hire Me
          </button>
  
          <button className="px-6 py-3 border border-gold text-gold font-bold rounded-md hover:bg-gold hover:text-black transition">
            View Projects
          </button>
        </div>
  
        {/* Glow ring behind text (subtle effect) */}
        <div className="absolute w-[250px] h-[250px] bg-orange/20 rounded-full blur-[120px] -z-10"></div>
      </section>
    );
  }
  