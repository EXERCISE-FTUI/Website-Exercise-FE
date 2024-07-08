import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

import DirectorMap from "../../../../public/assets/aboutUs/components/DirectorMap";
import StaffMap from "../../../../public/assets/aboutUs/components/StaffMap";

const Humanresources = ({
  index = 3,
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
      id="human-resources"
      className="bg-exer-grayblue px-4 md:px-[5%] pt-6 pb-20 flex justify-center items-center"
    >
      <div className="w-screen lg:w-[1200px]">
        <div className="flex flex-col mb-12 font-inter font-black items-end text-[35px] md:text-[70px] lg:text-[128px]">
          <div>
            <div className="flex justify-center items-center">
              <div className="leading-none bg-exer-white text-exer-gunmetal w-fit px-2">
                HUMAN
              </div>
            </div>
            <h1 className=" text-exer-white leading-none tracking-[-0.21rem] lg:tracking-[-0.78rem] [text-shadow:_0.5px_2.5px_0_rgb(40_40_40_/_70%)]">
              RESOURCES
            </h1>
          </div>
        </div>
        <div className="mb-12 relative h-[200px] md:h-[400px] lg:h-[500px]">
          <p className="absolute right-0 font-poppins text-[10px] md:text-[19px] lg:text-[25px] w-[40%] md:w-[35%] lg:w-[446px] text-justify text-exer-white">
            The one who take a role to fostering a positive and productive work
            environment for all teams. Human Resources Division works tirelessly
            to support the growth and development of each individual, creating a
            culture that values collaboration, inclusivity, and professionalism.
          </p>
          <DirectorMap divisi="Human Resource" right={false} />
        </div>
        <StaffMap divisi="Human Resource" />
      </div>
    </section>
  );
};

export default Humanresources;
