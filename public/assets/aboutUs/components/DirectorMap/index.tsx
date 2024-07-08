import EmployeeList from "../../index";
import { useImages } from "../../../imageLoader";
import garis from "./../../images/dircodir.svg";

function DirectorMap({ divisi, right }: { divisi: string; right: boolean }) {
  const staffOf = EmployeeList.filter(
    (datas) =>
      datas.division == divisi &&
      (datas.position == "Director" ||
        datas.position == "Co-director" ||
        datas.position == "President" ||
        datas.position == "Vice President")
  );
  const images = useImages("./aboutUs/images", staffOf); 
  return (
    <>
      {right ? (
        <div>
          <img
            src={images[staffOf[0].image] || ""}
            alt={staffOf[0].name}
          />
          <img
            src={images[staffOf[1].image] || ""}
            alt={staffOf[1].name}
            className="absolute right-[-2%] md:right-[-2%] lg:right-3 bottom-[20%] md:bottom-[17%] lg:bottom-[73px] w-[34%] md:w-[30%] lg:w-auto drop-shadow-lg"
          />
          <img
            src={garis}
            alt=""
            className="absolute bottom-[17%] md:bottom-14 right-0 md:right-0 z-10 w-[56%] lg:w-auto drop-shadow-lg"
          />
          <div className="absolute bottom-[-10%] md:bottom-1 right-0 md:right-[0%] lg:right-0 flex flex-col gap-0 text-exer-white lg:w-[290px] font-inter w-[20%] md:w-[24%] h-[50px]">
            <h1 className="font-black text-[14px] md:text-[27px] lg:text-[32.93px] leading-none ">
              {staffOf[1].position}
            </h1>
            <p className="text-[10px] md:text-[20px] lg:text-[25px] mt-0 leading-none">
              {staffOf[1].name}
            </p>
          </div>
          <div className="absolute bottom-[-5%] md:bottom-[4%] lg:bottom-10 right-[24%] md:right-[25%] lg:right-[16.1rem] flex flex-col gap-0 text-exer-white md:w-[29%] lg:w-[310px] font-inter w-[30%] h-[50px]">
            <h1 className="font-black text-[14px] md:text-[27px] lg:text-[32.93px] leading-none">
              {staffOf[0].position}
            </h1>
            <p className="text-[10px] md:text-[20px] lg:text-[25px] mt-0 leading-none">
              {staffOf[0].name}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <img
            src={images[staffOf[0].image] || ""}
            alt={staffOf[0].name}
            className="absolute left-0 md:left-4 lg:left-6 bottom-[39%] md:bottom-[28%] lg:bottom-36 w-[34%] md:w-[30%] lg:w-auto drop-shadow-lg"
          />
          <img
            src={images[staffOf[1].image] || ""}
            alt={staffOf[1].name}
            className="absolute left-[28%] md:left-[30%] lg:left-80 bottom-[34%] md:bottom-[23%] lg:bottom-[109px] w-[29%] md:w-[30%] lg:w-auto drop-shadow-lg"
          />
          <img
            src={garis}
            alt=""
            className="absolute bottom-[32%] md:bottom-[20%] lg:bottom-24 left-[-1%] md:left-0 z-10 w-[58%] lg:w-auto drop-shadow-lg"
          />
          <div className="absolute bottom-[6%] lg:bottom-10 left-[28%] md:left-[33%] lg:left-72 flex flex-col gap-0 text-exer-white font-inter w-[34%] md:w-[30%] lg:w-auto h-[50px] drop-shadow-md">
            <h1 className="font-black text-[14px] md:text-[27px] lg:text-[32.93px] leading-none">
              {staffOf[1].position}
            </h1>
            <p className="text-[10px] md:text-[20px] lg:text-[25px] mt-0 leading-none">
              {staffOf[1].name}
            </p>
          </div>
          <div className="absolute bottom-[10%] md:bottom-[12%] lg:bottom-[72px] left-0 md:left-4 flex flex-col gap-0 text-exer-white font-inter w-[25%] md:w-[30%] lg:w-auto h-[50px]">
            <h1 className="font-black text-[14px] md:text-[27px] lg:text-[32.93px] leading-none">
              {staffOf[0].position}
            </h1>
            <p className="text-[10px] md:text-[20px] lg:text-[25px] mt-0 leading-none">
              {staffOf[0].name}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default DirectorMap;
