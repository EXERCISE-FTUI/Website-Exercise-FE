import { useEffect, useState } from "react";
import sidebar from "../../assets/aboutUs/sidebar";

const Sidebar = ({style,index,}:{
  style: { transform: string; opacity: number; transition: string };
  index: number;}) => {
  
  const [selected, setSelected] = useState(-1);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setSelected(index);
    }, 500);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <ul
      className="bg-white fixed z-50 top-48 left-8 drop-shadow-lg hidden xl:block"
      style={style}
    >
      {sidebar.map((ic, i) => (
        <li
          className={`${
            selected === i ? "bg-[#527182]" : "bg-white"
          } w-12 h-12 flex justify-center items-center align-middle duration-300 ease-linear hover:bg-[#527182] relative group`}
          key={i}
          onClick={() => setSelected(i)}
        >
          <a
            title={ic.desc}
            href={`#${ic.desc.toLowerCase().replace(/ /g, "-")}`}
            className="w-full h-full flex justify-center items-center align-middle"
          >
            <img className="my-0 mx-auto" src={ic.img} alt={ic.desc} />
          </a>
          <h1
            className="bg-[#527182] text-white text-base h-full flex justify-center items-center absolute left-full top-0 whitespace-nowrap overflow-hidden ease-in-out duration-300 w-fit
              group-hover:scale-x-100 group-hover:px-4 scale-x-0 px-0 origin-left font-poppins font-extrabold text-[25px]"
          >
            {ic.desc}
          </h1>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
