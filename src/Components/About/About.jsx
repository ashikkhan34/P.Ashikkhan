import React from 'react'
import ashik from '../../assets/ashik.png'
import { MdMore } from 'react-icons/md'

export default function About() {
    return (
            <div className="hero  bg-gradient-to-r from-blue-950 via-black to-purple-900 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                    
                        data-aos="fade-left"
                        data-aos-duration="3000"
                        src={ashik}
                        className="border-b-4 border-blue-900 drop-shadow-xl rounded-b-full" />
                    <div data-aos="fade-up"
                        data-aos-duration="3000" className='p-5'>
                        <h1 className="text-5xl text-green-500 font-bold">Md.Ashik khan</h1>
                        <p className="py-6">
                            I am Md. Ashik Khan, an engineer, MERN stack developer, and digital marketer. I am currently working as a front-end developer and have experience in React.js, Next.js, Tailwind CSS, Node js and Mongo DB. I have completed a MERN Stack Development course and have worked on multiple projects, including a Bistro Boss Restaurant with real-time updates, and Firebase authentication.

                            Additionally, I am lead a team and have built a website for your college's programming club. I am also interested in analyzing search data and have  some full-stack website.
                        </p>
                    </div>
                </div>
            </div>
            )
}
