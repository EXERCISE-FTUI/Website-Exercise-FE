import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import DirectorMap from "../components/DirectorMap";
import StaffMap from "../components/StaffMap";

const Creatives = ({
  index = 1,
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
      id = "creative"
      className="bg-exer-grayblue px-4 md:px-[5%] pt-6 pb-20 flex justify-center items-center"
    >
      <div className="w-screen lg:w-[1200px]">
        <h1 className="font-inter font-black text-exer-white leading-none tracking-[-0.1rem] lg:tracking-[-0.73rem] text-[40px] md:text-[70px] lg:text-[128px] mb-12 text-end [text-shadow:_0.5px_2.5px_0_rgb(40_40_40_/_70%)]">
          CREATIVES
        </h1>
        <div className="mb-12 relative h-[200px] md:h-[400px] lg:h-[500px]">
          <p className="absolute right-0 font-poppins text-[10px] md:text-[19px] lg:text-[25px] w-[40%] md:w-[35%] lg:w-[446px] text-justify text-exer-white">
            Infusing the Ethos of Creativity and the Precision of Strategic
            Vision, Our Marketing and Branding Division Embarks on a Journey to
            Weave an Intricate Tapestry of Identity for Exercise. Through
            meticulous attention to detail and a deep understanding of market
            dynamics, we shape a narrative that not only resonates but also
            captivates.
          </p>
          <DirectorMap divisi="Creatives" right={false} />
        </div>
        <StaffMap divisi="Creatives" />
      </div>
    </section>
  );
};

export default Creatives;
