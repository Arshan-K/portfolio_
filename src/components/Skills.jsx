import { useEffect, useState } from "react";

export default function Skills() {
  const skills = [
    { name: "React", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Ruby on Rails", level: 75 },
    { name: "Next.js", level: 70 },
    { name: "TypeScript", level: 65 },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300); // smooth trigger
  }, []);

  return (
    <section className="py-20 px-4 md:px-10 bg-dark">
      <h2 className="text-4xl md:text-5xl font-bold text-gold text-center">
        Skills
      </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

        {skills.map((skill, index) => (
          <div key={index} className="p-4 rounded-xl bg-black/70 border border-gold shadow-md hover:shadow-gold/40 transition">
            
            {/* Skill Name */}
            <div className="flex justify-between mb-2">
              <span className="text-gold font-semibold">{skill.name}</span>
              <span className="text-yellow">{skill.level}%</span>
            </div>

            {/* Bar Container */}
            <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
              
              {/* Animated bar */}
              <div
                className="h-3 bg-gradient-to-r from-yellow to-orange transition-all duration-1000"
                style={{ width: animate ? `${skill.level}%` : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Icons Grid */}
      <h3 className="text-3xl text-center text-gold font-bold mt-20">Tools & Technologies</h3>

      <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
        {["React", "Rails", "Git", "Figma", "PostgreSQL", "Node.js"].map((tool, i) => (
          <div
            key={i}
            className="p-4 bg-black/40 border border-gold rounded-xl 
                       text-center text-gold font-semibold
                       hover:shadow-gold/40 hover:-translate-y-1 
                       transition duration-300 cursor-pointer"
          >
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}
