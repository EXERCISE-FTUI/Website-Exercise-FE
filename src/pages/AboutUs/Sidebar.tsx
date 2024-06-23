import { useEffect, useState } from "react";

import sidebar from "../../assets/aboutUs/sidebar/index.ts";

const Sidebar = ({ style = {}, index = -1 }) => {
  const [selected, setSelected] = useState(-1);
  const [hovered, setHovered] = useState(-1);

  useEffect(() => {
    setSelected(index);
  }, [index]);

  return (
    <ul
      className="bg-white fixed z-50 top-48 left-8 drop-shadow-lg rounded-sm hidden xl:block"
      style={style}
    >
      {sidebar.map((ic, i) => {
        return (
          // prettier-ignore
          <li
            className={`${selected == i ? "bg-[#527182]" : "bg-white"} w-12 h-12 flex justify-center items-center align-middle duration-300 ease-linear hover:bg-[#527182] relative`}
            key={i}
            tabIndex={i}
            onClick={() => setSelected(i)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
        >
            <a
                title={ic.desc}
                href={`#${ic.desc.toLowerCase().replace(/ /g, "-")}`}
                className="w-full h-full flex justify-center items-center align-middle"
            >
                <img
                    className="my-0 mx-auto"
                    src={ic.img}
                />
            </a>

            <h1 className={`bg-[#527182] text-exer-white2 text-base h-full flex justify-center items-center absolute left-full top-0 whitespace-nowrap overflow-hidden ease-in-out duration-300 w-fit ${hovered == i ? "scale-x-100 px-4" : "scale-x-0 px-0"} origin-left font-poppins font-extrabold text-[25px]`}>{ic.desc}</h1>
        </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
