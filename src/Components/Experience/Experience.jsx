import React from 'react'

export default function Experience() {
    return (
        <div className='bg-gradient-to-r from-blue-950 via-black to-purple-900 py-10'>
            <div data-aos="fade-up"
                data-aos-duration="3000" className="stats shadow mx-auto flex max-w-2/3 bg-gradient-to-r from-blue-950 via-black to-purple-900">
                <div className="stat place-items-center">
                    <div className="stat-title">Projects</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">From 2024 to February 2025</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Experience</div>
                    <div className="stat-value text-secondary">1 </div>
                    <div className="stat-desc text-secondary">↗︎ Learning Experience of Home </div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Task done</div>
                    <div className="stat-value">↘︎ 90 (85%)</div>
                    <div className="stat-desc">Continue working</div>
                </div>
            </div>
        </div>
    )
}
