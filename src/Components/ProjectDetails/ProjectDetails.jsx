import React from "react";
import { useParams } from "react-router-dom";
import useProjects from "../../Hooks/useProjects";
import { FaGithub, FaServer, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { id } = useParams();
  const [projects] = useProjects();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-3xl text-red-500 font-semibold">
        Project Not Found!
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white py-10 md:py-20 px-5 md:px-16 flex flex-col items-center justify-center overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl w-full rounded-3xl bg-white/5 border border-purple-700/40 backdrop-blur-lg shadow-2xl shadow-purple-900/40 overflow-hidden"
      >
        {/* Project Image */}
        <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <h1 className="absolute bottom-6 left-6 text-4xl md:text-5xl font-extrabold text-purple-300 drop-shadow-lg">
            {project.name}
          </h1>
        </div>

        {/* Project Details */}
        <div className="p-6 md:p-10 space-y-6">
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            {project.description}
          </motion.p>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-300 mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-purple-800/40 border border-purple-600/50 rounded-full text-purple-200 text-sm font-medium hover:bg-purple-700/60 transition"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-semibold text-green-400 mb-3">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {project.features.map((feature, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: "#c084fc" }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <a
              href={project.github_clint}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-full transition-all duration-300 shadow-md shadow-purple-900"
            >
              <FaGithub /> Frontend Code
            </a>

            {project.github_server && (
              <a
                href={project.github_server}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-full transition-all duration-300 shadow-md shadow-blue-900"
              >
                <FaServer /> Backend Code
              </a>
            )}

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-800 rounded-full transition-all duration-300 shadow-md shadow-green-900"
            >
              <FaLink /> Live Project
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
