import React from "react";
import Navbar from "../../components/navbar";
import Lottie from "lottie-react";

import animation2 from "../../assets/services/json/animation2.json";
import animation3 from "../../assets/services/json/animation3.json";
import animation4 from "../../assets/services/json/animation4.json";
import animation5 from "../../assets/services/json/animation5.json";
import animation6 from "../../assets/services/json/animation6.json";
import animation7 from "../../assets/services/json/animation7.json";

const Services = () => {
  return (
    <>
      {/* opening  section  */}
      <section className="h-[1500px] md:h-[1350px] lg:h-[1550px] bg-slate-700">
        {/* Navbar  */}
        <Navbar />

        <p className="text-[40px] lg:text-[45px] text-center text-gray-100 my-7 lg:my-1">
          What I Offer ?
        </p>

        <div className="lg:mx-[30%] md:mx-[30%]">
          <div className="grid grid-cols-2 justify-items-center gap-3 mx-[5%] py-[5%] text-gray-100">
            <div>
              <p className="text-lg text-blue-200 mb-2">
                I Will Provide your Macros
              </p>
              <p className="text-sm">
                Macronutrients are the essential nutrients that make up the bulk
                of the diet and provide the energy necessary for bodily
                functions. There are three main macronutrients:
              </p>
            </div>
            <div className="w-[70%]">
              <Lottie animationData={animation4}></Lottie>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-items-center text-center gap-3 mx-[5%] mb-5 text-gray-100">
            <div>
              <p className="text-sm text-blue-200">Carbohydrates %</p>
              <div className="w-[100%]">
                <Lottie animationData={animation5}></Lottie>
              </div>
            </div>
            <div>
              <p className="text-sm text-blue-200">Proteins %</p>
              <div className="w-[100%]">
                <Lottie animationData={animation6}></Lottie>
              </div>
            </div>
            <div>
              <p className="text-sm text-blue-200">Fats %</p>
              <div className="w-[100%] mt-7">
                <Lottie animationData={animation7}></Lottie>
              </div>
            </div>
          </div>

          <div className="flex justify-items-center gap-3 mx-[5%] py-[5%] text-gray-100">
            <div>
              <p className="text-lg text-blue-200 mb-2">
                Provide Work out routine
              </p>
              <p className="text-sm pb-5">
                I will provide your workout routine based on your availability,
                fitness goals, and preferences, ensuring a tailored and
                effective plan to help you reach your desired level of fitness
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="w-[100%]">
                  <Lottie animationData={animation2}></Lottie>
                </div>
                <div className="w-[100%]">
                  <Lottie animationData={animation3}></Lottie>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-items-center gap-3 mx-[5%] py-[5%] text-gray-100">
            <div>
              <p className="text-lg text-blue-200 mb-2">Budget Friendly</p>
              <p className="text-sm pb-5">
                Get fit without breaking the bank! I offer budget-friendly
                fitness solutions for all levels. Personalized workout and
                nutrition plans cater to your goals, making it easy on your
                wallet. Let's make your fitness journey both effective and
                affordable—where your budget meets your best self!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
