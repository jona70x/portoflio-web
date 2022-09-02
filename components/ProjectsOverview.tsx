import React from "react";

// Importing individual project component
import Project from "./Project";

function ProjectsOverview() {
  return (
    <div id="projects" className="w-full py-16 bg-[#0077b6]">
      <div className="max-w-[1240px] mx-auto  w-[90%] flex flex-col justify-center h-full">
        <h1 className="py-16 text-white">Projects</h1>
        <h2 className="py-2 mb-20 text-white">
          Here you can find projects I have been able to complete
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* {Individual project box} */}
          <Project />
        </div>
      </div>
    </div>
  );
}

export default ProjectsOverview;
