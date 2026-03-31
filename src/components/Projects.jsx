import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// ✅ IMPORT YOUR IMAGES (assets folder)
import p1 from "../assets/project1.jpeg";
import p2 from "../assets/project2.jpeg";
import p3 from "../assets/project3.jpeg";

export default function Projects() {

  // 🔥 PROJECT DATA (name + image + links)
  const projects = [
    {
      title: "Explor World",
      image: p1,
      live: "https://sidharth-006.github.io/Explor-World/",
      github: "https://github.com/Sidharth-006/Explor-World",
    },
    {
      title: "Quiz",
      image: p2,
      live: "https://sidharth-006.github.io/QUIZ/",
      github: "https://github.com/Sidharth-006/QUIZ",
    },
    {
      title: "Cafe",
      image: p3,
      live: "https://sidharth-006.github.io/SIDH-CAFE/",
      github: "https://github.com/Sidharth-006/SIDH-CAFE",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 project-bg"></div>

      <div className="relative max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Portfolio
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-white/20"
            >

              {/* IMAGE (UPDATED) */}
              <div className="h-40 rounded mb-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TITLE (UPDATED) */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-200 text-sm mb-4">
                This is a modern web project built using React and Tailwind CSS.
              </p>

              {/* BUTTONS */}
              <div className="flex gap-4">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#00c6a7] text-white px-4 py-2 rounded hover:bg-[#1e9e8f] transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  <FaGithub /> Code
                </a>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}