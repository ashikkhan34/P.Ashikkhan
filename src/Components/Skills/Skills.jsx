import React from "react";
import Marquee from "react-fast-marquee";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import js from "../../assets/icons/js.png";
import tailwind from "../../assets/icons/tailwind.png";
import bootstrap from "../../assets/icons/bootstrap.jfif";
import react from "../../assets/icons/react.png";
import next from "../../assets/icons/next.png";
import typeScript from "../../assets/icons/download.png";
import node from "../../assets/icons/node.png";
import mongodb from "../../assets/icons/mongo.png";
import firebase from "../../assets/icons/firebase.png";
import express from "../../assets/icons/express.png";
import prisma from "../../assets/icons/prisma.png";
import docker from "../../assets/icons/docker.png";
import { motion } from "framer-motion";
import img from "../../assets/animated/react.svg";
import img2 from "../../assets/animated/js.svg";
export default function Skills() {
  return (
    <div className=" container mx-auto py-10">
      <div className="flex items-center mx-auto justify-center">
        <motion.img
          className="w-40 hidden md:block"
          src={img2}
          alt="React Logo"
          animate={{ scale: [1, 2, 1] }} 
          transition={{
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut", 
          }}
        />
        <h1 className="text-center text-2xl md:text-6xl font-bold text-purple-700 p-9">
          My Skills
        <p className="w-80  mx-auto mt-4 active"></p>

        </h1>
        <motion.img
          className="w-40 hidden md:block"
          src={img}
          alt="React Logo"
          animate={{ rotate: 360 }} // scale from normal to bigger and back
          transition={{
            duration: 2, // total duration of one cycle
            repeat: Infinity, // keep repeating
            ease: "linear", // smooth animation
          }}
        />
      </div>
      <Marquee>
        <div className="flex gap-6 ">
          <div className=" w-32 bg-gray-200/10  backdrop-blur-sm hover:scale-130 hover:text-white font-bold transition-all duration-300 rounded-xl mb-6 mt-6 shadow-lg ml-5">
            <h1 className="text-auto mt-2 text-center text-blue-400">HTML</h1>
            <img className="mx-auto w-16 p-2 rounded-xl " src={html} alt="" />
          </div>
          <div className=" w-32 bg-gray-200/10  backdrop-blur-sm hover:scale-130 hover:text-white font-bold transition-all duration-300 rounded-xl mb-6 mt-6 shadow-2xl">
            <h1 className="text-center mt-4 text-blue-400">CSS</h1>
            <img className="mx-auto  w-16 p-2 rounded-xl " src={css} alt="" />
          </div>
          <div className=" w-32 bg-gray-200/10  backdrop-blur-sm hover:scale-130 hover:text-white font-bold transition-all duration-300 rounded-xl mb-6 mt-6 shadow-2xl">
            <h1 className="text-center mt-4 text-blue-400">Java Script</h1>
            <img className="mx-auto  w-16 p-2 rounded-xl " src={js} alt="" />
          </div>
          <div className=" w-32 bg-gray-200/10  backdrop-blur-sm hover:scale-130 hover:text-white font-bold transition-all duration-300 rounded-xl mb-6 mt-6 shadow-2xl">
            <h1 className="text-center mt-4 text-blue-400">React js </h1>
            <img className="mx-auto  w-16 p-2 rounded-xl " src={react} alt="" />
          </div>
          <div className=" w-32 bg-gray-200/10  backdrop-blur-sm hover:scale-130 hover:text-white font-bold transition-all duration-300 rounded-xl mb-6 mt-6 shadow-2xl">
            <h1 className="text-center mt-4 text-blue-400">Next js</h1>
            <img className="mx-auto  w-16 p-2 rounded-xl " src={next} alt="" />
          </div>
          <div className=" w-32 bg-gray-200/10  backdrop-blur-sm hover:scale-130 hover:text-white font-bold transition-all duration-300 rounded-xl mb-6 mt-6 shadow-2xl">
            <h1 className="text-center mt-4 text-blue-400">tailwind</h1>
            <img className="mx-auto  w-16 p-2 rounded-xl " src={tailwind} alt="" />
          </div>
          <div className=" w-32 bg-gray-200/10  backdrop-blur-sm hover:scale-130 hover:text-white font-bold transition-all duration-300 rounded-xl mb-6 mt-6 shadow-2xl">
            <h1 className="text-center mt-4 text-blue-400">bootstrap</h1>
            <img className="mx-auto  w-16 p-2 rounded-xl " src={bootstrap} alt="" />
          </div>
        </div>
      </Marquee>
      <Marquee direction="right">
        <div className="flex gap-6">
          <div className=" w-32 bg-gray-200/10  backdrop-blur-sm hover:scale-130 hover:text-white font-bold transition-all duration-300 rounded-xl mb-6 mt-6 shadow-lg ml-5">
            <h1 className="text-auto  text-center text-blue-400">Firebase</h1>
            <img className=" w-16 p-2 rounded-xl mx-auto  " src={firebase} alt="" />
          </div>
          <div className=" w-32 bg-gray-200/10  backdrop-blur-sm hover:scale-130 hover:text-white font-bold transition-all duration-300 rounded-xl mb-6 mt-6 shadow-2xl">
            <h1 className="text-center mt-4 text-blue-400">Express</h1>
            <img className="mx-auto  w-16 p-2 rounded-xl " src={express} alt="" />
          </div>
          <div className=" w-32 bg-gray-200/10  backdrop-blur-sm hover:scale-130 hover:text-white font-bold transition-all duration-300 rounded-xl mb-6 mt-6 shadow-2xl">
            <h1 className="text-center mt-4 text-blue-400">Node js</h1>
            <img className="mx-auto  w-16 p-2 rounded-xl " src={node} alt="" />
          </div>
          <div className=" w-32 bg-gray-200/10  backdrop-blur-sm hover:scale-130 hover:text-white font-bold transition-all duration-300 rounded-xl mb-6 mt-6 shadow-2xl">
            <h1 className="text-center mt-4 text-blue-400">Mongo DB </h1>
            <img className="mx-auto  w-16 p-2 rounded-xl " src={mongodb} alt="" />
          </div>
          <div className=" w-32 bg-gray-200/10  backdrop-blur-sm hover:scale-130 hover:text-white font-bold transition-all duration-300 rounded-xl mb-6 mt-6 shadow-2xl">
            <h1 className="text-center mt-4 text-blue-400">Type Script </h1>
            <img className="mx-auto  w-16 p-2 rounded-xl " src={typeScript} alt="" />
          </div>
          <div className=" w-32 bg-gray-200/10  backdrop-blur-sm hover:scale-130 hover:text-white font-bold transition-all duration-300 rounded-xl mb-6 mt-6 shadow-2xl">
            <h1 className="text-center mt-4 text-blue-400">Prisma </h1>
            <img className="mx-auto  w-16 p-2 rounded-xl " src={prisma} alt="" />
          </div>
          <div className=" w-32 bg-gray-200/10  backdrop-blur-sm hover:scale-130 hover:text-white font-bold transition-all duration-300 rounded-xl mb-6 mt-6 shadow-2xl">
            <h1 className="text-center mt-4 text-blue-400">Docker </h1>
            <img className="mx-auto  w-16 p-2 rounded-xl " src={docker} alt="" />
          </div>
        </div>
      </Marquee>
    </div>
  );
}
