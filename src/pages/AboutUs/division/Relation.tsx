import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

import DirectorMap from "../../../assets/aboutUs/components/DirectorMap";
import StaffMap from "../../../assets/aboutUs/components/StaffMap";

const Relation = ({
  index = 7,
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
      id="relation"
      className="bg-exer-grayblue px-4 md:px-[5%] pt-6 pb-20 flex justify-center items-center"
    >
      <div className="w-screen lg:w-[1200px]">
        <div className="leading-none font-black font-inter bg-exer-white text-exer-gunmetal text-[35px] md:text-[70px] lg:text-[128px] w-fit px-2 text-center mb-10">
          RELATION
        </div>
        <div className="mb-12 relative h-[200px] md:h-[400px] lg:h-[500px]">
          <p className="font-poppins text-[10px] md:text-[19px] lg:text-[25px] w-[40%] lg:w-[446px] text-justify text-exer-white">
            As the liaisons between EXERCISE and our clients, they're the
            communication wizards ensuring seamless interactions and fostering
            lasting partnerships. With a knack for networking, they excel in
            building mutually beneficial relationships, paving the way for
            fruitful collaborations.
          </p>
          <DirectorMap divisi="Relation" right={true} />
        </div>
        <StaffMap divisi="Relation" />
      </div>
    </section>
  );
};

export default Relation;
