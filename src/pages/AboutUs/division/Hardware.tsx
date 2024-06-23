import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import DirectorMap from "../../../assets/aboutUs/components/DirectorMap";
import StaffMap from "../../../assets/aboutUs/components/StaffMap";

const Hardware = ({
  index = 9,
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
      id="hardware"
      className="bg-exer-grayblue px-4 md:px-[5%] pt-6 pb-20 flex justify-center items-center"
    >
      <div className="w-screen lg:w-[1200px]">
        <h1 className="font-inter font-black text-exer-white leading-none tracking-[-0.22rem] lg:tracking-[-0.73rem] text-[35px] md:text-[70px] lg:text-[128px] mb-16 [text-shadow:_0.5px_2.5px_0_rgb(40_40_40_/_70%)]">
          HARDWARE
        </h1>
        <div className="mb-12 relative h-[200px] md:h-[400px] lg:h-[500px]">
          <p className="font-poppins text-[10px] md:text-[19px] lg:text-[25px] w-[40%] lg:w-[446px] font-semibold text-justify text-exer-white">
            The backbone of our technological endeavors, responsible for
            bringing the physical components of our products to life. From
            designing and testing complex circuits to fine-tuning and assembling
            intricate hardware, our team of skilled engineers and technicians
            are the unsung heroes of innovation.
          </p>
          <DirectorMap divisi="Hardware" right={true} />
        </div>
        <StaffMap divisi="Hardware" />
      </div>
    </section>
  );
};

export default Hardware;
