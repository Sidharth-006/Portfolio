import sidhImage from "../assets/sidh.jpeg";

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
          <img
            src={sidhImage}
            alt="profile"
            className="w-64 sm:w-80 md:w-[450px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}