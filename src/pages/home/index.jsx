import React from "react";
import "./style.scss";
import Lottie from "lottie-react";

import body_type_img1 from "../../assets/home/body_type_img1.png";
import body_type_img2 from "../../assets/home/body_type_img2.png";
import body_type_img3 from "../../assets/home/body_type_img3.png";

import animation_1 from "../../assets/home/json/arrow_down.json";

import Navbar from "../../components/navbar";

const data = [
  {
    type: "Ectomorph",
  },
  {
    type: "Mesomorph",
  },
  {
    type: "Endomorph",
  },
];

const Home = () => {
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
          <span className="text-blue-300">Start</span> your day one here !
        </p>
        <div className="w-[11%] mt-6 lg:mt-14 lg:w-[5%] h-auto mx-auto">
          <Lottie animationData={animation_1}></Lottie>
        </div>
      </section>

      <form action="#" method="post">
        {/* what is your body type section  */}
        <section className="mx-[10%] my-[10%] lg:mt-[5%]">
          <p className="text-gray-700 text-[20px] lg:text-[35px] font-bold text-center">
            First, What is your{" "}
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
          <select
            name="body_tye"
            className="mt-16 bg-slate-400 text-gray-100 py-2 px-4 w-full text-center rounded"
          >
            {data.map((item) => (
              <option value={item.type}>{item.type}</option>
            ))}
          </select>
        </section>
      </form>
    </>
  );
};

export default Home;
