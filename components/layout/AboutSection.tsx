"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "../TabButton";
import { title } from "process";


const TAB_DATA  = [
  {
    title: "Skills",
    id: "skills",
    content : (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>React JS</li>
        <li>TailWind CSS</li>
        <li>Data Structure & Algorithm</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content : (
      <ul className="list-disc pl-2">
        <li><h1>Bachelor of Technology</h1></li>
        <li><h1>Master of Technology</h1></li>
        <li>JavaScript</li>
        
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content : (
      <ul className="list-disc pl-2">
        <li><h1>Software Engineer I </h1></li>
        <li><h1>Arisglobal</h1></li>
        <li>Engineering Department</li>
        
      </ul>
    )
  },  {
    title: "Certification",
    id: "certification",
    content : (
      <ul className="list-disc pl-2">
        <li><h1>Software Engineer I </h1></li>
        <li><h1>Master of Technology</h1></li>
        <li>JavaScript</li>
        
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about">
      <hr className="m-auto items-center border-1 border-purple-500 w-52"></hr>
      <div className="md:grid md:grid-cols-2 gap-4 items-center py-8 px-4 xl:gap-8 sm:py-16">
        <Image
          src={"/images/profile.png"}
          width={200}
          height={200}  
          alt="about me"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-white text-5xl font-bold mb-4">About Me</h2>
          <p className="text-balance md:text-lg">
            Hello! I'm Shungz, a results-driven software engineer with two years of experience specializing in 
          .   I'm passionate about creating efficient solutions and thrive in 
          collaborative environments. Explore my portfolio to see my work and let's discuss how I can contribute to 
          your team's success.
          </p>
          <div className="flex flex-row justify-start mt-8 text-white">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {""}
              Experience{" "}
            </TabButton>

           
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
