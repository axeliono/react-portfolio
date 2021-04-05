import React from "react";
import mountainImage from "../assets/images/mountain-pic.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={mountainImage}
        alt="starry sky above mountain"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-gray-300 font-bold cursive leading-none lg:leading-snug home-name">
          Welcome To My Portfolio!
        </h1>
      </section>
    </main>
  );
};

export default Home;
