import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import react from "../../assets/animated/react.svg";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-gray-200/10  backdrop-blur-sm text-neutral-content p-10 justify-evenly">
        <aside>
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
          <p>
            Resolve by Ashik khan
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav 
        className="mt-16"
        data-aos="fade-up items" data-aos-duration="3000">
          <h6 className="footer-title">Social Media</h6>
          <div className="grid grid-flow-col gap-4">
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
          </div>
        </nav>
      </footer>
    </div>
  );
}
