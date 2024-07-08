import { ArrowDown } from "@phosphor-icons/react";
import Timbil from "./../../../public/assets/aboutUs/images/timbil.png";
import geoKiri from "./../../../public/assets/aboutUs/images/Geo Kiri.png";
import geoKanan from "./../../../public/assets/aboutUs/images/Geo Kanan.png";

const GetToKnow = () => {
  return (
    <section id="Get to know us" className="bg-exer-charcoal overflow-hidden">
      <div className="z-0 relative">
        <img
          src={Timbil}
          alt="team building image"
          style={{ objectFit: "cover" }}
          className="z-[-10] w-screen top-0 rounded-b-3xl h-[640px]"
        />
        <img
          src={geoKiri}
          alt="geo kiri"
          className="absolute top-[-50px] md:top-0 left-[-100px] md:left-0 z-50"
        />
        <img
          src={geoKanan}
          alt="geo kanan"
          className="absolute bottom-[-80px] md:bottom-0 right-[-65px] md:right-0 z-50"
        />
        <div className="absolute w-screen flex flex-col top-[210px] text-exer-white">
          <div className="flex flex-row gap-2 font-rufina font-bold text-center justify-center items-center text-[55px] md:text-[80px]">
            <h1 className="justify-center">About</h1>
            <h1 className="text-transparent font-outline-1 font-semibold">
              Us
            </h1>
            <h1 className="skew-x-[-7deg]">!</h1>
          </div>
          <div className="justify-center flex flex-row gap-2">
            <div className="flex flex-col">
              <h1 className="leading-none font-semibold text-[25px] md:text-[30.80px]">
                Get to Know Us
              </h1>
              <p className="leading-none text-[20px] md:text-2xl">
                scroll down below ...
              </p>
            </div>
            <a href="#meet-our-team">
              <button className="relative rounded-full w-[45px] md:w-[55px] h-[45px] md:h-[55px] bg-transparent backdrop-blur-[2px] outline outline-gray-300 hover:scale-105 transition-all">
                <ArrowDown
                  size={38}
                  className="absolute top-1 md:top-2 left-[3px] md:left-2"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetToKnow;
