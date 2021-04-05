import React, { useEffect } from "react";
import sanityClient from "../sanityClient";
import { useSelector, useDispatch } from "react-redux";
import { GET_AUTHOR } from "../utils/actions";

const About = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { author } = state;

  useEffect(() => {
    async function sanityFetch() {
      try {
        const author = sanityClient.fetch(`*[_type == "author"] {
            name,
            bio,
            "authorImage": image.asset->url
        }`);
        dispatch({ type: GET_AUTHOR, author: [...author] });
      } catch (err) {
        console.log(err);
      }
    }

    sanityFetch();
  }, [dispatch]);
  
  return <div></div>;
};

export default About;
