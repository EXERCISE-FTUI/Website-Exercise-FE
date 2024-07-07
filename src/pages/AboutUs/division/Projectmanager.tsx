import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import DirectorMap from "../../../assets/aboutUs/components/DirectorMap";
import StaffMap from "../../../assets/aboutUs/components/StaffMap";

const Projectmanagement = ({
  index = 5,
  setIndex,
}: {
  index: number;
  setIndex: (index: number) => void;
}) => {
  const divRef = useRef(null);
  const divInView = useInView(divRef, { margin: "80%" });

  useEffect(() => {
    setIndex(index);
  }, [divInView, index, setIndex]);

  return (
    <section
      ref={divRef}
      id="project-manager"
      className="bg-exer-grayblue px-4 md:px-[5%] pt-6 pb-20 flex justify-center items-center"
    >
      <div className="w-screen lg:w-[1200px]">
        <div className="flex flex-col mb-12 font-inter font-black items-end text-[35px] md:text-[70px] lg:text-[128px]">
          <div>
            <div className="flex justify-end items-end ">
              <div className="leading-none font-black bg-exer-white tracking-[-0.25rem] lg:tracking-[-0.8rem] pr-4 text-exer-gunmetal w-fit px-2 self-end">
                PROJECT
              </div>
            </div>
            <h1 className=" text-exer-white leading-none tracking-[-0.23rem] lg:tracking-[-0.78rem] [text-shadow:_0.5px_2.5px_0_rgb(40_40_40_/_70%)]">
              MANAGER
            </h1>
          </div>
        </div>
        <div className="mb-12 relative h-[200px] md:h-[400px] lg:h-[500px]">
          <p className="absolute right-0 font-poppins text-[10px] md:text-[19px] lg:text-[25px] w-[40%] md:w-[35%] lg:w-[446px] text-justify text-exer-white">
            Work closely with the technical team to ensure projects are planned,
            executed, and delivered on time and within budget. Twenty-four
            seven, the Project Management division is the driving force behind
            our technical team’s success in bringing innovative ideas to life by
            leverages their expertise to overcome challenges, minimize risk, and
            maximize results.
          </p>
          <DirectorMap divisi="Project Management" right={false} />
        </div>
        <StaffMap divisi="Project Management" />
      </div>
    </section>
  );
};

export default Projectmanagement;
