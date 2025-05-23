import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <RevealOnScroll>
      <section
        id="home"
        className="min-h-screen relative flex justify-center items-center"
      >
        <div className="text-center z-10 px-4 ">
          <h1 className="text-5xl md:text-7xl mb-6 font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
            Hi, I'm James.
          </h1>

          <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            placeat fugiat aperiam, reprehenderit aspernatur, non molestiae
            quaerat commodi porro harum modi sed vitae nisi explicabo! Impedit
            magnam doloribus facere ducimus?
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overlow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transtion-all duration-200 hover:-translate-y-0.5  overlow-hidden overlow-hidden hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2) hover:bg-blue-500/10"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default Home;
