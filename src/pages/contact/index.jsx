import React from "react";
import Navbar from "../../components/navbar";
import Lottie from "lottie-react";

import animation1 from "../../assets/contact/animation1.json";

import Socials from "../../components/socials";

const Contact = () => {
  return (
    <>
      <div className="h-[810px] lg:h-[950px] bg-slate-700">
        <Navbar />

        <section className="py-[5%] lg:py-[0] text-gray-100 mx-[20%] text-sm lg:text-lg">
          <p className="text-center text-[30px] lg:text-[35px]">
            Book an appointment
          </p>

          <div className="flex justify-center lg:pt-5 lg:w-[30%] mx-auto">
            <Lottie animationData={animation1} />
          </div>

          <div className="flex gap-[30%] lg:gap-[20%] lg:pb-[5%] justify-center text-xs lg:text-sm text-gray-200 py-4">
            <div className="py-2">
              Location:{" "}
              <span className="text-blue-100">
                Taguig City, Cembo <br />
                (Philippines) <br />
              </span>
            </div>
            <div className="py-2">
              Contact: <span className="text-blue-100">09208946916</span>
            </div>
            <div className="py-2">
              Name: <span className="text-blue-100">Marvin Castillo</span>
            </div>
          </div>
        </section>
        <Socials />
      </div>
    </>
  );
};

export default Contact;
