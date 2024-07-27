"use client";

import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectTag from "../ProjectTag";
import project1 from "../../public/images/projects/1.png"
import project2 from "../../public/images/projects/2.png"
import project3 from "../../public/images/projects/3.png"

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Projection 1 Description",
    image: project1 ,
    gitUrl: "/",
    previewUrl: "/",
    tag: ["All", "Web"],
  },

  {
    id: 2,
    title: "Ecommerce Website",
    description: "Projection 1 Description",
    image: project2,
    gitUrl: "/",
    previewUrl: "/",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Projection 1 Description",
    image: project3,
    gitUrl: "/",
    previewUrl: "/",
    tag: ["All", "Mobile"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };


  const filterProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )

  return (
    <section id="project">
      <hr className="m-auto w-52 border-2 border-purple-500"></hr>
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

        <h2 className="text-white text-center mt-4 text-5xl font-bold mb-4">My Projects</h2>
      </div>
      
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};
  
export default ProjectSection;
