import React from 'react'
import useProjects from '../../Hooks/useProjects'
import { Link } from 'react-router-dom'

export default function Projects() {
    const [projects] = useProjects()
  return (
    <div className='bg-gradient-to-r from-blue-950 via-black to-purple-900 min-h-screen'>
    <h1 className='text-5xl text-center p-8 font-bold  text-cyan-500'>My Projects  </h1>

    <div data-aos="fade-up"
        data-aos-duration="3000" className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
        {
            projects.slice(0, 3).map(project => (
                <div key={project.id}>
                    <div className="card bg-indigo-950 h-[400px] hover:scale-x-105 hover:shadow-pink-600  shadow-sm">
                        <figure>
                            <img
                                src={project.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-cyan-300">{project.name}</h2>
                            <p>{project.features.map(feature => (
                                <ul key={project.id} >
                                    <li>~ {feature}</li>
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
  )
}
