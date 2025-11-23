import React from "react";
import useProjects from "../../Hooks/useProjects";
import { Link } from "react-router-dom";
import { FaArrowUpRightDots, FaLinkSlash } from "react-icons/fa6";

export default function AllProjects() {
  const [projects] = useProjects();
  return (
    <div className="pt-16 ">
      <div className="bg-gradient-to-r from-blue-950 via-black to-purple-900 min-h-screen">
        <h1 className="text-5xl text-center p-8 font-bold  text-cyan-500">
          ---My All Projects---{" "}
        </h1>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="container grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 "
        >
          {projects.map((project) => (
            <div key={project.id}>
              <div className="card bg-gray-200/5 h-[400px] transition-all hover:scale-105 hover:shadow-pink-500 duration-500  shadow-sm mb-10">
                <figure>
                  <img src={project.image} className="h-[300px] transition-all duration-300 hover:scale-110 w-full rounded-md" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-cyan-300">{project.name}</h2>
                  <p>
                    {project.features.map((feature) => (
                      <ul>
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
    </div>
  );
}
