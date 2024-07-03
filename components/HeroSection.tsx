"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              Hello, I'm{" "}
            </span>{" "}
            <br />
            <span>Vashung Muilung</span>
          </h1>

          <p className="text-lg lg:text-xl mb-6">
            {/* <TypeAnimation
                sequence={[
                  "a Software Engineer",
                  2000,
                  "Full Stack Developer",
                  3000,
                  "Web Developer",
                  3000,
                ]}
                wrapper="span"
                speed={10}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={1}
              /> */}
            I am a Software Engineer
          </p>

          <div>
            <button className="px-6 py-3 mr-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-green-500 hover:bg-slate-200 text-white  mt-3 ">
              Hire Me
            </button>

            <button className="px-1 py-1  w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-green-500  hover:bg-slate-800 text-white mt-3">
              <span className=" block px-5 py-2 rounded-full bg-slate-800 hover:bg-slate-800 border">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={"/images/user.png"}
              width={300}
              height={300}
              alt="user image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
