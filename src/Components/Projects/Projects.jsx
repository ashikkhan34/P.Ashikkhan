import React from "react";
import useProjects from "../../Hooks/useProjects";
import { Link } from "react-router-dom";
import { FaArrowUpRightDots, FaLinkSlash } from "react-icons/fa6";

export default function Projects() {
  const [projects] = useProjects();
  return (
    <div className="bg-gradient-to-r from-blue-950 via-black to-purple-900 py-10">
      <h1 className="text-5xl text-center p-8 font-bold  text-cyan-500">
        My Projects{" "}
        <p className="w-80  mx-auto text-blue-500 mt-4 active"></p>
      </h1>

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5"
      >
        {projects.slice(0, 3).map((project) => (
          <div key={project.id}>
            <div className="card bg-gray-200/5 h-[400px] hover:scale-105 hover:ease-in-out transition-all hover:transform hover:duration-1000 hover:shadow-pink-600  shadow-sm">
              <figure>
                <img src={project.image} className="h-[300px] transition-all duration-300 hover:scale-110 w-full rounded-md" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-cyan-300">{project.name}</h2>
                <p>
                  {project.features.map((feature) => (
                    <ul key={project.id}>
                      <li>~ {feature}</li>
                    </ul>
                  ))}
                </p>
                <div className="card-actions justify-between">
                  <Link to={project.live}>
                    {" "}
                    <button className="btn bg-transparent hover:border-green-600 text-green-600 flex items-center gap-3">Live  <FaLinkSlash /></button>
                  </Link>
                  <Link to={`/projectDetails/${project.id}`}>
                    {" "}
                    <button className="btn  hover:border-blue-600 bg-transparent text-purple-500 flex items-center gap-3">Details More <FaArrowUpRightDots /></button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
