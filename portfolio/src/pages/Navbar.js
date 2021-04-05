import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            activeClassName="text-gray-300"
            className="inline-flex items-center py-6 px-3 mr-4 
            text-gray-100 hover:text-gray-500 text-4xl font-bold cursive tracking-widest"
          >
            Chandler Green
          </NavLink>
          <NavLink
            to="about"
            className="inline-flex items-center py-3 px-3 my-6 
            rounded text-blue-100 hover:text-gray-900"
            activeClassName="text-green-100 bg-blue-700"
          >
            About
          </NavLink>
          <NavLink
            to="project"
            className="inline-flex items-center py-3 px-3 my-6 
            rounded text-blue-100 hover:text-gray-900"
            activeClassName="text-green-100 bg-blue-700"
          >
            Project
          </NavLink>
          <NavLink
            to="post"
            className="inline-flex items-center py-3 px-3 my-6 
            rounded text-blue-100 hover:text-gray-900"
            activeClassName="text-green-100 bg-blue-700"
          >
            Post
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/chandleregreen/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/axeliono"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/Axeliono/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
