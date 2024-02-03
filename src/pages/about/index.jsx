import React from "react";
import Navbar from "../../components/navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/about/about (1).jpg";
import img2 from "../../assets/about/about (2).jpg";
import img3 from "../../assets/about/about (3).jpg";
import img4 from "../../assets/about/about (4).jpg";
import img5 from "../../assets/about/about (5).jpg";
import img6 from "../../assets/about/about (6).jpg";
import img7 from "../../assets/about/about (7).jpg";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "#4299e1", // Change this to blue-200
          borderRadius: "50%",
          display: "inline-block",
          margin: "0 8px",
        }}
      ></div>
    ),
  };

  return (
    <>
      {/* opening  section  */}
      <section className="h-[840px] lg:h-[1000px] md:h-[1020px] bg-slate-700">
        {/* Navbar  */}
        <Navbar />

        <div className="py-[4%] px-[5%] lg:py-[0%] justify-center ali">
          <p className="text-[40px] lg:text-[45px] text-center text-gray-100 my-7 lg:my-1">
            About Me
          </p>
          <p className="text-gray-100 my-8 text-sm lg:mx-[20%] lg:my-[3%]">
            I am <span className="text-blue-200">Marvin Castillo</span>, a coach
            who instructs and will help guide you through your fitness journey.
            A bit about my background: I competed in{" "}
            <span className="text-blue-200">
              WFF MR and MRS Philippines in 2023
            </span>
            , winning the Bermuda Beach Model for Newcomer 2nd place runner-up
            and Bermuda Beach Model 1st Timer-Champion.
          </p>

          <div className="lg:hidden">
            <Slider {...settings}>
              <div>
                <img src={img1} className="w-[95%]" />
              </div>
              <div>
                <img src={img2} className="w-[95%]" />
              </div>
              <div>
                <img src={img3} className="w-[95%]" />
              </div>
              <div>
                <img src={img4} className="w-[95%]" />
              </div>
              <div>
                <img src={img5} className="w-[95%]" />
              </div>
              <div>
                <img src={img6} className="w-[95%]" />
              </div>
              <div>
                <img src={img7} className="w-[95%]" />
              </div>
            </Slider>
          </div>

          <div className="hidden lg:block mx-[20%]">
            <Slider {...settings}>
              <div>
                <img src={img1} className="w-[90%]" />
              </div>
              <div>
                <img src={img2} className="w-[90%]" />
              </div>
              <div>
                <img src={img3} className="w-[90%]" />
              </div>
              <div>
                <img src={img4} className="w-[90%]" />
              </div>
              <div>
                <img src={img5} className="w-[90%]" />
              </div>
              <div>
                <img src={img6} className="w-[90%]" />
              </div>
              <div>
                <img src={img7} className="w-[90%]" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
