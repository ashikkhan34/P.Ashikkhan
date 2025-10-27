import React from "react";
import ashik from "../../assets/ashik.png";
import { MdMore } from "react-icons/md";
import { motion } from "framer-motion";
import img from "../../assets/animated/triangle.svg";
import img2 from "../../assets/animated/blue-square.svg";
export default function About() {
  return (
    <div className="hero  bg-gradient-to-r from-blue-950 via-black to-purple-900 min-h-screen">
      <div className="container hero-content flex-col lg:flex-row-reverse">
        <img
          data-aos="fade-left"
          data-aos-duration="3000"
          src={ashik}
          className="border-b-4 border-blue-900 drop-shadow-xl rounded-b-full"
        />
        <div data-aos="fade-up" data-aos-duration="3000" className="p-5">
          <h1 className="text-5xl text-green-500 font-bold">Md.Ashik khan</h1>
          <p className="py-6">
            I am Md. Ashik Khan, an Computer Engineer, MERN Stack Developer. I’m
            currently working as a Front-End Developer with strong expertise in
            React.js, Next.js, Tailwind CSS, Node.js, and MongoDB. I have
            completed a MERN Stack Development course and worked on several
            full-stack projects, including Bistro Boss Restaurant, which
            features real-time updates and Firebase Authentication. I also built
            a website for my college’s programming club and led a team during
            development. Along with frontend development, I have experience in
            advanced backend development using TypeScript, Mongoose, and Postman
            for building and testing RESTful APIs. I’m also passionate about
            search data analysis and currently doing an internship at BD Calling
            Ltd, where I’m improving my full-stack and analytical skills.
          </p>
          <div className="flex justify-between">
            <motion.img
            className="w-20"
            src={img}
            alt="React Logo"
            animate={{ scale: [1, 2, 1] }} // scale from normal to bigger and back
            transition={{
              duration: 2, // total duration of one cycle
              repeat: Infinity, // keep repeating
              ease: "easeInOut", // smooth animation
            }}
          />

          <motion.img
            className="w-20"
            src={img2}
            alt="React Logo"
            animate={{ scale: [1, 2, 1] }} // scale from normal to bigger and back
            transition={{
              duration: 2, // total duration of one cycle
              repeat: Infinity, // keep repeating
              ease: "easeInOut", // smooth animation
            }}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
