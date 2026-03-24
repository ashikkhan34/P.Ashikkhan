import { motion } from "framer-motion";
import useProjects from "../../Hooks/useProjects";
import { Link } from "react-router-dom";
import { FaArrowUpRightDots, FaLinkSlash } from "react-icons/fa6";

export default function AllProjects() {
  const [projects] = useProjects();
  return (
    <div className="pt-16 container mx-auto ">
      <div>
        <h1 className="md:text-5xl text-2xl text-center p-8 font-bold  text-cyan-500">
          ---My All Projects---{" "}
        </h1>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="container grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 rounded-md"
        >
          {projects.map((project) => (
            <div key={project.id}>
              <div className="card bg-gray-200/10  backdrop-blur-sm h-[400px] transition-all hover:scale-105 hover:shadow-pink-500 duration-500  shadow-sm mb-10  ">
                <figure>
                  <img
                    src={project.image}
                    className="h-[200px] transition-all duration-300 hover:scale-110 w-full rounded-md"
                    alt="Shoes"
                  />
                </figure>
                <div className="p-2">
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
      </div>
    </div>
  );
}
