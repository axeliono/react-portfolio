import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <header className="bg-gray-100">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            activeClassName="text-gray-500"
            className="inline-flex items-center py-6 px-3 mr-4 
            text-gray-900 hover:text-blue-900 text-4xl font-bold cursive tracking-widest"
          >
            Chandler Green
          </NavLink>
          <NavLink
            to="about"
            className="inline-flex items-center py-3 px-3 my-6 
            rounded text-gray-500 hover:text-gray-900"
            activeClassName="text-green-100 bg-blue-700"
          >
            About
          </NavLink>
          <NavLink
            to="project"
            className="inline-flex items-center py-3 px-3 my-6 
            rounded text-gray-500 hover:text-gray-900"
            activeClassName="text-green-100 bg-blue-700"
          >
            Project
          </NavLink>
          <NavLink
            to="post"
            className="inline-flex items-center py-3 px-3 my-6 
            rounded text-gray-500 hover:text-gray-900"
            activeClassName="text-green-100 bg-blue-700"
          >
            Post
          </NavLink>
          <a
            href="https://docs.google.com/document/d/1gHfwU75DKHnsHsPqTh6C1VQFctc3IN1mkcnFHFiP9sc/edit?usp=sharing"
            className="inline-flex items-center py-3 px-3 my-6 
            rounded text-gray-500 hover:text-gray-900"
            activeClassName="text-green-100 bg-blue-700"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>
        <div className="flex items-center md:inline-flex md:py-3 md:px-3 md:my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/chandleregreen/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://github.com/axeliono"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://www.facebook.com/Axeliono/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 30, width: 30 }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
