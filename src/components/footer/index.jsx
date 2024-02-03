import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="flex justify-center px-[5%] text-xs lg:px-[10%] lg:text-sm gap-[30%] lg:gap-[40%] bg-slate-800 py-[5%]  text-blue-100">
        <div className="">
          <a href="https://www.tiktok.com/@kuyamovhin" target="_blank">
            tiktok.com/@kuyamovhin
          </a>
          <br />
          <a
            href="https://www.facebook.com/nivram.ollitsac.5243"
            target="_blank"
          >
            facebook.com/nivram.ollitsac.5243
          </a>{" "}
          <br />
          <a href="https://www.instagram.com/kuyamovhin" target="_blank">
            instagram.com/kuyamovhin
          </a>{" "}
          <br />
        </div>
        <div className="">
          <p>Quick Links</p>
          <span className="text-gray-100 pt-2">
            <Link to="/" className="hover:text-blue-200">
              Home
            </Link>{" "}
            <br />
            <Link to="/about" className="hover:text-blue-200">
              About
            </Link>{" "}
            <br />
            <Link to="/services" className="hover:text-blue-200">
              Services
            </Link>
          </span>
        </div>
      </section>
      <div className="flex justify-center bg-gray-200 text-gray-500 hover:text-blue-500 py-2 text-xs font-light">
        <p>
          <a
            href="https://react-portfolio-gamma-jet.vercel.app/"
            target="_blank"
            className=""
          >
            developed-by: bndct
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
