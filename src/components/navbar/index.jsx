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
    label: "CLIENTS",
    to: "/clients",
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
            <li className="text-xs text-gray-300 lg:text-sm lg:font-semibold" key={key}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <Link to="/contact">
          <div className="bg-gray-100 px-3 py-2 text-sm text-gray-800 rounded">
            Contact Me
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
