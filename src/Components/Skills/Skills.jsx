import React from 'react'
import Marquee from 'react-fast-marquee'
import html from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'
import js from '../../assets/icons/js.png'
import tailwind from '../../assets/icons/tailwind.png'
import bootstrap from '../../assets/icons/bootstrap.jfif'
import react from '../../assets/icons/react.png'
import next from '../../assets/icons/next.png'
import node from '../../assets/icons/node.png'
import mongodb from '../../assets/icons/mongo.png'
import firebase from '../../assets/icons/firebase.png'
import express from '../../assets/icons/express.png'
export default function Skills() {
  return (
    <div className='bg-gradient-to-r from-black via-purple-950 to-black py-10'>
        <h1 className='text-center text-6xl font-bold text-purple-700 p-9'>My Skills</h1>
        <Marquee>
                <div className='flex gap-6 '>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-lg ml-5'>
                        <h1 className='text-auto mt-2 text-center text-blue-400'>HTML</h1>
                        <img className="mx-auto w-16 p-2 " src={html} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>CSS</h1>
                        <img className="mx-auto  w-16 p-2 " src={css} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>Java Script</h1>
                        <img className="mx-auto  w-16 p-2 " src={js} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>React js </h1>
                        <img className="mx-auto  w-16 p-2 " src={react} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>Next js</h1>
                        <img className="mx-auto  w-16 p-2 " src={next} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>tailwind</h1>
                        <img className="mx-auto  w-16 p-2 " src={tailwind} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>bootstrap</h1>
                        <img className="mx-auto  w-16 p-2 " src={bootstrap} alt="" />
                    </div>
                </div>
            </Marquee>
            <Marquee direction='right'>
                <div className='flex gap-6'>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-lg ml-5'>
                        <h1 className='text-auto  text-center text-blue-400'>Firebase</h1>
                        <img className=" w-16 p-2 mx-auto  "  src={firebase} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>Express</h1>
                        <img className="mx-auto  w-16 p-2 " src={express} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>Node js</h1>
                        <img className="mx-auto  w-16 p-2 " src={node} alt="" />
                    </div>
                    <div className=' w-32 bg-indigo-900 rounded-xl mb-6 mt-6 shadow-2xl'>
                        <h1 className='text-center mt-4 text-blue-400'>Mongo DB </h1>
                        <img className="mx-auto  w-16 p-2 " src={mongodb} alt="" />
                    </div>
                </div>
            </Marquee>
    </div>
  )
}
