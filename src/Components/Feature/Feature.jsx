import React from "react";
import { FaStarOfDavid, FaStarOfLife } from "react-icons/fa";
import { SiCodefresh } from "react-icons/si";

export default function Feature() {
  return (
    <div>
      <div className="container mx-auto md:flex justify-evenly py-10 px-20 space-y-5 ">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-52 h-60 text-center hover:scale-110 transition-all duration-1000 ease-in-out hover:shadow-blue-500 shadow-sm p-2  bg-gray-200/10  backdrop-blur-sm  rounded-2xl"
        >
          <FaStarOfDavid className="text-7xl flex mx-auto text-red-500" />
          <h1 className="text-red-400">Fast Performance</h1>
          <p className="text-gray-400">
            Enjoy lightning-fast load times and a seamless user experience with
            our optimized platform.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-62 h-68 text-center  hover:scale-110 transition-all duration-1000 ease-in-out hover:shadow-blue-500 shadow-sm p-2   bg-gray-200/10  backdrop-blur-sm  rounded-2xl"
        >
          <SiCodefresh className="text-8xl flex mx-auto text-green-600" />
          <h1 className="text-green-400">Fresh and Clean Design</h1>
          <p className="text-gray-400">
            Experience a modern, clutter-free design that’s as refreshing as it
            is functional. Our approach with intuitive navigation..
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-52 h-60 text-center hover:scale-110 transition-all duration-1000 ease-in-out hover:shadow-blue-500 shadow-sm p-2   bg-gray-200/10  backdrop-blur-sm  rounded-2xl"
        >
          <FaStarOfLife className="text-7xl flex mx-auto text-cyan-400" />
          <h1 className="text-cyan-400">Fast and Friendly support</h1>
          <p className="text-gray-400">
            Get the help you need. Our support team is dedicated to providing
            quick and friendly assistance...
          </p>
        </div>
      </div>
    </div>
  );
}
