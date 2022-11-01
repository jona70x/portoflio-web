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
import mediumBlog from "../public/assets/project_images/medium_ts.png";

function ProjectsOverview() {
  const fullStackDescription =
    "Full Stack Reac App - REST API, React, SQL, CSS, Axios, React Router";

  const reactGalleryApp = "React App - React, React Router, Async/Await";

  const randomUserGenerator = "JavaScript App - HTML, CSS, Async/Await, APIs";

  const forkifyApp = "JavaScript App - MVC, Async/Await, APIs";

  const trullyStore = "🛠Soon to be a NextJs App - HTML, CSS Mockup";

  const phraseHunter =
    "JavaScript App - Object-Oriented Programming, HTML, CSS ";

  const mediumBlogDesc = "NextJs App - TypeScript, Sanity CMS, Tailwind CSS";

  return (
    <div
      id="projects"
      className="w-full py-16 bg-gradient-to-r from-[#00b4d8] to-[#03045e]"
    >
      <div className="max-w-[1240px] mx-auto  w-[90%] flex flex-col justify-center h-full">
        <h1 className="py-10 text-white">Projects</h1>
        <h2 className="py-10 text-white">
          Hover over the projects to check the details
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Individual project box */}
          {/* Medium Blog App */}
          <Project
            projectDescription={mediumBlogDesc}
            projectName="Blog App"
            projectLink="https://medium-blog-demo.vercel.app/"
            projectImage={mediumBlog}
          />
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
