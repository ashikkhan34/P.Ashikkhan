import React from "react";
import ashik from "../../assets/ashik.png";
import { MdMore } from "react-icons/md";
import { motion } from "framer-motion";
import img from "../../assets/animated/triangle.svg";
import img2 from "../../assets/animated/blue-square.svg";
export default function About() {
  return (
    <div className="hero container mx-auto">
      <div className="container hero-content flex-col lg:flex-row-reverse items-center">
        <div className="relative w-1/2 mx-auto">
          {/* Glow Background */}
          <div className="absolute  inset-0 rounded-full bg-cyan-400/40 blur-3xl scale-150"></div>

          {/* Image */}
          <img
            src={ashik}
            alt="Ashik Khan"
            className="relative w-[400px] -mt-28 md:ml-20 border-b border-blue-500  rounded-xl"
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="p-5 md:w-1/2">
          <h1 className="text-5xl text-green-500 font-bold">Md.Ashik khan</h1>
          <p className="py-6">
            I am Md. Ashik Khan, a Computer Engineer and MERN Stack Developer. I’m currently working in Front-End Development with strong expertise in <strong className="text-blue-600">React.js (Redux), Next.js, and Tailwind CSS</strong>, and in Backend Development with <strong className="text-purple-600">Node.js, Express.js, MongoDB (Mongoose), TypeScript, Prisma, and Docker</strong>. I have completed a MERN Stack Development course and worked on several full-stack projects. I recently completed an internship at <strong className="text-blue-500">BD Calling It Ltd</strong>, where I enhanced my full-stack and analytical skills.
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
