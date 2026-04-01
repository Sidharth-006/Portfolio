import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";
import sidhImage from "../assets/sidh.jpeg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-5 sm:px-8 scroll-mt-24"
    >

      {/* 🔥 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

      {/* 🔵 Floating Blobs */}
      <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-green-500 rounded-full blur-3xl opacity-30 top-[-80px] left-[-80px] animate-pulse"></div>
      <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-blue-500 rounded-full blur-3xl opacity-30 bottom-[-80px] right-[-80px] animate-pulse"></div>

      {/* MAIN */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">

          {/* 🟢 PROFILE IMAGE */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 blur-lg opacity-70"></div>

            <img
              src={sidhImage}
              alt="profile"
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let’s Connect
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-4 max-w-md">
            Have a project, idea, or opportunity? I’m always open to discussing new work.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">

          {/* EMAIL */}
          <a
            href="mailto:yourgmail@gmail.com"
            className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition p-4 sm:p-5 rounded-xl border border-gray-700 hover:border-green-400"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <FaEnvelope className="text-2xl sm:text-3xl text-red-500" />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Email</p>
                <p className="text-gray-400 text-xs sm:text-sm break-all">
                  yourgmail@gmail.com
                </p>
              </div>
            </div>
            <span className="text-green-400 text-lg">→</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition p-4 sm:p-5 rounded-xl border border-gray-700 hover:border-green-400"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <FaWhatsapp className="text-2xl sm:text-3xl text-green-500" />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">WhatsApp</p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Chat directly
                </p>
              </div>
            </div>
            <span className="text-green-400 text-lg">→</span>
          </a>

          {/* PHONE */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition p-4 sm:p-5 rounded-xl border border-gray-700 hover:border-green-400"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <FaPhone className="text-2xl sm:text-3xl text-blue-500" />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Phone</p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>
            <span className="text-green-400 text-lg">→</span>
          </a>

        </div>
      </div>
    </section>
  );
}