import React from 'react'
import About from '../../Components/About/About'
import clg from '../../assets/ppi.jfif'

export default function AboutUs() {
    return (
        <div className='pt-32 md:pt-10'>
            <About></About>
            <div>
                <h1 className="text-5xl font-bold text-cyan-600 text-center py-10">---My Study---</h1>
                <div className='md:flex mx-auto px-10'>
                    <img data-aos="fade-left"
                        data-aos-duration="3000" src={clg} className=' w-5/12 rounded-md' alt="" />
                    <div data-aos="fade-right"
                        data-aos-duration="3000" className='ml-10 w-7/12 space-y-2'>
                        <h1 className="text-2xl md:text-4xl text-center font-bold">Pabna Polytechnic Institute</h1>
                        <p className='text-gray-200 font-bold text-center'>I am a student of PPI . I am a CST(Computer Science and Technology) student.</p>
                        <p className='text-gray-300 text-center bg-gray-200/10  backdrop-blur-sm p-6 rounded-xl'>Md. Ashik Khan is a dedicated Computer Science and Technology (CST) student at PPI. With a passion for coding and technology, he is continuously learning and exploring new advancements in the field. His expertise in front-end development and the MERN stack allows him to build dynamic and efficient web applications. Always eager to enhance his skills, Ashik is committed to growing as a developer and making an impact in the tech world. 🚀</p>
                    </div>
                </div>
                <ul data-aos="fade-up"
                    data-aos-duration="3000" className="timeline timeline-vertical py-10 text-fuchsia-300">
                    <h1 className="md:text-5xl  text-2xl text-center font-bold  text-cyan-400 p-4">---Journey of Programming---</h1>
                    <li>
                        <div className="timeline-start">2021</div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box ">Start study of Computer Science</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start">2022</div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box">Digital Marketing</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start">2023</div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box">
                            Front-End Development</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start">2024</div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box">Mern Stack Development</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start">2025</div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box">Full Stack Development</div>
                    </li>
                </ul>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className='text-green-500 mt-10 py-10  '>
                    <h1 data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className="md:text-5xl  text-2xl text-center font-bold py-3 text-cyan-400">---Enjoy of Programming---</h1>

                    <ul className="timeline timeline-vertical -ml-80 md:-ml-0">
                        <li className='mt-5'>
                            <div className="timeline-middle ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">I enjoy working on creative and interactive web development projects</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">I love building responsive and user-friendly websites</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">I enjoy solving complex front-end challenges and enhancing user experiences.
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">I have gained experience in doing the right thing at the right time
                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
