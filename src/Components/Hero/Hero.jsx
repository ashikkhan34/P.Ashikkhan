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
      <div className="hero-content mt-10 flex flex-col-reverse md:flex-row items-center gap-10 w-full">
        {/* ===== Text Section ===== */}
        <div className="text-center md:text-left w-full sm:w-11/12 md:w-1/2 -mt-20">
          <h1 className="my-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 leading-tight sm:leading-snug">
            Ashik Khan
          </h1>
          <h1 className="text-md md:text-2xl mt-2">
            a <span className="text-blue-600 font-semibold">MERN Stack Developer</span> who builds fast, scalable  <span className="font-bold text-purple-600">
              web application. </span>
          </h1>

          {/* Dynamic typing text */}
          <h2 className="h-6 text-cyan-400 text-xl hidden md:block font-semibold mt-3">
            Expert of: {displayText}
          </h2>

          <h3 className="font-bold text-gray-400 text-sm sm:text-base md:text-md mt-2">
            Front-End Developer || MERN Stack Developer || Backend Developer
          </h3>

          <p className="py-6 text-gray-300 text-sm sm:text-base">
            As a web developer, you don’t just write code—you craft digital experiences that seamlessly blend functionality with creativity, turning ideas into interactive realities. 🚀💻
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-5 mb-5">
            <a href="https://www.facebook.com/profile.php?id=100069225215551" target="_blank" rel="noreferrer">
              <FaFacebook className="text-3xl text-blue-600 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/dev-ashikkhan/" target="_blank" rel="noreferrer">
              <LiaLinkedin className="text-3xl text-blue-500 hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/ashikkhan34" target="_blank" rel="noreferrer">
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
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Download Resume
              </span>
            </a>
          </div>
        </div>

        {/* ===== Image Section ===== */}
        <div className="flex flex-col items-center w-full sm:w-11/12 md:w-1/2">
          {/* Code Snippet Box */}
          <div className="bg-black/40 backdrop-blur-sm text-[#c9d1d9] p-4 sm:p-6 rounded-xl shadow-xl max-w-full overflow-x-auto mx-auto mt-10 md:mt-20">
            {/* Window Buttons */}
            <div className="flex space-x-2 mb-4">
              <span className="w-3 h-3 bg-[#ff5f56] rounded-full"></span>
              <span className="w-3 h-3 bg-[#ffbd2e] rounded-full"></span>
              <span className="w-3 h-3 bg-[#27c93f] rounded-full"></span>
            </div>
            <span className="h-1 w-full bg-indigo-900 rounded-full divider"></span>

            {/* Code Snippet */}
            <pre className="font-dmMono  text-sm leading-6">
              <code>
                <span className="text-purple-400">const</span> coder = {'{'}{'\n'}

                &nbsp;&nbsp;<span className="text-blue-400">name</span>: <span className="text-yellow-300">'Md.Ashik Khan'</span>,{'\n'}
                &nbsp;&nbsp;<span className="text-blue-400">position</span>: <span className="text-yellow-300">MERN Stack Developer</span>,{'\n'}

                &nbsp;&nbsp;<span className="text-blue-400">skills</span>: [
                <span className="text-green-400">"TypeScript"</span>,
                <span className="text-green-400">"React"</span>,
                <span className="text-green-400">"Next"</span>,
                <span className="text-green-400">"NodeJS"</span>,
                <span className="text-green-400">"MongoDB"</span>,
                <span className="text-green-400">"ExpressJS"</span>
                ],{'\n'}

                &nbsp;&nbsp;<span className="text-blue-400">hardWorker</span>: <span className="text-purple-400">true</span>,{'\n'}
                &nbsp;&nbsp;<span className="text-blue-400">quickLearner</span>: <span className="text-purple-400">true</span>,{'\n'}
                &nbsp;&nbsp;<span className="text-blue-400">problemSolver</span>: <span className="text-purple-400">true</span>,{'\n'}

                &nbsp;&nbsp;<span className="text-blue-400">hireable</span>: function() {'{'}{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> ({'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.hardWorker <span className="text-blue-400">&&</span>{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.problemSolver  <span className="text-blue-400">&&</span>{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.skills.length {'>='} <span className="text-orange-400">5</span>{'\n'}
                &nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
                &nbsp;&nbsp;{'}'},{'\n'}
                {'}'};
              </code>
            </pre>
          </div>

          {/* Rotating React Logo */}
          <motion.img
            className="w-16 sm:w-20 md:w-40 mx-auto mt-6 md:mt-10 mb-20"
            src={react}
            alt="React Logo"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}
