import Rankdte from "/src/assets/features/rankdte.png";
import Searchbarimg from "/src/assets/features/searchbarexer.png";

export default function CheckOurTools() {
  return(
    <section className="font-poppins text-white bg-gradient-to-t w-full h-[1026px] px-[145px] items-center flex gap-[105px]">
      <div className="flex flex-col gap-0 font-inter leading-none">
        <div className="w-fit h-fit bg-[#FFFFFF] text-exer-gunmetal font-extrabold">
          <h1 className="text-[82px] p-0 leading-none"> CHECK </h1>
        </div>
        <h1 className="font-extrabold text-[99px] tracking-[-5.965px]">
          Our
        </h1>
        <h1 className="font-black text-[106px] pl-6 tracking-[-12.794px]">
          TOOLS
        </h1>
      </div>
      {/* card untuk features */}
      <div className="flex flex-row gap-[72.7px]">
        <div className="w-[345px] h-[432px] bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col">
          <img
            src={Searchbarimg}
            alt="searchbarexer"
            className="w-auto h-[275px]"
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col justify-center items-center py-[18px]">
            <div className="bg-exer-darkelectricblue font-inter font-black text-[31px] px-1 leading-none">
              URL Shortener
            </div>
            <p className="font-normal font-inter text-[15.9px] text-center text-black pt-[10px]">
              Streamline your online presence, craft a personalized link that
              reflects your brand and simplifies your web presence. try now!
            </p>
          </div>
        </div>
        <div className="w-[345px] h-[432px] bg-white rounded-3xl overflow-hidden shadow-xl">
          <img
            src={Rankdte}
            alt="searchbarexer"
            className="w-auto h-[275px]"
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col justify-center items-center py-[18px]">
            <div className="bg-exer-darkelectricblue font-inter font-black text-[31px] px-1 leading-none">
              Ranking Elektro
            </div>
            <p className="font-normal font-inter text-[15.9px] text-center text-black pt-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              fringilla nulla.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}