import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  const projects = [
    {
      name: "Mock Eiken Interview",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab pariatur quae corrupti, accusamus reprehenderit inventore quam aliquam rem quisquam.",
      skills: ["React", "Typescript", "OpenAI API"],
      link: "home",
    },
    {
      name: "Snakes and Ladder",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab pariatur quae corrupti, accusamus reprehenderit inventore quam aliquam rem quisquam.",
      skills: ["React", "Typescript", "OpenAI API"],
      link: "home",
    },
    {
      name: "Jumbled",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab pariatur quae corrupti, accusamus reprehenderit inventore quam aliquam rem quisquam.",
      skills: ["React", "Typescript", "OpenAI API"],
      link: "home",
    },
    {
      name: "Blanks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab pariatur quae corrupti, accusamus reprehenderit inventore quam aliquam rem quisquam.",
      skills: ["React", "Typescript", "OpenAI API"],
      link: "home",
    },
  ];

  return (
    <RevealOnScroll>
      <section
        id="projects"
        className="min-h-screen relative flex justify-center items-center py-20 "
      >
        <div className="max-w-3xl mx-auto px-4">
          <h1 className=" text-center  text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
            {projects.map((project) => (
              <>
                <div
                  key={project.name}
                  className="border border-gray-50/10 p-8 rounded-xl transform hover:-translate-y-1 transition-all mb-2 flex flex-col gap-4"
                >
                  <p className="font-bold text-lg">{project.name}</p>
                  <p className="text-gray-500">{project.description}</p>
                  <div className="flex">
                    {project.skills.map((skill) => (
                      <div
                        key={skill}
                        className="p-2  bg-blue-500/10  hover:bg-blue-500/20 rounded-xl text-xs text-blue-500 font-semibold"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#home"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project<span className="ml-2">&rarr;</span>
                  </a>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default Projects;
