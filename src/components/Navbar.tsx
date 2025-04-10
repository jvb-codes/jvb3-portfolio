import { useEffect } from "react";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className={`w-full h-16 fixed top-0 border-b border-white/10 border bg-[hsla(0, 0%, 3.9215686274509802%, 0.8)] backdrop-blur-lg shadow-lg z-40`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="">
            <span className="text-blue-500">jvb3</span>.codes
          </a>
          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              className="text-gray-300 hover:text-white trnasition-colors"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-gray-300 hover:text-white trnasition-colors"
              href="#about"
            >
              About
            </a>
            <a
              className="text-gray-300 hover:text-white trnasition-colors"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-gray-300 hover:text-white trnasition-colors"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
