import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
import sidhImage from "../assets/sidh1.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-[#f5f7f9] flex items-center"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex justify-center perspective"
        >
          <img
            src={sidhImage}
            alt="Sidharth"
            className="w-[300px] md:w-[400px] rounded-xl shadow-2xl"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>

          <p className="text-gray-600 mb-4">
            I'm a passionate MERN Stack Developer focused on building modern,
            responsive and user-friendly web applications.
          </p>

          <p className="text-gray-600 mb-6">
            I love creating clean UI and smooth user experiences.
          </p>

          {/* SOCIAL + WEBSITE ICONS */}
          <div className="flex gap-6 mb-6 text-2xl">

            <a
              href="https://github.com/Sidharth-006"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-black transition transform hover:scale-125"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sidharth-kumar-singh-521bb6309"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 transition transform hover:scale-125"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/__mr_sidharth_06?igsh=djA2MGlvMHhxZ2ox"
              target="_blank"
              rel="noreferrer"
              className="text-pink-500 hover:text-pink-700 transition transform hover:scale-125"
            >
              <FaInstagram />
            </a>

            <a
              href="https://dashboard.render.com/"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:text-green-700 transition transform hover:scale-125"
            >
              <FaGlobe />
            </a>

          </div>

          {/* SKILLS */}
          <div className="space-y-4">

            <div>
              <p className="flex justify-between text-sm text-gray-700">
                <span>React</span>
                <span>90%</span>
              </p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-green-500 h-2 rounded w-[90%]"></div>
              </div>
            </div>

            <div>
              <p className="flex justify-between text-sm text-gray-700">
                <span>Node.js</span>
                <span>80%</span>
              </p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-green-500 h-2 rounded w-[80%]"></div>
              </div>
            </div>

            <div>
              <p className="flex justify-between text-sm text-gray-700">
                <span>MongoDB</span>
                <span>75%</span>
              </p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-green-500 h-2 rounded w-[75%]"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}