import React from 'react'
import useProjects from '../../Hooks/useProjects'
import { Link } from 'react-router-dom'

export default function AllProjects() {
    const [projects] = useProjects()
    return (
        <div className='pt-16 '>
            <div className='bg-gradient-to-r from-blue-950 via-black to-purple-900 min-h-screen'>
                <h1 className='text-5xl text-center p-8 font-bold  text-cyan-500'>---My All Projects---  </h1>

                <div data-aos="fade-up"
                    data-aos-duration="3000" className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 '>
                    {
                        projects.map(project => (
                            <div key={project.id}>
                                <div className="card bg-indigo-950 h-[400px]  shadow-sm mb-10">
                                    <figure>
                                        <img
                                            src={project.image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-cyan-300">{project.name}</h2>
                                        <p>{project.technologies.map(tec => (
                                            <ul >
                                                <li>~ {tec}</li>
                                            </ul>
                                        ))}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/projectDetails/${project.id}`}> <button className='btn btn-primary'>Details More</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
