export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-10 py-6 flex justify-between items-center">

      {/* LOGO (UNCHANGED ✅) */}
      <h1 className="text-xl font-bold">
        <span className="text-gray-800">Free</span>
        <span className="text-[#00c6a7]">lancer</span>
      </h1>

      {/* MENU (ONLY THIS CHANGED ✅) */}
      <ul className="hidden md:flex gap-8 text-white font-medium">
        <li>
          <a href="#home" className=" border-white">
            Home
          </a>
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#projects">Portfolio</a></li>
        <li><a href="#experiance">Experience</a></li>
      </ul>

    </nav>
  );
}