import sidhImage from "../assets/sidh6.webp";

export default function Hero() {
  return (
    <section className="relative py-12 md:min-h-[90vh] flex items-center md:items-center overflow-hidden px-4 sm:px-6">

      {/* GREEN BACKGROUND */}
      <div className="absolute top-0 right-0 w-[60%] h-full hero-bg hidden md:block"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center px-0 sm:px-6 md:px-10 z-10 gap-8">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h4 className="text-gray-500 text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
            Hello I'm
          </h4>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-3 sm:mb-4">
            Sidharth
          </h1>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-2">
            Professional Freelance Web Developer
          </p>

          <p className="text-gray-500 mb-4 sm:mb-6 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            I design and develop modern, clean and responsive websites using latest technologies.
          </p>

          <a href="#contact">
            <button className="bg-green-500 text-white px-5 py-2 sm:px-6 sm:py-3 rounded shadow hover:bg-green-600 transition text-sm sm:text-base">
              Hire Me
            </button>
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 blur-2xl opacity-60"></div>

            <img
              src={sidhImage}
              alt="profile"
              loading="eager"          // 🔥 instant load
              decoding="async"         // 🔥 smooth render
              fetchpriority="high"     // 🔥 browser priority
              className="relative 
              w-32 h-32 
              sm:w-48 sm:h-48 
              md:w-[380px] md:h-[380px] 
              object-cover rounded-full border-4 border-white shadow-2xl"
            />

          </div>
        </div>

      </div>
    </section>
  );
}