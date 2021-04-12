import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import sanityClient from "../client";
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
    return (
      <h1 className="text-6xl text-gray-800 animate-pulse font-bold cursive leading-none lg:leading-snug home-name">
        Loading...
      </h1>
    );
  }
  return (
    <main className="bg-indigo-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Thanks for checking out my projects!
        </h2>
        <section className="grid md:grid-cols-2 gap-8">
          {projects &&
            projects.map((project) => (
              <article className="relative shadow-xl bg-white p-16 items-center rounded-3xl">
                <img
                  src={urlFor(project.projectImage)}
                  alt={project.title + " project"}
                  className="w-full h-60 object-fill rounded-3xl border-solid border-4 border-gray-300"
                />
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
                <div className="text-gray-900 text-s justify-center items-center space-x-4">
                  <span></span>
                  <span className="text-center items-center">
                    <stong className="font-bold">technologies</stong>:{" "}
                    {project.tags.map((tag) => `${tag} - `)}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  {project.deployed_application_link && (
                    <a
                      href={project.deployed_application_link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-blue-500 font-bold hover:underline hover:text-blue-400 text-xl"
                    >
                      View Project{" "}
                      <span role="img" aria-label="right pointer"></span>
                    </a>
                  )}
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
