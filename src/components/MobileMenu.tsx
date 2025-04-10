interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all ease-in-out z-400 flex justify-center items-center flex-col bg-[rgba(10,10,10,0.8)] gap-5 ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto "
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
      >
        &times;
      </button>
      <a
        className={`text-white text-2xl font-semibold m-4 `}
        onClick={() => setMenuOpen(false)}
        href="#home"
      >
        Home
      </a>
      <a
        className={`text-white text-2xl font-semibold m-4 `}
        onClick={() => setMenuOpen(false)}
        href="#about"
      >
        About
      </a>
      <a
        className={`text-white text-2xl font-semibold m-4 `}
        onClick={() => setMenuOpen(false)}
        href="#about"
      >
        Projects
      </a>
      <a
        className={`text-white text-2xl font-semibold m-4 `}
        onClick={() => setMenuOpen(false)}
        href="#about"
      >
        Contact
      </a>
    </div>
  );
};

export default MobileMenu;
