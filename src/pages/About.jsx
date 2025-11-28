export default function About() {
  return (
    <section className="bg-dark min-h-screen flex items-center px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - PROFILE IMAGE */}
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src="/Arshan.png" // change this to your image path
              alt="profile"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-gold shadow-lg group-hover:shadow-gold/50 transition-all duration-300"
            />

          </div>
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gold tracking-wide">
            About Me
          </h1>

          <p className="mt-6 text-gray-300 leading-relaxed text-lg">
            I am a passionate full-stack developer who loves building fast,
            elegant and user-centric digital experiences. I focus on crafting
            clean UI, smooth animations, and highly optimized code.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            With experience across React, Tailwind, and Ruby on Rails, I turn
            real ideas into modern, beautiful and scalable web applications.
          </p>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="bg-black/60 border border-gold p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-gold">2+</div>
              <div className="text-sm text-gray-300">Years Exp</div>
            </div>

            <div className="bg-black/60 border border-gold p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-gold">15+</div>
              <div className="text-sm text-gray-300">Projects</div>
            </div>

            <div className="bg-black/60 border border-gold p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-gold">10+</div>
              <div className="text-sm text-gray-300">Tech Stack</div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex gap-4">
            <a
              href="mailto:arsh.kcode@gmail.com"
              className="px-6 py-3 bg-gold text-black font-semibold rounded-md hover:bg-yellow transition"
            >
              Hire Me
            </a>

            <a
              href="/ArshanK_Resume_.pdf" // put your resume in public folder
              download
              className="px-6 py-3 border border-gold text-gold font-semibold rounded-md hover:bg-gold hover:text-black transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
