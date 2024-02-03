import React from "react";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import html2pdf from "html2pdf.js";

import "./style.scss";

import Navbar from "../../components/navbar";
import body_type_img1 from "../../assets/home/body_type_img1.png";
import body_type_img2 from "../../assets/home/body_type_img2.png";
import body_type_img3 from "../../assets/home/body_type_img3.png";

import download_details from "../../assets/personal_details/json/download.json";

import Socials from "../../components/socials/";

const personal_details = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  const data = [
    { body_type: "Ectomorph", img: body_type_img1 },
    { body_type: "Mesomorph", img: body_type_img2 },
    { body_type: "Endomorph", img: body_type_img3 },
  ];

  // Find the data entry that matches the selected body type
  const selectedData = data.find(
    (item) => item.body_type === formData.body_type
  );

  const downloadPDF = () => {
    const contentElement = document.getElementById("pdf-content");

    console.log("To Download File use your default browse Like chrome, safari, opera, brave etc.");

    // Set background color in the PDF content
    contentElement.classList.add("bg-slate-800");

    html2pdf(contentElement, {
      filename: `${formData.name}_personal_details.pdf`,
      margin: 10,
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    });
  };

  return (
    <>
      {/* opening  section  */}
      <section className="h-[840px] lg:h-[1000px] md:h-[1020px] mb-4 bg-slate-800">
        {/* Navbar  */}
        <Navbar />

        <div
          className="py-[4%] px-[5%] lg:py-[1%] justify-center ali"
          id="pdf-content"
        >
          <p className="text-[40px] lg:text-[45px] text-center text-gray-100 my-7 lg:my-1">
            Here is your Personal Details
          </p>

          <div className="flex justify-center items-center text-gray-100 gap-4 lg:text-lg lg:mx-[10%] ">
            <div>
              {/* Name  */}
              <span className="text-semibold">Name:</span>{" "}
              <span className="text-blue-300">{formData.name}</span> <br />
              {/* ody Type  */}
              <span className="text-semibold">Body Type:</span>{" "}
              <span className="text-blue-300">{formData.body_type}</span> <br />
              {/* Gender  */}
              <span className="text-semibold">Gender:</span>{" "}
              <span className="text-blue-300">{formData.gender}</span> <br />
              {/* Goal  */}
              <span className="text-semibold">Goal:</span>{" "}
              <span className="text-blue-300">{formData.goal}</span> <br />
              {/* Age  */}
              <span className="text-semibold">Age:</span>{" "}
              <span className="text-blue-300">{formData.age}</span> <br />
              {/* Height  */}
              <span className="text-semibold">Height:</span>{" "}
              <span className="text-blue-300">{formData.height} cm</span> <br />
              {/* Weight  */}
              <span className="text-semibold">Weight:</span>{" "}
              <span className="text-blue-300">{formData.weight} lbs</span>{" "}
              <br />
            </div>
            <div className="">
              {selectedData && (
                <img src={selectedData.img} alt={formData.body_type} />
              )}
            </div>
          </div>
        </div>
        <div className="flex text-xs lg:text-sm justify-center mt-6 text-gray-100">
          Download your details and hit me up to start your fitness journey.
        </div>
        <div className="flex justify-center items-center my-[5%] lg:my-[3%]">
          <button
            className="w-[30%] lg:w-[15%] rounded-full overflow-hidden cursor-pointer"
            onClick={downloadPDF}
          >
            <Lottie animationData={download_details}></Lottie>
          </button>
        </div>
      </section>

      {/* social section  */}
      <Socials />
    </>
  );
};

export default personal_details;
