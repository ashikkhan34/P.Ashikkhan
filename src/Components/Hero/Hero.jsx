import React, { useEffect, useState } from "react";
import ashik from "../../assets/ashik.png";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import resume from "../../assets/RESUME.pdf";
import react from "../../assets/animated/react.svg";
import { motion } from "framer-motion";
import { MdWeb } from "react-icons/md";

export default function Hero() {
  const texts = [
    "React js",
    "Type Script",
    "Next js",
    "Node js",
    "Express js",
    "Mongo DB",
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenTexts = 1500;

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < texts[textIndex].length) {
          setDisplayText((prev) => prev + texts[textIndex].charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? erasingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <div className="hero min-h-screen flex items-center justify-center px-5 sm:px-10 md:px-20">
      <div className="hero-content mt-10 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* ===== Text Section ===== */}
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-center md:text-left w-full md:w-1/2 "
        >
          <h1 className=" my-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Ashik Khan
          </h1>
          <h1 className="text-md md:text-2xl">a <span className="text-blue-600 font-semibold">MERN Stack Developer</span> who builds fast, scalable <strong className="flex items-center gap-2 text-purple-600">web application <MdWeb className="text-blue-600" /></strong> </h1>

          {/* Dynamic typing text */}
          <h2 className="h-6 text-cyan-400 text-xl  font-semibold mt-3">
            Expert of : {displayText}
          </h2>

          <h3 className="font-bold text-gray-400 text-sm sm:text-base md:text-md mt-2">
            Front-End Developer ||  MERN Stack Developer ||
            Full-Stack Developer
          </h3>

          <p className="py-6 text-gray-300 text-sm sm:text-base">
            As a web developer, you don’t just write code—you craft digital
            experiences that seamlessly blend functionality with creativity,
            turning ideas into interactive realities. 🚀💻
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-5 mb-5">
            <a
              href="https://www.facebook.com/profile.php?id=100069225215551"
              target="_blank"
            >
              <FaFacebook className="text-3xl text-blue-600 hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/dev-ashikkhan/"
              target="_blank"
            >
              <LiaLinkedin className="text-3xl text-blue-500 hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/ashikkhan34" target="_blank">
              <FaGithub className="text-3xl text-white hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Resume Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href={resume}
              download="Ashik-Khan.pdf"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-950 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Download Resume
              </span>
            </a>
          </div>
        </div>

        {/* ===== Image Section ===== */}
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="flex flex-col items-center w-full md:w-1/2"
        >
          <div className="relative w-fit mx-auto">
            {/* Glow Background */}
            <div className="absolute  inset-0 rounded-full 
                  bg-cyan-400/40 blur-3xl scale-150"></div>

            {/* Image */}
            <img
              src={ashik}
              alt="Ashik Khan"
              className="relative w-60 sm:w-72 md:w-96 border-b border-blue-500  rounded-xl"
            />
          </div>


          {/* Rotating React Logo */}
          <motion.img
            className="w-16 sm:w-20 md:w-40"
            src={react}
            alt="React Logo"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
