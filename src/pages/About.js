import React, { useEffect} from "react";
import sanityClient from "../client.js";
import { useSelector, useDispatch } from "react-redux";
import { GET_AUTHOR } from "../utils/actions";
import nature from "../assets/images/next-starry-sky.jpg";
import myPicture from "../assets/images/chandler.JPG";


const About = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { author } = state;

  useEffect(() => {
    async function sanityFetch() {
      try {
        const author = await sanityClient.fetch(`*[_type == "author"] {
            name,
            bio,
        }`);
        dispatch({ type: GET_AUTHOR, author: [...author] });
        console.log(author);
      } catch (err) {
        console.log(err);
      }
    }

    sanityFetch();
  }, [dispatch]);

  if (!author) {
    return (
      <h1 className="text-6xl text-gray-800 animate-pulse font-bold text-center cursive leading-none lg:leading-snug home-name">
        Loading...
      </h1>
    );
  }
  const myBio =
    "Full Stack Web Developer with skills in React, Express, MongoDB, Node.js and other frontend and backend technologies. I recieved my Bachelor's of Science from the University of Houston and my Certificate of FullStack Web Development from the University of Texas at Austin. Feel free to look through my projects to see my skillset in action!";

  return (
    <main>
      <img
        src={nature}
        alt="Stars over forest"
        className="absolute object-cover w-full h-full bg-fixed"
      />
      <div className="p-10 lg:pt-28 container mx-auto relative">
        <section className="bg-gray-800 rounded-lg shadow-2xl lg:flex p-20 justify-center">
          <div className="text-lg flex flex-col items-center text-center">
            <h1 className="cursive text-6xl text-gray-300 mb-4">
              Hi there. I'm <span className="text-blue-100">Chandler</span>
            </h1>
            <div className="prose lg:prose-xl text-white text-center">
              {myBio}
            </div>
            <img
              src={myPicture}
              className="rounded-lg w-64 h-72 lg:h-96 lg:w-96 "
              alt={"Chandler Green"}
            ></img>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
