import "./../../index.css";

import Hammer from "./../../assets/features/image/mobilehammer.png";
import Button from "./../../assets/features/image/button.png";
import CheckOurTools from "../../components/CheckOurTools";

function Features() {

  const handleScrollToTools = () => {
    const toolsSection = document.getElementById('Tools');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="xl:w-full m-auto h-full xl:max-h-[1655px] overflow-hidden ">
        <div className="overflow-hidden text-center w-full m-auto md:m-auto lg:px-0 lg:mt-0 md:px-[50px] mobsm:mt-[100px] sm:mt-[25px] mobsm:px-[23px] sm:px-[73px] h-[662px] bg-gradient-to-b from-exer-charcoal to-[#0B1317]">
          <div className="overflow-hidden lg:h-[606px] mobsm:h-[616px] m-auto lg:px-[133px] sm:px-[60px] mobsm:mt-[19px] px-[20px] max-w-[1440px]">
            <div className="m-auto w-full lg:max-w-[1175px]  text-center">
              <div className="py-[56px] sm:py-[56px] sm:h-[1175px] flex flex-col sm:gap-[230px] sm:-translate-y-[155px]">
                <div className="m-auto w-full max-w-[1175px] h-[478px] flex flex-col-reverse lg:flex-row md:flex-row lg:justify-between gap-[1.6px]">
                  <div className="flex flex-col lg:items-start md:items-start sm:items-center mobsm:items-center">
                    <div className="flex-row flex">
                      <div className="lg:w-[613.4px] h-[241px] ml-[5px] mobsm:pt-10 lg:mr-0 md:w-[430px] md:-mr-[50px] flex-row mobsm:overflow-visible">
                        <div className="flex flex-row text-[50px] font-bold items-center gap-2 lg:scale-100 mobsm:scale-[50%] sm:scale-[56%] md:scale-[60%] md:w-[616px] md:origin-left">
                          <h1 className="text-white text-[77px] leading-[75px] font-bold font-poppins mb-4">Try our</h1>
                          <div className="bg-exer-whiteaccent transform leading-none text-[71.7px] text-exer-gunmetal font-black font-inter text-center px-1">
                            <h1>Features</h1>
                          </div>
                        </div>
                        <div className="w-[613px] lg:w-[613px] h-[132px] flex items-center md:w-[400px]">
                          <h1 className="lg:translate-x-0 font-poppins align-middle text-white text-left leading-[45.36px] font-normal text-[29.04px] tracking-normal lg:tracking-wide lg:text-start md:text-start mobsm:text-center lg:scale-[100%] lg:mx-0 lg:-translate-y-0 mobsm:scale-[34%] mobsm:-mx-[200px] mobsm:-translate-y-16 sm:scale-[56%] md:-translate-x-[38px] lg:mt-0 md:mt-8 lg:break-normal md:break-words mobsm:tracking-normal md:scale-[40%]">
                            Shorten URL, Removing Backgrounds, or even Transform Files with ease. Unlock convenience with our toolset!
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[45%] text-left">
                    <div className="w-full lg:h-full md:h-full mobsm:h-[400px] flex md:items-start mobsm:justify-center lg:items-start mobsm:items-center ">
                      <img src={Hammer} className="flex lg:-ml-[20px] md:-ml-[50px] mobsm:ml-[25px] -mt-[150px] lg:translate-y-0 mobsm:translate-y-[150px] md:translate-y-0 max-h-[500px] lg:scale-100 md:scale-[70%] mobsm:scale-90 sm:scale-[130%] mobsm:overflow-visible max-w-[500px] object-fill drop-shadow-2xl lg:translate-x-0 md:-translate-x-20 " />
                    </div>
                    <div className="flex flex-row items-center text-exer-white">
                      <div className="flex items-center w-[420px] lg:-mt-[200px] md:-mt-[250px] h-full leading-none">
                        <div className="">
                          <h1 className="font-poppins text-[32.09px] font-semibold lg:block lg:scale-[100%] md:block md:scale-[60%] md:origin-left mobsm:hidden sm:hidden">
                            Curious to Try?
                          </h1>
                          <h2 className="font-poppins text-[25.67px] font-light lg:block lg:scale-[100%] md:block md:scale-[60%] md:origin-left mobsm:hidden sm:hidden">
                            Scroll down to view tools...
                          </h2>
                        </div>
                        <img
                          onClick={handleScrollToTools}
                          src={Button}
                          className="h-[60.33px] w-[60.33px] ml-7 hover:scale-110 transition duration-100 z-10 lg:block md:block lg:scale-[100%] mobsm:hidden sm:hidden md:scale-[70%] lg:translate-x-0 md:-translate-x-[145px] md:hover:scale-90"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = 'bg-gradient-to-b via-exer-charcoal from-[#0B1317] to-[#0B1317] '>
          <CheckOurTools />
        </div>
      </div>
    </>
  );
}

export default Features;
