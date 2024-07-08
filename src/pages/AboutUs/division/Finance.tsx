import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

import DirectorMap from "../../../../public/assets/aboutUs/components/DirectorMap";
import StaffMap from "../../../../public/assets/aboutUs/components/StaffMap";

const Finance = ({
  index = 4,
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
      id="finance-and-secretary"
      className="bg-exer-charcoal px-4 md:px-[5%] pt-6 pb-20 flex justify-center items-center"
    >
      <div className="w-screen lg:w-[1200px]">
        <div className="mb-12 font-inter font-black">
          <div className="flex flex-row gap-3 text-[40px] md:text-[70px] lg:text-[128px]">
            <div className="leading-none bg-exer-white text-exer-gunmetal  w-fit px-2 text-center">
              FINANCE
            </div>
            <h1 className="text-exer-white leading-none [text-shadow:_0.5px_2.5px_0_rgb(40_40_40_/_70%)]">
              &
            </h1>
          </div>
          <h1 className=" text-exer-white leading-none tracking-[-0.2rem] lg:tracking-[-0.78rem] text-[37px] md:text-[68px] lg:text-[128px] [text-shadow:_0.5px_2.5px_0_rgb(40_40_40_/_70%)]">
            SECRETARY
          </h1>
        </div>
        <div className="mb-12 relative h-[250px] md:h-[400px] lg:h-[500px]">
          <p className="font-poppins text-[10px] md:text-[19px] lg:text-[25px] w-[40%] lg:w-[446px] text-justify text-exer-white">
            The backbone of Exercise’s financial stability and success.
            Responsible for creating and implementing financial strategies,
            managing budgets, and making informed decisions that guide the
            financial future of our organization. Their unwavering commitment to
            accuracy and integrity ensures the long-term growth and prosperity
            of the team.
          </p>
          <DirectorMap divisi="Finance and Secretary" right={true} />
        </div>
        <StaffMap divisi="Finance and Secretary" />
      </div>
    </section>
  );
};

export default Finance;
