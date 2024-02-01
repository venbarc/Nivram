import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT",
    to: "/about",
  },
  {
    label: "OFFER",
    to: "/offer",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-[5%] py-[3%] mb-10 bg-transparent">
        <Link to="/">
          <div className="text-gray-200">Marvin</div>
        </Link>

        <ul className="flex space-x-5 lg:space-x-16">
          {data.map((item, key) => (
            <li
              className="text-xs text-gray-300 lg:text-sm lg:font-semibold hover:text-blue-200"
              key={key}
            >
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <Link to="/contact">
          <div className="bg-gray-200 hover:bg-blue-200 px-2 py-2 lg:px-3 text-xs lg:text-sm font-medium text-gray-800 rounded">
            Contact Me
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
