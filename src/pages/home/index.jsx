import React from "react";
import "./style.scss";
import Lottie from "lottie-react";
import { useState } from "react";

import body_type_img1 from "../../assets/home/body_type_img1.png";
import body_type_img2 from "../../assets/home/body_type_img2.png";
import body_type_img3 from "../../assets/home/body_type_img3.png";

import animation_arrow from "../../assets/home/json/arrow_down.json";

import age_teen from "../../assets/home/age_teen.jpg";
import age_young_adult from "../../assets/home/age_young_adult.jpg";
import age_adult from "../../assets/home/age_adult.jpg";
import age_old from "../../assets/home/age_old.jpg";

import gender_male from "../../assets/home/gender_male.jpg";
import gender_female from "../../assets/home/gender_female.jpg";

import Navbar from "../../components/navbar";

const data = [
  { body_type: "Ectomorph" },
  { body_type: "Mesomorph" },
  { body_type: "Endomorph" },
];

const Home = () => {
  const [body_type, set_body_type] = useState("");
  const [gender, set_gender] = useState("Male");
  const [age, set_age] = useState("Teenager");
  const [specific_age, set_specific_age] = useState("");

  return (
    <>
      {/* opening  section  */}
      <section className="h-[500px] lg:h-[750px]" id="bg__intro">
        {/* Navbar  */}
        <Navbar />
        <p className="text-gray-300 text-[30px] lg:text-[70px] mx-[10%] mt-[15%] lg:mt-[3%] font-bold text-center">
          Sweat, Lift, Conquer: A Gym Rat's{" "}
          <span className="text-blue-300">Trinity</span>.
        </p>
        <p className="mx-[10%] mt-[15%] lg:mt-[7%] text-gray-100 text-[17px] lg:text-[30px] text-center">
          Your <span className="text-blue-300">journey</span> begins now,{" "}
          <span className="text-blue-300">Start</span> your day one here!
        </p>
        <div className="w-[11%] md:w-[4%] lg:w-[5%] mt-6 lg:mt-14  h-auto mx-auto">
          <Lottie animationData={animation_arrow} />
        </div>
      </section>

      <form>
        {/* what is your body type section  */}
        <section className="mx-[10%] my-[5%] lg:mt-[5%]">
          <p className="text-gray-700 text-[20px] lg:text-[35px] font-bold text-center">
            <span className="text-blue-400">First</span>, What is your{" "}
            <span className="text-gray-700 underline">Body type </span> ?
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-3 mt-[10%] lg:mt-[5%]">
            <div>
              <p className="text-left lg:text-center text-lg font-semibold mb-10">
                Ectomorph Body Type
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                <img src={body_type_img1} />
                <p className="text-sm">
                  * Small “delicate” frame and bone structure <br />
                  * Classic “hardgainer” <br />
                  * Flat chest <br />
                  * Small shoulders <br />
                  * Thin <br />
                  * Lean muscle mass <br />
                  * Finds it hard to gain weight <br />
                  * Fast metabolism <br />
                </p>
              </div>
            </div>
            <div>
              <p className="text-right lg:text-center text-lg font-semibold mb-10">
                Mesomorph Body Type
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                <p className="text-sm">
                  * Athletic <br />
                  * Generally hard body <br />
                  * Well defined muscles <br />
                  * Rectangular shaped body <br />
                  * Strong <br />
                  * Gains muscle easily <br />
                  * Gains fat more easily than ectomorphs <br />
                </p>
                <img src={body_type_img2} />
              </div>
            </div>
            <div>
              <p className="text-left lg:text-center text-lg font-semibold mb-10">
                Endomorph Body Type
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                <img src={body_type_img3} />
                <p className="text-sm">
                  * Soft and round body <br />
                  * Gains muscle and fat very easily <br />
                  * Is generally short <br />
                  * "Stocky" build <br />
                  * Round physique <br />
                  * Finds it hard to lose fat <br />
                  * Slow metabolism <br />
                  * Muscles not so well defined <br />
                </p>
              </div>
            </div>
          </div>
          {/* Selection  */}
          <select
            value={body_type}
            onChange={(e) => set_body_type(e.target.value)}
            className="mt-16 font tracking-widest bg-slate-300 text-gray-800 py-2 px-4 w-full text-center rounded"
            required
          >
            <option value="" disabled selected>
              Select Body Type
            </option>
            {data.map((item) => (
              <option key={item.body_type} value={item.body_type}>
                {item.body_type}
              </option>
            ))}
          </select>
        </section>

        {/* What is your Gender section */}
        <section className="px-[10%] py-[5%]" id="bg__intro__gender_section">
          <p className="text-gray-200 text-[20px] lg:text-[35px] font-bold text-center">
            <span className="text-blue-400">Second</span>, What's your{" "}
            <span className="text-gray-200 underline">Gender </span> ?
          </p>

          <div class="grid grid-cols-2 gap-5 mt-[10%] lg:mt-[3%]">
            <div className="mx-auto my-auto">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => set_gender(e.target.value)}
                class="hidden"
                id="gender_1"
              />
              <label
                className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                  gender === "Male"
                    ? "bg-blue-200 text-gray-800"
                    : "text-gray-400"
                }`}
                htmlFor="gender_1"
              >
                <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                  Male
                </p>
                <div class="px-[15%] mx-auto my-auto">
                  <img src={gender_male} />
                </div>
              </label>
            </div>
            <div className="mx-auto my-auto">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => set_gender(e.target.value)}
                class="hidden"
                id="gender_2"
              />
              <label
                className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                  gender === "Female"
                    ? "bg-blue-200 text-gray-800"
                    : "text-gray-400"
                }`}
                htmlFor="gender_2"
              >
                <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                  Female
                </p>
                <div class="px-[6%] lg:px-[11%] mx-auto my-auto">
                  <img src={gender_female} />
                </div>
              </label>
            </div>
          </div>
        </section>

        {/* What is your age section */}
        <section className="px-[10%] py-[5%]">
          <p className="text-gray-800 text-[20px] lg:text-[35px] font-bold text-center">
            <span className="text-blue-400">Third</span>, What's your{" "}
            <span className="text-gray-800 underline">Age </span> ?
          </p>

          <div className="py-[5%]">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-[5%] lg:mt-[3%]">
              <div className="mx-auto my-auto">
                <input
                  type="radio"
                  name="age"
                  value="Teenager"
                  checked={age === "Teenager"}
                  onChange={(e) => set_age(e.target.value)}
                  class="hidden"
                  id="age_1"
                />
                <label
                  className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                    age === "Teenager"
                      ? "bg-blue-200 text-gray-800"
                      : "text-gray-400"
                  }`}
                  htmlFor="age_1"
                >
                  <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                    Teenager <br />
                    (13 - 19)
                  </p>
                  <div class="px-[15%] mx-auto my-auto">
                    <img src={age_teen} />
                  </div>
                </label>
              </div>
              <div className="mx-auto my-auto">
                <input
                  type="radio"
                  name="age"
                  value="Young Adult"
                  checked={age === "Young Adult"}
                  onChange={(e) => set_age(e.target.value)}
                  class="hidden"
                  id="age_2"
                />
                <label
                  className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                    age === "Young Adult"
                      ? "bg-blue-200 text-gray-800"
                      : "text-gray-400"
                  }`}
                  htmlFor="age_2"
                >
                  <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                    Young Adult <br />
                    (20 - 29)
                  </p>
                  <div class="px-[15%] lg:px-[16%] mx-auto my-auto">
                    <img src={age_young_adult} />
                  </div>
                </label>
              </div>
              <div className="mx-auto my-auto">
                <input
                  type="radio"
                  name="age"
                  value="Adult"
                  checked={age === "Adult"}
                  onChange={(e) => set_age(e.target.value)}
                  class="hidden"
                  id="age_3"
                />
                <label
                  className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                    age === "Adult"
                      ? "bg-blue-200 text-gray-800"
                      : "text-gray-400"
                  }`}
                  htmlFor="age_3"
                >
                  <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                    Adult <br />
                    (30 - 49)
                  </p>
                  <div class="px-[15%] lg:px-[12%] mx-auto my-auto">
                    <img src={age_adult} />
                  </div>
                </label>
              </div>
              <div className="mx-auto my-auto">
                <input
                  type="radio"
                  name="age"
                  value="Older Adult"
                  checked={age === "Older Adult"}
                  onChange={(e) => set_age(e.target.value)}
                  class="hidden"
                  id="age_4"
                />
                <label
                  className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                    age === "Older Adult"
                      ? "bg-blue-200 text-gray-800"
                      : "text-gray-400"
                  }`}
                  htmlFor="age_4"
                >
                  <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                    Older Adults <br />
                    (50+)
                  </p>
                  <div class="px-[19%] lg:px-[16%] mx-auto my-auto">
                    <img src={age_old} />
                  </div>
                </label>
              </div>
            </div>
            <div className="flex justify-center items-center my-5 border-gray-800 rounded">
              <input
                className="mx-5 bg-slate-300 text-center p-2"
                placeholder="Input your specific Age"
                type="number"
                value={specific_age}
                onChange={(e) => set_specific_age(e.target.value)}
                required
              />
            </div>
          </div>
        </section>

        {/* Details Section  */}
        {body_type && gender && age && specific_age && (
          <section className="mx-[10%] my-[10%] lg:mt-[5%]">
            <p className="text-gray-700 text-[20px] lg:text-[35px] font-bold">
              Your Personal Details
            </p>
            <p>
              Body Type :{" "}
              <span className="text-blue-400 text-md">{body_type}</span> <br />
              Gender : <span className="text-blue-400 text-md">{gender} </span>
              <br />
              Age :{" "}
              <span className="text-blue-400 text-md">
                {specific_age} years old - ({age}){" "}
              </span>
              <br />
            </p>
          </section>
        )}
      </form>
    </>
  );
};

export default Home;
