import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontEndSkills = ["React", "TypeScript", "TailwindCSS"];

  const backEndSkills = ["MongoDB", "Node.js"];

  return (
    <RevealOnScroll>
      <section
        id="about"
        className="min-h-screen relative flex justify-center items-center py-20 "
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className=" text-center  text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-10">
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab
              pariatur quae corrupti, accusamus reprehenderit inventore quam
              aliquam rem quisquam. Quis, ad? Culpa id dolores quae velit
              consequatur sapiente totam.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="ml-6 mb-10">
                <h3 className="font-bold mb-6">Front End</h3>
                <div>
                  {frontEndSkills.map((skill) => (
                    <span
                      key={skill}
                      className="p-2 mx-1  bg-blue-500/10  hover:bg-blue-500/20 rounded-xl text-xs text-blue-500 font-semibold "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="ml-6">
                <h3 className="font-bold mb-6">Back End</h3>
                <div>
                  {backEndSkills.map((skill) => (
                    <span
                      key={skill}
                      className="p-2 mx-1  bg-blue-500/10  hover:bg-blue-500/20 rounded-xl text-xs text-blue-500 font-semibold "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="border border-gray-50/10 rounded-xl p-8 transition-all transform hover:-translate-y-1">
              <h3 className="font-bold mb-6">
                <span className="mr-1">🏫</span>Education
              </h3>
              <ul className="text-xs">
                <li className="list-disc ml-8 mb-2">
                  <span className="font-bold">Japanese</span> - Cornell
                  University College (2003-2004)
                </li>

                <li className="list-disc ml-8 mb-2">
                  <span className="font-bold">B.S. in Literature</span> -
                  Flagler College (2000-2002)
                </li>

                <li className="list-disc ml-8">
                  <span className="font-bold">A.A. in Literature</span> -
                  Manatee Community College (1998-2000)
                </li>
              </ul>
            </div>
            <div className="border border-gray-50/10 rounded-xl p-8 transition-all transform hover:-translate-y-1">
              <h3 className="font-bold mb-6">
                <span className="mr-1">💼</span>
                Work Experience
              </h3>
              <ul className="text-xs">
                <li className="list-disc ml-8">
                  <span>NOVA Holdings</span> - English Teacher (2004-Present)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default About;
