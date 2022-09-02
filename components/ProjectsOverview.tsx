import React from "react";

// Importing individual project component
import Project from "./Project";

// Importing project images
import fullStackImg from "../public/assets/project_images/fullstack_0.png";
import reactGalleryImg from "../public/assets/project_images/react_gallery0.png";
import randomUserImg from "../public/assets/project_images/users_0.png";

function ProjectsOverview() {
  const fullStackDescription: string =
    "Full Stack App - REST API, React, SQL, CSS, Axios, React Router";

  const reactGalleryApp: string =
    "React App - React, React Router, Async/Await";

  const randomUserGenerator: string =
    "JavaScript App - HTML, CSS, Async/Await, APIs";

  return (
    <div id="projects" className="w-full py-16 bg-[#0077b6]">
      <div className="max-w-[1240px] mx-auto  w-[90%] flex flex-col justify-center h-full">
        <h1 className="py-16 mb-10 text-white">Projects</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* {Individual project box} */}
          {/* Full stack App */}
          <Project
            projectDescription={fullStackDescription}
            projectName="Full Stack React App"
            projectLink="https://react-galleryapp.netlify.app/"
            projectImage={fullStackImg}
          />
          {/* React Gallery App */}
          <Project
            projectDescription={reactGalleryApp}
            projectName="React Gallery App"
            projectLink="https://react-fullstack-courses-app.herokuapp.com/"
            projectImage={reactGalleryImg}
          />
          {/*Employee Directory*/}
        </div>
      </div>
    </div>
  );
}

export default ProjectsOverview;
