import sidhImage from "../assets/sidh6.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* RIGHT GREEN BACKGROUND */}
      <div className="absolute top-0 right-0 w-[60%] h-full hero-bg"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center px-5 sm:px-10 z-10">

        {/* LEFT */}
        <div>
          <h4 className="text-white-500 text-xl mb-3">Hello I'm</h4>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Sidharth
          </h1>

          <p className="text-gray-700 text-base md:text-lg mb-2">
            Professional Freelance Web Developer
          </p>

          <p className="text-gray-500 mb-6 max-w-md">
            I design and develop modern, clean and responsive websites using latest technologies.
          </p>

          <a href="#contact">
            <button className="bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition">
              Hire Me
            </button>
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          
          {/* 🔥 IMAGE WRAPPER (NEW) */}
          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 blur-2xl opacity-60"></div>

            <img
              src={sidhImage}
              alt="profile"
              className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-white shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}