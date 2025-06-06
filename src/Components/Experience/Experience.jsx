import React from 'react'
import CountUp from 'react-countup'

export default function Experience() {
    return (
        <div className='bg-gradient-to-r from-blue-950 via-black to-purple-900 py-10'>
            <div data-aos="fade-up"
                data-aos-duration="3000" className="stats shadow mx-auto block md:flex max-w-2/3 bg-gradient-to-r from-blue-950 via-black to-purple-900 text-white">
                <div className="stat place-items-center">
                    <div className="stat-title text-white">Projects</div>
                    <div className="stat-value"><CountUp end={55} duration={10}></CountUp></div>
                    <div className="stat-desc text-white">From 2024 to February 2025</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-white">Experience</div>
                    <div className="stat-value text-secondary">1 </div>
                    <div className="stat-desc text-secondary">↗︎ Learning Experience of Home </div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-white">Task done</div>
                    <div className="stat-value"><CountUp end={90} duration={10}></CountUp> (<CountUp end={85} duration={15}></CountUp>)%</div>
                    <div className="stat-desc text-white">Continue working </div>
                </div>
            </div>
        </div>
    )
}
