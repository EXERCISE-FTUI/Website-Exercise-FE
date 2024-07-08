import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import DirectorMap from "../../../../public/assets/aboutUs/components/DirectorMap";
import StaffMap from "../../../../public/assets/aboutUs/components/StaffMap";

const Software = ({
  index = 6,
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
      id="software"
      className="bg-exer-charcoal px-4 md:px-[5%] pt-6 pb-20 flex justify-center items-center"
    >
      <div className="w-screen lg:w-[1200px]">
        <h1 className="font-inter font-black text-exer-white leading-none tracking-[-0.3rem] lg:tracking-[-0.97rem] text-[35px] md:text-[70px] lg:text-[128px] mb-12 [text-shadow:_0.5px_2.5px_0_rgb(40_40_40_/_70%)]">
          SOFTWARE
        </h1>
        <div className="mb-12 relative h-[250px] md:h-[400px] lg:h-[500px]">
          <p className="font-poppins text-[10px] md:text-[19px] lg:text-[25px] w-[40%] lg:w-[446px] text-justify text-exer-white">
            This is where the magic happens. Picture a team of tech-savvy
            superheroes, armed with keyboards and creativity, on a mission to
            turn ideas into reality. this dynamic squad handles everything
            software-related with finesse. With their expertise and passion,
            they transform visions into functional, user-friendly software that
            propels EXERCISE into the future
          </p>
          <DirectorMap divisi="Software" right={true} />
        </div>
        <StaffMap divisi="Software" />
      </div>
    </section>
  );
};

export default Software;
