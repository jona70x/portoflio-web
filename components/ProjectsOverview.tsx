import React from "react";

// Importing individual project component
import Project from "./Project";

// Importing project images
import fullStackImg from "../public/assets/project_images/fullstack_0.png";
import reactGalleryImg from "../public/assets/project_images/react_gallery0.png";
import randomUserImg from "../public/assets/project_images/users_0.png";
import forkifyImg from "../public/assets/project_images/forkify_0.png";
import trullyImg from "../public/assets/project_images/trully_skin0.png";
import phraseHunterImg from "../public/assets/project_images/phrase_hunter0.png";

function ProjectsOverview() {
  const fullStackDescription: string =
    "Full Stack Reac App - REST API, React, SQL, CSS, Axios, React Router";

  const reactGalleryApp: string =
    "React App - React, React Router, Async/Await";

  const randomUserGenerator: string =
    "JavaScript App - HTML, CSS, Async/Await, APIs";

  const forkifyApp: string = "JavaScript App - MVC, Async/Await, APIs";

  const trullyStore: string = "🛠Soon to be a NextJs App - HTML, CSS Mockup";

  const phraseHunter: string =
    "JavaScript App - Object-Oriented Programming, HTML, CSS ";

  return (
    <div id="projects" className="w-full py-16 bg-[#0077b6]">
      <div className="max-w-[1240px] mx-auto  w-[90%] flex flex-col justify-center h-full">
        <h1 className="py-10 text-white">Projects</h1>
        <h2 className="py-10 text-white">
          Hover over the projects to check the details
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Individual project box */}
          {/* Full stack App */}
          <Project
            projectDescription={fullStackDescription}
            projectName="School Courses"
            projectLink="https://react-fullstack-courses-app.herokuapp.com/"
            projectImage={fullStackImg}
          />
          {/* React Gallery App */}
          <Project
            projectDescription={reactGalleryApp}
            projectName="React Gallery"
            projectLink="https://react-galleryapp.netlify.app/"
            projectImage={reactGalleryImg}
          />

          {/*Employee Directory*/}
          <Project
            projectDescription={randomUserGenerator}
            projectName="Employee Directory"
            projectLink="https://random-user-generator1.netlify.app/"
            projectImage={randomUserImg}
          />
          {/* Forkify App */}
          <Project
            projectDescription={forkifyApp}
            projectName="Forkify Recipe App"
            projectLink="https://forkify-jonathancarpio.netlify.app/"
            projectImage={forkifyImg}
          />
          {/* Trully Skincare */}
          <Project
            projectDescription={trullyStore}
            projectName="Trully store"
            projectLink="https://trully-skincare.netlify.app/"
            projectImage={trullyImg}
          />
          {/* Phrase Game */}
          <Project
            projectDescription={phraseHunter}
            projectName="Phrase Hunter"
            projectLink="https://phrasehunter-project.netlify.app/"
            projectImage={phraseHunterImg}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsOverview;
