import React from 'react'
import { useParams } from 'react-router-dom';
import useProjects from '../../Hooks/useProjects';
import { FaLink } from 'react-icons/fa';

export default function ProjectDetails() {
    const { id } = useParams();
    const [projects] = useProjects();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <h2 className="text-center text-red-500 text-3xl">Project Not Found!</h2>;
    }
    return (
        <div className='pt-16'>
            <div>
                <div className="bg-gradient-to-r from-blue-950 via-black to-purple-900 min-h-screen ">
                    <div className=" p-6 md:flex  text-white">
                        <img data-aos="fade-right"
                            data-aos-duration="3000" className=" w-full md:w-6/12 my-4 rounded" src={project.image} alt={project.name} />
                        <div data-aos="fade-left"
                            data-aos-duration="3000" className='ml-10 md:w-6/12'>
                            <h1 className="text-4xl font-bold text-cyan-400">{project.name}</h1>

                            <h3 className="text-xl mt-4">Technologies Used:</h3>
                            <ul className="list-disc list-inside">
                                {project.technologies.map((tech, index) => (
                                    <li className='text-purple-500' key={index}>{tech}</li>
                                ))}
                            </ul>
                            <p  className='text-green-500 font-semibold'>features :</p >
                            <p>{project.features.map(feature => (
                                        <ul >
                                            
                                            <li>~ {feature}</li>
                                        </ul>
                                    ))}</p>
                            <p className='text-blue-300'>{project.description}</p>
                            <div data-aos="fade-up"
                                data-aos-duration="3000" className='mt-10 space-x-5'>
                                <button className="btn btn-dash btn-secondary"><a href={project.github_clint} target='_blank'>Front-End Code</a></button>
                                <button className="btn btn-dash btn-accent"><a href={project.github_server} target='_blank'>Back-End Code</a></button>
                                <button className="btn btn-dash btn-info"><a href={project.live} target='_blank' className='flex'>Live Link <FaLink></FaLink></a></button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
