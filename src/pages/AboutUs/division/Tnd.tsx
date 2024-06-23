import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import DirectorMap from "../../../assets/aboutUs/components/DirectorMap";
import StaffMap from "../../../assets/aboutUs/components/StaffMap";

const TnD = ({
  index = 8,
  setIndex,
}: {
  index: number;
  setIndex: (index: number) => void;
}) => {
  const divRef = useRef(null);
  const divInView = useInView(divRef, { margin : "80%"});

  useEffect(() => {
    setIndex(index);
  }, [divInView, index, setIndex]);

  return (
    <section
      ref={divRef}
      id="training-and-development"
      className="bg-exer-charcoal px-4 md:px-[5%] pt-6 pb-20 flex justify-center items-center"
    >
      <div className="w-screen lg:w-[1200px]">
        <div className="flex justify-end">
          <div className="mb-16 font-inter font-black">
            <div className="flex flex-row gap-3 text-[35px] md:text-[60px] lg:text-[128px] [text-shadow:_0.5px_2.5px_0_rgb(40_40_40_/_70%)]">
              <div className="text-exer-white leading-none tracking-[-0.22rem] lg:tracking-[-0.78rem]">
                TRAINING
              </div>
              <h1 className="text-exer-white leading-none">&</h1>
            </div>
            <h1 className="leading-none p-0 bg-exer-white text-exer-gunmetal text-[22px] md:text-[40px] lg:text-[80px] w-fit px-2 text-end">
              DEVELOPMENT
            </h1>
          </div>
        </div>
        <div className="mb-12 relative h-[200px] md:h-[400px] lg:h-[500px]">
          <p className="absolute right-0 font-poppins text-[10px] md:text-[19px] lg:text-[25px] w-[40%] md:w-[35%] lg:w-[446px] text-justify text-exer-white">
            The backbone of Exercise’s financial stability and success.
            Responsible for creating and implementing financial strategies,
            managing budgets, and making informed decisions that guide the
            financial future of our organization. Their unwavering commitment to
            accuracy and integrity ensures the long-term growth and prosperity
            of the team.
          </p>
          <DirectorMap divisi="Training and Development" right={false} />
        </div>
        <StaffMap divisi="Training and Development" />
      </div>
    </section>
  );
};

export default TnD;
