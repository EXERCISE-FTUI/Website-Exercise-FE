import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

import DirectorMap from "../../../../public/assets/aboutUs/components/DirectorMap";
import StaffMap from "../../../../public/assets/aboutUs/components/StaffMap";

const Design = ({
  index = -2,
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
      id="design-specialist"
      className="bg-exer-charcoal px-4 md:px-[5%] pt-6 pb-20 flex justify-center items-center"
    >
      <div className="w-screen lg:w-[1200px]">
        <div className="mb-12 font-inter font-black text-[35px] md:text-[70px] lg:text-[128px]">
          <div className="leading-none bg-exer-white text-exer-gunmetal w-fit px-0 lg:px-2 text-center">
            DESIGN
          </div>
          <h1 className=" text-exer-white leading-none lg:tracking-[-0.78rem] indent-6 [text-shadow:_0.5px_2.5px_0_rgb(40_40_40_/_70%)]">
            SPECIALIST
          </h1>
        </div>
        <div className="mb-12 relative h-[200px] md:h-[400px] lg:h-[500px]">
          <p className="font-poppins text-[10px] md:text-[19px] lg:text-[25px] w-[40%] lg:w-[446px] text-justify text-exer-white">
            Creates a cohesive look and feel that sets us apart and establishes
            EXERCISE’s identity. The Design Specialist division is where art and
            function converge to bring our vision to life. Infuse every project
            with beauty and style, elevating it beyond the ordinary to the
            extraordinary.
          </p>
          <DirectorMap divisi="Design" right={true} />
        </div>
        <StaffMap divisi="Design" />
      </div>
    </section>
  );
};

export default Design;
