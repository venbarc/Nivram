import React from "react";
import Lottie from "lottie-react";

import tiktok from "../../assets/socials/json/tiktok.json";
import fb from "../../assets/socials/json/fb.json";
import instagram from "../../assets/socials/json/instagram.json";

const Socials = () => {
  return (
    <>
      <section className="flex justify-center bg-slate-200 gap-[20%] lg:gap-[10%] py-[4%] lg:py-[3%] relative z-10 text-center text-xs lg:text-sm">
        <div className="w-[11%] lg:w-[4%]">
          <a href="https://www.tiktok.com/@kuyamovhin" target="_blank">
            <Lottie animationData={tiktok}></Lottie>
          </a>
          tiktok
        </div>
        <div className="w-[11%] lg:w-[4%]">
          <a
            href="https://www.facebook.com/nivram.ollitsac.5243"
            target="_blank"
          >
            <Lottie animationData={fb}></Lottie>
          </a>
          facebook
        </div>
        <div className="w-[11%] lg:w-[4%]">
          <a href="https://www.instagram.com/kuyamovhin" target="_blank">
            <Lottie animationData={instagram}></Lottie>
          </a>
          instagram
        </div>
      </section>
    </>
  );
};

export default Socials;
