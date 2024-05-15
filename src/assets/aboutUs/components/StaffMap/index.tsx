import React from "react";
import EmployeeList from "./../../index";
import { useImages } from "../../../imageLoader";

function StaffMap({ divisi }: { divisi: string }) {
  const staffOf = EmployeeList.filter(
    (datas) => datas.division == divisi && datas.position == "Staff"
  );
  const images = useImages("./aboutUs/images", staffOf);

  return (
    <>
      <div className="text-exer-white">
        <div className="relative flex gap-3 mb-40">
          <h1 className="absolute font-petitFormalScrirpt text-[50px]">The</h1>
          <h1 className="absolute font-inter font-bold tracking-[-0.4rem] text-[40px] top-10 left-20">
            STAFFS
          </h1>
        </div>
        {staffOf.length === 1 ? (
          <>
            <div className="pl-24">
              <div className="relative w-[276.02px] h-[276.02px] bg-exer-grayaccentblue rounded-[2.2rem] self-center justify-center items-center">
                <div className="flex w-full justify-center">
                  <img
                    src={images[staffOf[0].image] || ""}
                    alt={staffOf[0].name}
                    height={340}
                    className="absolute bottom-0 h-[339.02px]"
                  />
                </div>
              </div>
              <p className="text-center text-exer-white font-inter text-2xl w-[276px]">
                {staffOf[0].name}
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-wrap-reverse justify-center gap-x-8 gap-y-16">
            {staffOf?.map((data, index) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <div className="relative w-[276.02px] h-[276.02px] bg-exer-grayaccentblue rounded-[2.2rem] self-center justify-center items-center">
                    <div className="flex w-full justify-center">
                      <img
                        src={images[data.image] || ""}
                        alt={data.name}
                        height={340}
                        className="absolute bottom-0 h-[339.02px]"
                      />
                    </div>
                  </div>
                  <p className="text-center text-exer-white font-inter text-2xl w-[276px]">
                    {data.name}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default StaffMap;
