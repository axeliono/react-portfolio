import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import sanityClient from "../sanityClient";
import { GET_PROJECTS } from "../utils/actions";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => {
  return builder.image(source);
};

const Project = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { projects } = state;

  useEffect(() => {
    async function sanityFetch() {
      try {
        const projects = await sanityClient.fetch(`*[_type == "project"] {
                title,
                date,
                place,
                description,
                projectImage,
                projectType,
                repository_link,
                deployed_application_link,
                tags,
            }`);
        dispatch({ type: GET_PROJECTS, projects: [...projects] });
      } catch (err) {
        console.error(err);
      }
    }
    sanityFetch();
  }, [dispatch]);
  if (!projects) {
    return <div>Loading...</div>;
  }
  return (
    <main className="bg-indigo-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Thanks for checking out my projects!
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projects &&
            projects.map((project) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16 items-center">
                <div className="flex justify-center">
                  <img
                    src={urlFor(project.projectImage)}
                    alt={project.title + " project"}
                    className="w-max h-60 "
                  />
                </div>
                <h3 className="text-gray-800 text-3xl text-center font-bold mb-2 hover:text-blue-700">
                  <a
                    href={project.deployed_application_link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs justify-center space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span></span>
                  <span className="text-center">
                    <stong className="font-bold">technologies</stong>:{" "}
                    {project.tags.map((tag) => `${tag} - `)}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.deployed_application_link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-500 font-bold hover:underline hover:text-blue-400 text-xl"
                  >
                    View Project{" "}
                    <span role="img" aria-label="right pointer"></span>
                  </a>
                  <a
                    href={project.repository_link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-500 font-bold hover:underline hover:text-blue-400 text-xl"
                  >
                    View Repository{" "}
                    <span role="img" aria-label="right pointer"></span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Project;
