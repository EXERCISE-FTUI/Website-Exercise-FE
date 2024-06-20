import { useState } from "react";
import "./../../index.css";
import Searchbarimg from "./../../assets/features/searchbarexer.png";
import Rankdte from "./../../assets/features/rankdte.png";

function Features() {

  //mapping features

  return (
    <>
      <section className="font-poppins text-white bg-gradient-to-b from-exer-charcoal to-[#0B1317] w-full h-[478px] px-[134px] py-[131px]">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col">
            <div className="flex flex-row text-[50px] font-bold items-center gap-2">
              <h1 className="">Try our</h1>
              <div className="w-fit h-fit bg-exer-grayblue transform skew-x-[-19deg] leading-none px-1">
                <h1>Features</h1>
              </div>
            </div>
            <p className="w-[548px] text-[20px]">
              Shorten URL, Removing Backrounds, or even Transform Files with
              ease. Unlock convenience with our toolset!"
            </p>
          </div>
          <div>
            <div className="bg-red-800 h-[240px] w-[500px]"></div>
            <h1 className="font-poppins text-[25px] font-semibold">
              Curious to Try?
            </h1>
            <h2 className="font-poppins text-[20px] font-light">
              Scroll down to view tools...
            </h2>
          </div>
        </div>
      </section>
      <section className="font-poppins text-white bg-gradient-to-t via-exer-charcoal from-[#0B1317] to-[#0B1317] w-full h-[1026px] px-[145px] items-center flex gap-[105px]">
        <div className="flex flex-col gap-0 font-inter leading-none">
          <div className="w-fit h-fit bg-[#FFFFFF] text-exer-gunmetal font-extrabold">
            <h1 className="text-[82px] p-0 leading-none"> CHECK </h1>
          </div>
          <h1 className="font-extrabold text-[99px] tracking-[-5.965px]">
            Our
          </h1>
          <h1 className="font-black text-[106px] pl-6 tracking-[-12.794px]">
            TOOLS
          </h1>
        </div>
        {/* card untuk features */}
        <div className="flex flex-row gap-[72.7px]">
          <div className="w-[345px] h-[432px] bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col">
            <img
              src={Searchbarimg}
              alt="searchbarexer"
              className="w-auto h-[275px]"
              style={{ objectFit: "cover" }}
            />
            <div className="flex flex-col justify-center items-center py-[18px]">
              <div className="bg-exer-darkelectricblue font-inter font-black text-[31px] px-1 leading-none">
                URL Shortener
              </div>
              <p className="font-normal font-inter text-[15.9px] text-center text-black pt-[10px]">
                Streamline your online presence, craft a personalized link that
                reflects your brand and simplifies your web presence. try now!
              </p>
            </div>
          </div>
          <div className="w-[345px] h-[432px] bg-white rounded-3xl overflow-hidden shadow-xl">
            <img
              src={Rankdte}
              alt="searchbarexer"
              className="w-auto h-[275px]"
              style={{ objectFit: "cover" }}
            />
            <div className="flex flex-col justify-center items-center py-[18px]">
              <div className="bg-exer-darkelectricblue font-inter font-black text-[31px] px-1 leading-none">
                Ranking Elektro
              </div>
              <p className="font-normal font-inter text-[15.9px] text-center text-black pt-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                fringilla nulla.
              </p>
            </div>
          </div>
        </div>
        {/* card untuk features */}
      </section>
    </>
  );
}

export default Features;
