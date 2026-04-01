import {
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import { SiTailwindcss, SiRender } from "react-icons/si";

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 sm:px-8"
    >

      {/* 🌈 LIGHT ANIMATED BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 animate-gradient"></div>

      {/* ✨ LIGHT GLOW OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_40%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl w-full text-center">

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-10">
          My Tech Stack 🚀
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">

          {[
            { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
            { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
            { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
            { icon: <FaReact className="text-cyan-400" />, name: "React" },
            { icon: <FaPython className="text-blue-500" />, name: "Python" },
            { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
            { icon: <FaGithub className="text-gray-800" />, name: "GitHub" },
            { icon: <SiRender className="text-purple-500" />, name: "Render" },
          ].map((tech, index) => (
            <div
              key={index}
              className="
                group 
                relative 
                bg-white/70 
                backdrop-blur-lg 
                border border-gray-200 
                rounded-2xl 
                p-6 
                flex flex-col items-center justify-center 
                shadow-xl 
                transition 
                hover:scale-105 hover:border-green-400
              "
            >

              {/* 🔥 3D Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-300 to-blue-300 opacity-0 group-hover:opacity-30 blur-xl transition"></div>

              {/* ICON */}
              <div className="text-4xl sm:text-5xl mb-3 transform group-hover:-translate-y-2 transition">
                {tech.icon}
              </div>

              {/* NAME */}
              <p className="text-gray-800 text-sm sm:text-base font-semibold">
                {tech.name}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}