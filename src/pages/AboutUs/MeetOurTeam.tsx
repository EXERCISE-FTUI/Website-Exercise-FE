import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useImages } from "./../../../public/assets/imageLoader";

import Sidebar from "./Sidebar";
import EmployeeList from "../../../public/assets/aboutUs";

import garis from "./../../../public/assets/aboutUs/images/exect.svg";

import Creatives from './division/Creatives';
import Design from './division/Design';
import Humanresources from './division/Humanresources';
import Finance from "./division/Finance";
import Projectmanagement from "./division/Projectmanager";
import Software from "./division/Software";
import Relation from './division/Relation';
import TnD from "./division/Tnd";
import Hardware from "./division/Hardware";


const MeetOurTeam = () => {
  const [currentViewed, setCurrentViewed] = useState(-1);

  const ourTeamRef = useRef(null);
  const executivesRef = useRef(null);

  const ourTeamInView = useInView(ourTeamRef);  
  const executivesInView = useInView(executivesRef, { margin: "80%" });

  useEffect(() => {
    executivesInView ? setCurrentViewed(0) : setCurrentViewed(-1);
  }, [executivesInView]);


  const executives = EmployeeList.filter(
    (datas) => datas.division == "Executive"
  );
  const images = useImages("./aboutUs/images", executives);

  return (
    <div ref={ourTeamRef}>
      <section
        id="meet-our-team"
        className="bg-exer-charcoal overflow-hidden text-exer-white h-screen w-screen flex justify-center items-center relative"
      >
        <div className="flex items-center justify-center">
          <div className="flex flex-row gap-4 lg:gap-16 text-[36px] md:text-[80px] lg:text-[150px] font-inter font-black leading-none w-fit mt-[200px] mb-[300px]">
            <h1 className="tracking-tighter">Meet</h1>
            <h1 className="font-outline-1 lg:font-outline-4 text-transparent lg:tracking-[-0.93rem]">
              Our
            </h1>
            <div className="bg-white w-fit leading-none p-0">
              <h1 className="leading-none text-exer-charcoal">TEAM</h1>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={executivesRef}
        id="the-executives"
        className="bg-exer-charcoal text-exer-white px-[5%] lg:px-[10%] font-inter mb-36 lg:mb-48 flex justify-center items-center"
      >
        <div className="w-[390px] md:w-[480px] lg:w-[790px]">
          <div className="flex flex-col font-inter font-black leading-none text-center items-center justify-center gap-5 mb-[15%] md:mb-8">
            <h1 className="text-[52px] md:text-[65px] lg:text-[113px] [text-shadow:_0.5px_2.5px_0_rgb(40_40_40_/_70%)]">
              THE
            </h1>
            <div className="bg-white skew-y-[-5deg] w-fit">
              <h1 className="text-[50px] md:text-[85px] lg:text-[107px] text-exer-charcoal shadow-xl">
                EXECUTIVE
              </h1>
            </div>
          </div>
          <div className="h-[400px] md:h-[520px] lg:h-[720px] relative mb-0 lg:mb-10 scale-80 lg:scale-100">
            <img
              src={images[executives[0].image] || ""}
              alt={executives[0].name}
              className="absolute bottom-[11%] md:bottom-[14%] lg:bottom-36 left-[-25%] md:left-[-14%] lg:left-[0%] scale-[.55] md:scale-[.65] lg:scale-100"
            />
            <img
              src={images[executives[1].image] || ""}
              alt={executives[1].name}
              className="absolute bottom-[10%] md:bottom-[12%] lg:bottom-24 right-[-23%] md:right-[-12%] lg:right-[2.5%] scale-[.54] md:scale-[.67] lg:scale-100"
            />
            <img
              src={garis}
              alt="garis"
              className="absolute bottom-[122px] lg:bottom-[77px] left-0 w-full"
            />
            <div className="absolute bottom-[106px] md:bottom-[20%] lg:bottom-16 left-[5%]">
              <h1 className="leading-none text-[18px] md:text-[25px] lg:text-[32.93px] font-black">
                {executives[0].position}
              </h1>
              <p className="leading-none text-[15px] md:text-[18px] lg:text-[32.93px]">
                {executives[0].name}
              </p>
            </div>
            <div className="absolute bottom-[82px] md:bottom-[14%] lg:bottom-3 left-[50%]">
              <h1 className="leading-none text-[18px] md:text-[25px] lg:text-[32.93px] font-black">
                {executives[1].position}
              </h1>
              <p className="leading-none text-[15px] md:text-[18px] lg:text-[32.93px]">
                {executives[1].name}
              </p>
            </div>
          </div>
          <div className="px-8 text-justify justify-center text-[16px] md:text-[19px] lg:text-[25px] font-normal font-poppins">
            <p>
              Weaving the magic of creativity with the power of strategy, our
              Marketing and Branding division crafts a distinctive narrative for
              Exercise that resonates with audiences and leaves a lasting
              impact. From developing marketing strategies, to executing
              campaigns and analyzing results.
            </p>
          </div>
        </div>
      </section>

      <Creatives setIndex={setCurrentViewed} index={1}/>
      <Design setIndex={setCurrentViewed} index={2}/>
      <Humanresources setIndex={setCurrentViewed} index={3}/>
      <Finance setIndex={setCurrentViewed} index={4}/>
      <Projectmanagement setIndex={setCurrentViewed} index={5}/>
      <Software setIndex={setCurrentViewed} index={6}/>
      <Relation setIndex={setCurrentViewed} index={7}/>
      <TnD setIndex={setCurrentViewed} index={8}/>
      <Hardware setIndex={setCurrentViewed} index={9}/>

      <Sidebar
        style={{
          transform: ourTeamInView ? "none" : "translateX(-200px)",
          opacity: ourTeamInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
        index={currentViewed}
      />
    </div>
  );
};

export default MeetOurTeam;
