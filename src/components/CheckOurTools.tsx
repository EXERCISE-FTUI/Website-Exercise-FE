import { useImages } from "../assets/imageLoader";
import ToolList from "../../public/assets/tool";

export default function CheckOurTools() {
  const images = useImages("./tool/images", ToolList);
  return (
    <section id="Tools" className="w-full h-auto m-auto">
      <section className="font-poppins text-white lg:w-full px-[20px] lg:px-[133px] sm:px-[180px] justify-center items-center flex flex-col lg:flex-row lg:gap-[36px] md:gap-[20.7px] mobsm:px-[80px] mobsm:mb-[200px] ">
        <div className="w-full max-w-[394px] flex flex-col gap-0 font-inter leading-none lg:scale-100 mobsm:scale-[80px] sm:scale-[70%] md:scale-[70%] md:items-start mobsm:items-center mobsm:-ml-[20px] md:ml-[1px] lg:-mt-[75px] sm:mt-10">
          <div className="w-fit h-fit bg-[#FFFFFF] text-exer-gunmetal font-extrabold">
            <h1 className="text-[60px] sm:text-[82px] p-0 leading-none"> CHECK </h1>
          </div>
          <h1 className="font-extrabold sm:text-[99.41px] mobsm:text-[80px] md:text-[99.41px] tracking-[-7.5px] text-exer-charcoal font-outline-4 pl-1 md:ml-0 mobsm:-ml-[90px]">
            Our
          </h1>
          <h1 className="font-black text-[70px] sm:text-[106.61px] pl-[40px] sm:pl-[75px] -tracking-[8px] sm:-tracking-[12.794px]">
            TOOLS
          </h1>
        </div>

        {/* card untuk features */}
        <div className="flex flex-wrap md:overflow-x-hidden  mobsm:mt-[43px] sm:mt-[23px] lg:mt-[100px]">
          <div className="flex w-full max-w-[745px] md:overflow-scroll [&>div]:flex-shrink-0 lg:gap-[72px] mobsm:no-scrollbar p-6 lg:flex-row flex-col md:h-full md:gap-[22.2px] mobsm:h-full ">
            {ToolList.map((tool, index) => (
              <div key={index}>
                <a href={tool.link}>
                  <div className="w-[345.3px]  md:h-[432.56px] bg-white rounded-[40px] my-auto hover:scale-105 md:overflow-hidden shadow-xl flex flex-col duration-300 origin-top-left overflow-x-auto lg:mx-0 lg:mb-0 mobsm:mb-10 md:mx-5">

                    <img
                      src={images[tool.image] || ''}
                      alt={tool.title}
                      className="w-full h-[275px]"
                      style={{ objectFit: "cover" }}
                    />

                    <div className="flex flex-col justify-center items-center py-[18px]">
                      <div className="bg-exer-darkelectricblue font-inter font-black text-[20px] sm:text-[31px] px-1 leading-none">
                        {tool.title}
                      </div>
                      <p className="font-normal font-inter text-[12px] sm:text-[15.9px] text-center text-black pt-[10px]">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
