import { motion } from "framer-motion";
import useProjects from "../../Hooks/useProjects";
import { Link } from "react-router-dom";
import { FaArrowUpRightDots, FaLinkSlash } from "react-icons/fa6";

export default function Projects() {
  const [projects] = useProjects();
  return (
    <div className=" py-10 container mx-auto">
      <h1 className="md:text-5xl text-2xl text-center p-8 font-bold  text-cyan-500">
        Favorite Projects{" "}
        <p className="md:w-96 w-56   mx-auto text-blue-500 mt-4 active"></p>
      </h1>

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5"
      >
        {projects.slice(0, 3).map((project) => (
          <div key={project.id}>
            <div className="card bg-gray-200/10  backdrop-blur-sm h-[400px] transition-all hover:scale-105 hover:shadow-pink-500 duration-500  shadow-sm mb-10  ">
              <figure>
                <img
                  src={project.image}
                  className="h-[200px] transition-all duration-300 hover:scale-110 w-full rounded-md"
                  alt="Shoes"
                />
              </figure>
              <div className="px-2 py-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 bg-gray-200/10  rounded-full  text-xs hover:bg-purple-700/60 transition"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <h2 className="card-title text-cyan-300 mt-2">
                  {project.name}
                </h2>
                <p className="text-xs text-gray-400 pt-2">
                  {project?.description?.length > 200
                    ? `${project.description.slice(0, 200)}...`
                    : project.description}
                </p>
                <div className="flex bottom-0 pt-6 justify-between">
                  <Link to={project.live}>
                    {" "}
                    <button className="btn bg-transparent hover:border-green-600 text-green-600 flex items-center gap-3">
                      Live <FaLinkSlash />
                    </button>
                  </Link>
                  <Link to={`/projectDetails/${project.id}`}>
                    {" "}
                    <button className="btn  hover:border-blue-600 bg-transparent text-purple-500 flex items-center gap-3">
                      Details More <FaArrowUpRightDots />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex justify-center py-12">
        <Link to="/allProjects">
          <a
            href="#_"
            class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-cyan-500 group"
          >
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                class="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                class="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white text-purple-600">
              See more projects{" "}
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}
