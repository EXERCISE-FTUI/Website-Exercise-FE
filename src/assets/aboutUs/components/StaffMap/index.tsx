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
        <div className="relative flex gap-3 mb-20 md:mb-40">
          <h1 className="absolute font-petitFormalScrirpt text-[23px] md:text-[50px]">
            The
          </h1>
          <h1 className="absolute font-inter font-bold tracking-[-0.27rem] md:tracking-[-0.4rem] md:text-[40px] text-[25px] top-5 md:top-11 left-6 md:left-16">
            STAFFS
          </h1>
        </div>
        <div className="flex flex-wrap-reverse justify-center gap-x-2  gap-y-3 md:gap-x-8 md:gap-y-16">
          {staffOf?.map((data, index) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <div className="relative shadow-md drop-shadow-xl w-[130px] md:w-[240px] lg:w-[276.02px] h-[130px] md:h-[240px] lg:h-[276.02px] bg-exer-grayaccentblue rounded-[0.8rem] md:rounded-[2.2rem] self-center justify-center items-center">
                  <div className="flex w-full justify-center">
                    <img
                      src={images[data.image] || ""}
                      alt={data.name}
                      className="absolute bottom-0 h-[140px] md:h-[280px] lg:h-[339.02px] rounded-b-[0.2rem] md:rounded-b-[1rem]"
                    />
                  </div>
                </div>
                <p className="text-center text-exer-white font-inter text-[11px] md:text-2xl w-[130px] md:w-[240px] lg:w-[276px]">
                  {data.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default StaffMap;
