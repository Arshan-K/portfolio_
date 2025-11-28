export default function Projects() {
    const projects = [
      {
        title: "TalentTest.io",
        desc: "Custom code compiler, mock tests, referral system, and admin tools.",
        tech: ["React", "Tailwind", "Rails", "Sidekiq"],
        link: "https://TalentTest.io"
      },
      {
        title: "Gym Trainer App",
        desc: "Workout tracker app with categories, calories system, and insights.",
        tech: ["React", "Rails", "Redux"],
        link: "https://github.com/Arshan-K"
      },
      {
        title: "Teacher Management Interface",
        desc: "Next.js + Tailwind interface with graphs, histograms, and insights.",
        tech: ["Next.js", "Tailwind", "TypeScript"],
        link: "https://github.com/Arshan-K"
      },
    ];
  
    return (
      <section className="py-20 px-4 md:px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gold text-center">
          Projects
        </h2>
  
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, index) => (
            <div
              key={index}
              className="bg-black/80 border border-gold rounded-xl p-6 shadow-lg 
                         hover:shadow-gold/40 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-gold">{p.title}</h3>
              <p className="text-gray-300 mt-3">{p.desc}</p>
  
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-yellow/20 text-yellow rounded-md text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
  
              <a
                href={p.link}
                className="inline-block mt-5 px-5 py-2 border border-gold text-gold 
                           hover:bg-gold hover:text-black rounded-md transition"
                target="_blank" rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  