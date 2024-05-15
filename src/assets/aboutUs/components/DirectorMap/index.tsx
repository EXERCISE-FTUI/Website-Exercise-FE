import React from "react";
import EmployeeList from "../../index";
import { useImages } from "../../../imageLoader";
import garis from "./../../images/dircodir.svg";

function DirectorMap({
  divisi,
  right,
}: {
  divisi: string;
  right: boolean;
}) {
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
            className="absolute right-80 bottom-[104px]"
          />
          <img
            src={images[staffOf[1].image] || ""}
            alt={staffOf[1].name}
            className="absolute right-3 bottom-[73px]"
          />
          <img
            src={garis}
            alt=""
            className="absolute bottom-14 right-0 z-10"
          />
          <div className="absolute bottom-1 right-0 flex flex-col gap-0 text-exer-white w-[290px] font-inter">
            <h1 className="font-black text-[32.93px] leading-none">
              {staffOf[1].position}
            </h1>
            <p className="text-[25px] mt-0 leading-none">{staffOf[1].name}</p>
          </div>
          <div className="absolute bottom-10 right-[16.1rem] flex flex-col gap-0 text-exer-white w-[310px] font-inter">
            <h1 className="font-black text-[32.93px] leading-none">
              {staffOf[0].position}
            </h1>
            <p className="text-[25px] mt-0 leading-none">{staffOf[0].name}</p>
          </div>
        </div>
      ) : (
        <div>
          <img
            src={images[staffOf[0].image] || ""}
            alt={staffOf[0].name}
            className="absolute left-6 bottom-36"
          />
          <img
            src={images[staffOf[1].image] || ""}
            alt={staffOf[1].name}
            className="absolute left-80 bottom-[109px]"
          />
          <img
            src={garis}
            alt=""
            className="absolute bottom-24 left-0 z-10"
          />
          <div className="absolute bottom-10 left-72 flex flex-col gap-0 text-exer-white font-inter">
            <h1 className="font-black text-[32.93px] leading-none">
              {staffOf[1].position}
            </h1>
            <p className="text-[25px] mt-0 leading-none">{staffOf[1].name}</p>
          </div>
          <div className="absolute bottom-[72px] left-4 flex flex-col gap-0 text-exer-white font-inter">
            <h1 className="font-black text-[32.93px] leading-none">
              {staffOf[0].position}
            </h1>
            <p className="text-[25px] mt-0 leading-none">{staffOf[0].name}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default DirectorMap;
