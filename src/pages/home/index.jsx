import React, { useState } from "react";
import "./style.scss";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

import body_type_img1 from "../../assets/home/body_type_img1.png";
import body_type_img2 from "../../assets/home/body_type_img2.png";
import body_type_img3 from "../../assets/home/body_type_img3.png";

import animation_arrow from "../../assets/home/json/arrow_down.json";
import animation_weight from "../../assets/home/json/weight.json";
import animation_height from "../../assets/home/json/height.json";

import age_teen from "../../assets/home/age_teen.jpg";
import age_young_adult from "../../assets/home/age_young_adult.jpg";
import age_adult from "../../assets/home/age_adult.jpg";
import age_old from "../../assets/home/age_old.jpg";

import gender_male from "../../assets/home/gender_male.jpg";
import gender_female from "../../assets/home/gender_female.jpg";

import goal_loose from "../../assets/home/goal_loose.png";
import goal_gain from "../../assets/home/goal_gain.png";
import goal_shredded from "../../assets/home/goal_shredded.png";

import Navbar from "../../components/navbar";

const data = [
  { body_type: "Ectomorph" },
  { body_type: "Mesomorph" },
  { body_type: "Endomorph" },
];

const Home = () => {
  const [formData, setFormData] = useState({
    body_type: "",
    gender: "Male",
    age: "(13 - 19) - Teenager",
    goal: "Loose Weight",
    height: "",
    weight: "",
    name: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with formData
    console.log("Form Data:", formData);

    // Redirect to the target page with form data
    navigate("/personal_details", { state: { formData } });
  };

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

      <form onSubmit={handleSubmit}>
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
            value={formData.body_type}
            onChange={handleChange}
            className="mt-16 font tracking-widest bg-slate-300 text-gray-800 py-2 px-4 w-full text-center rounded"
            required
            name="body_type"
          >
            <option value="" disabled>
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

          <div className="grid grid-cols-2 gap-5 mt-[10%] lg:mt-[3%]">
            <div className="mx-auto my-auto">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                className="hidden"
                id="gender_1"
              />
              <label
                className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                  formData.gender === "Male"
                    ? "bg-blue-200 text-gray-800"
                    : "text-gray-400"
                }`}
                htmlFor="gender_1"
              >
                <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                  Male
                </p>
                <div className="px-[15%] mx-auto my-auto">
                  <img src={gender_male} />
                </div>
              </label>
            </div>
            <div className="mx-auto my-auto">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                className="hidden"
                id="gender_2"
              />
              <label
                className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                  formData.gender === "Female"
                    ? "bg-blue-200 text-gray-800"
                    : "text-gray-400"
                }`}
                htmlFor="gender_2"
              >
                <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                  Female
                </p>
                <div className="px-[6%] lg:px-[11%] mx-auto my-auto">
                  <img src={gender_female} />
                </div>
              </label>
            </div>
          </div>
        </section>

        {/* What is your goal section */}
        <section className="px-[10%] py-[5%]">
          <p className="text-gray-800 text-[20px] lg:text-[35px] font-bold text-center">
            <span className="text-blue-400">Third</span>, What's your{" "}
            <span className="text-gray-800 underline">Goal </span> ?
          </p>

          <div className="py-[5%] lg:py-[0%]">
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-5 mt-[5%] lg:mt-[3%]">
              <div className="mx-auto my-auto">
                <input
                  type="radio"
                  name="goal"
                  value="Loose Weight"
                  checked={formData.goal === "Loose Weight"}
                  onChange={handleChange}
                  className="hidden"
                  id="goal_1"
                />
                <label
                  className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                    formData.goal === "Loose Weight"
                      ? "bg-blue-200 text-gray-800"
                      : "text-gray-400 bg-gray-100"
                  }`}
                  htmlFor="goal_1"
                >
                  <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                    Loose Weight <br />
                  </p>
                  <div className="px-[15%] mx-auto my-auto">
                    <img src={goal_loose} />
                  </div>
                </label>
              </div>
              <div className="mx-auto my-auto">
                <input
                  type="radio"
                  name="goal"
                  value="Gain Muscles"
                  checked={formData.goal === "Gain Muscles"}
                  onChange={handleChange}
                  className="hidden"
                  id="goal_2"
                />
                <label
                  className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                    formData.goal === "Gain Muscles"
                      ? "bg-blue-200 text-gray-800"
                      : "text-gray-400 bg-gray-100"
                  }`}
                  htmlFor="goal_2"
                >
                  <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                    Gain Muscles <br />
                  </p>
                  <div className="px-[15%] mx-auto my-auto">
                    <img src={goal_gain} />
                  </div>
                </label>
              </div>
              <div className="mx-auto my-auto">
                <input
                  type="radio"
                  name="goal"
                  value="Get Shredded"
                  checked={formData.goal === "Get Shredded"}
                  onChange={handleChange}
                  className="hidden"
                  id="goal_3"
                />
                <label
                  className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                    formData.goal === "Get Shredded"
                      ? "bg-blue-200 text-gray-800"
                      : "text-gray-400 bg-gray-100"
                  }`}
                  htmlFor="goal_3"
                >
                  <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                    Get Shredded <br />
                  </p>
                  <div className="px-[15%] mx-auto my-auto">
                    <img src={goal_shredded} />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* What is your age section */}
        <section className="px-[10%] py-[5%]" id="bg__intro__age_section">
          <p className="text-gray-100 text-[20px] lg:text-[35px] font-bold text-center">
            <span className="text-blue-400">Forth</span>, What's your{" "}
            <span className="text-gray-100 underline">Age </span> ?
          </p>

          <div className="py-[5%]">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-[5%] lg:mt-[3%]">
              <div className="mx-auto my-auto">
                <input
                  type="radio"
                  name="age"
                  value="(13 - 19) - Teenager"
                  checked={formData.age === "(13 - 19) - Teenager"}
                  onChange={handleChange}
                  className="hidden"
                  id="age_1"
                />
                <label
                  className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                    formData.age === "(13 - 19) - Teenager"
                      ? "bg-blue-200 text-gray-800"
                      : "text-gray-400"
                  }`}
                  htmlFor="age_1"
                >
                  <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                    Teenager <br />
                    (13 - 19)
                  </p>
                  <div className="px-[15%] mx-auto my-auto">
                    <img src={age_teen} />
                  </div>
                </label>
              </div>
              <div className="mx-auto my-auto">
                <input
                  type="radio"
                  name="age"
                  value="(20 - 29) - Young Adult"
                  checked={formData.age === "(20 - 29) - Young Adult"}
                  onChange={handleChange}
                  className="hidden"
                  id="age_2"
                />
                <label
                  className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                    formData.age === "(20 - 29) - Young Adult"
                      ? "bg-blue-200 text-gray-800"
                      : "text-gray-400"
                  }`}
                  htmlFor="age_2"
                >
                  <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                    Young Adult <br />
                    (20 - 29)
                  </p>
                  <div className="px-[15%] lg:px-[16%] mx-auto my-auto">
                    <img src={age_young_adult} />
                  </div>
                </label>
              </div>
              <div className="mx-auto my-auto">
                <input
                  type="radio"
                  name="age"
                  value="(30 - 49) - Adult"
                  checked={formData.age === "(30 - 49) - Adult"}
                  onChange={handleChange}
                  className="hidden"
                  id="age_3"
                />
                <label
                  className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                    formData.age === "(30 - 49) - Adult"
                      ? "bg-blue-200 text-gray-800"
                      : "text-gray-400"
                  }`}
                  htmlFor="age_3"
                >
                  <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                    Adult <br />
                    (30 - 49)
                  </p>
                  <div className="px-[15%] lg:px-[12%] mx-auto my-auto">
                    <img src={age_adult} />
                  </div>
                </label>
              </div>
              <div className="mx-auto my-auto">
                <input
                  type="radio"
                  name="age"
                  value="(50+) - Older Adult"
                  checked={formData.age === "(50+) - Older Adult"}
                  onChange={handleChange}
                  className="hidden"
                  id="age_4"
                />
                <label
                  className={`flex flex-col p-4 border-2 border-gray-400 cursor-pointer ${
                    formData.age === "(50+) - Older Adult"
                      ? "bg-blue-200 text-gray-800"
                      : "text-gray-400"
                  }`}
                  htmlFor="age_4"
                >
                  <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                    Older Adults <br />
                    (50+)
                  </p>
                  <div className="px-[19%] lg:px-[16%] mx-auto my-auto">
                    <img src={age_old} />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* What is your Height and Weight section */}
        <section className="px-[10%] py-[5%]" id="">
          <p className="text-gray-800 text-[20px] lg:text-[35px] font-bold text-center">
            <span className="text-blue-400">Forth</span>, What's your{" "}
            <span className="text-gray-800 underline">Height & Weight </span> ?
          </p>

          <div className="py-[5%]">
            <div className="grid grid-cols-2 gap-5 mt-[5%] lg:mt-[3%]">
              <div className="mx-auto my-auto">
                <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                  Height <br />
                </p>
                <div className="lg:px-[20%] mx-auto my-auto">
                  <Lottie animationData={animation_height} />
                </div>
              </div>
              <div className="mx-auto my-auto">
                <p className="text-sm lg:text-lg pb-2 text-center font-semibold">
                  Weight <br />
                </p>
                <div class="mx-auto my-auto">
                  <Lottie animationData={animation_weight} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex justify-center">
                <input
                  className="bg-slate-300 p-4 text-center w-full text-sm lg:text-md"
                  type="number"
                  placeholder="Input heigh here"
                  required
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center">
                <input
                  className="bg-slate-300 p-4 text-center w-full text-sm lg:text-md"
                  type="number"
                  placeholder="Input weight here in lbs"
                  required
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex justify-center text-blue-500">In cm</div>
              <div className="flex justify-center text-blue-500">In lbs</div>
            </div>
          </div>
        </section>

        {/* What is your Name */}
        <section className="px-[10%] pb-[10%]" id="">
          <p className="pb-5 text-gray-800 text-[20px] lg:text-[35px] font-bold text-center">
            <span className="text-blue-400">Lastly</span>, What's your{" "}
            <span className="text-gray-800 underline">Name </span> ?
          </p>
          <input
            className="bg-slate-300 p-4 text-center w-full text-sm lg:text-lg tracking-widest"
            type="text"
            placeholder="Your name"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </section>

        {/* Details Section  */}
        {formData.body_type &&
          formData.gender &&
          formData.goal &&
          formData.age &&
          formData.height &&
          formData.weight &&
          formData.name && (
            <section className="px-[10%] lg:px-[20%] my-[10%] lg:mt-[5%]">
              <p className="text-gray-700 text-[20px] lg:text-[35px] font-bold">
                <span className="text-blue-400">{formData.name}</span> Check
                Your Details
              </p>
              <p>
                Body Type :{" "}
                <span className="text-blue-400 text-md">
                  {formData.body_type}
                </span>{" "}
                <br />
                Gender :{" "}
                <span className="text-blue-400 text-md">
                  {formData.gender}{" "}
                </span>
                <br />
                Goal :{" "}
                <span className="text-blue-400 text-md">{formData.goal} </span>
                <br />
                Age :{" "}
                <span className="text-blue-400 text-md">{formData.age} </span>
                <br />
                Height :{" "}
                <span className="text-blue-400 text-md">
                  {formData.height} cm{" "}
                </span>
                <br />
                Weight :{" "}
                <span className="text-blue-400 text-md">
                  {formData.weight} lbs{" "}
                </span>
                <br />
              </p>
              <div>
                <button
                  className="bg-blue-400 text-gray-100 py-3 px-4 rounded w-full mt-5 hover:bg-blue-300"
                  type="submit"
                >
                  Complete
                </button>
              </div>
            </section>
          )}
      </form>
    </>
  );
};

export default Home;
