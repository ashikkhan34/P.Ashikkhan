import React, { useEffect, useState } from "react";
import ashik from "../../assets/ashik.png";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import resume from "../../assets/RESUME.pdf";

export default function Hero() {
  const texts = [
    "MERN Stack Developer",
    "Front-end Developer",
    "Full-Stack Developer",
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
    <div>
      <div className="hero bg-gradient-to-r from-blue-950 via-black to-purple-900 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            data-aos="fade-left"
            data-aos-duration="3000"
            src={ashik}
            className="md:max-w-7xl border-b-4 rounded-full border-blue-950"
          />
          <div data-aos="fade-right" data-aos-duration="3000">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Ashik khan
            </h1>
            <h1 className="text-cyan-500 font-bold">{displayText}</h1>
            <h3 className="font-bold text-gray-400">
              Junior Front-End Developer || Junior Mern Stack Developer ||
              junior Full-Stack Developer
            </h3>
            <p className="py-6">
              As a web developer, you don t just write code—you craft digital
              experiences that seamlessly blend functionality with creativity,
              turning ideas into interactive realities. 🚀💻
            </p>
            <div className="flex gap-5 mb-5">
              <a
                href="https://www.facebook.com/profile.php?id=100069225215551"
                target="_blank"
              >
                {" "}
                <FaFacebook className="text-3xl text-blue-600"></FaFacebook>{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/ashik-khan-44abbb300/ "
                target="_blank"
              >
                {" "}
                <LiaLinkedin className="text-3xl bg-blue-600"></LiaLinkedin>{" "}
              </a>
              <a href="https://github.com/ashikkhan34" target="_blank">
                {" "}
                <FaGithub className="text-3xl "></FaGithub>{" "}
              </a>
            </div>
            {/* <button>
              <a
                href={resume}
                target="_blank"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-950 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Download Resume
                </span>
              </a>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
