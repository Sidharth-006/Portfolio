import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";
import sidhImage from "../assets/sidha.jpeg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8 scroll-mt-24"
    >

      {/* 🔥 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

      {/* 🔵 Floating Blobs */}
      <div className="absolute w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] bg-green-500 rounded-full blur-3xl opacity-30 top-[-60px] left-[-60px] animate-pulse"></div>
      <div className="absolute w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] bg-blue-500 rounded-full blur-3xl opacity-30 bottom-[-60px] right-[-60px] animate-pulse"></div>

      {/* MAIN */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">

          {/* 🟢 PROFILE IMAGE */}
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 blur-lg opacity-70"></div>

            <img
              src={sidhImage}
              alt="profile"
              className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Let’s Connect
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 max-w-md">
            Have a project, idea, or opportunity? I’m always open to discussing new work.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5">

          {/* EMAIL */}
          <a
            href="mailto:yourgmail@gmail.com"
            className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition p-3 sm:p-4 md:p-5 rounded-xl border border-gray-700 hover:border-green-400"
          >
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <FaEnvelope className="text-xl sm:text-2xl md:text-3xl text-red-500" />
              <div>
                <p className="text-white font-semibold text-xs sm:text-sm md:text-base">Email</p>
                <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm break-all">
                  yourgmail@gmail.com
                </p>
              </div>
            </div>
            <span className="text-green-400 text-sm sm:text-base md:text-lg">→</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition p-3 sm:p-4 md:p-5 rounded-xl border border-gray-700 hover:border-green-400"
          >
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <FaWhatsapp className="text-xl sm:text-2xl md:text-3xl text-green-500" />
              <div>
                <p className="text-white font-semibold text-xs sm:text-sm md:text-base">WhatsApp</p>
                <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">
                  Chat directly
                </p>
              </div>
            </div>
            <span className="text-green-400 text-sm sm:text-base md:text-lg">→</span>
          </a>

          {/* PHONE */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition p-3 sm:p-4 md:p-5 rounded-xl border border-gray-700 hover:border-green-400"
          >
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <FaPhone className="text-xl sm:text-2xl md:text-3xl text-blue-500" />
              <div>
                <p className="text-white font-semibold text-xs sm:text-sm md:text-base">Phone</p>
                <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>
            <span className="text-green-400 text-sm sm:text-base md:text-lg">→</span>
          </a>

        </div>
      </div>
    </section>
  );
}