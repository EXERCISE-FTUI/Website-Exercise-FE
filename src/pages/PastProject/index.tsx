import React from 'react';
import { useImages } from '../../assets/imageLoader';
import PastProjectList from "../../assets/pastProject";
import TokPed from "../../assets/pastProject/images/tokopedia.png";
import Flip from "../../assets/pastProject/images/flip.png";
import Docu from "../../assets/pastProject/images/DocumentConversion.png";
import PageButton from './pageButton';

function PastProject() {
  const images = useImages("./pastProject/images", PastProjectList);

  return (
    <>
    <div>
      <div className="w-full h-full overflow-hidden m-auto">
        <div className="overflow-hidden text-center w-screen m-auto max-h-[620px] bg-gradient-to-t from-transparent via-[#000000]/30 from-[0%] via-[50%] to-[100%] to-transparent">
          <div className='max-w-[1175px] m-auto max-lg:scale-[90%] max-md:scale-[75%] max-sm:scale-100 scale-100 '>
            <div className="m-auto w-fit max-h-fit mb-[15%] text-center">
              <h1 className="text-center max-sm:-mt-[10%] py-[80px] text-white font-inter font-bold max-sm:text-[20px] text-[55px]"> Past <span className="italic">Projects</span></h1>
              <p className="text-center -mt-[82px] max-sm:text-[7.4px] text-white font-inter"> Check Out These Projects to See How We Work And What We Achieve.
              <br></br>A Picture Speaks A Thousand Words!</p>
              <div className="flex flex-row max-md:flex-wrap max-sm:gap-[10px] justify-between max-md:justify-center gap-[34px] max-md:gap-[20px] mt-[20px] max-sm:px-[5px]">
                <div className='flex h-[179px] bg-white rounded-3xl overflow-hidden max-sm:rounded-2xl max-sm:h-[95px] max-sm:w-[150px]'>
                    <div className='flex-col max-sm:ml-[20px] md:ml-[20px] ml-[40px] max-sm:mt-[10px] mt-[20px]'>
                      <h1 className='font-poppins text-black max-sm:text-[7.4px]  text-[15px] font-bold text-left -mb-[5px] max-sm:-mb-[2px] max-sm:leading-[7px] leading-[18px]'> E-Commerce Product <br></br> Web Scraping </h1>  
                      <ul className='text-left max-sm:ml-[10px] ml-[15px] max-sm:mt-[5px] mt-[5px] list-disc text-[10px] text-[#527182] max-sm:text-[5px]'>
                        <li> Price Monitoring </li>
                        <li> Competitor Analysis </li>
                        <li> Market Research </li>
                        <li> Dynamic Pricing </li>
                        <li> Fraud Detection </li>
                        <li> ETC </li>
                      </ul>                
                    </div>
                    <img src={TokPed} className='max-sm:-ml-[40px] -ml-[90px] -mr-[10px] max-sm:mt-[8px] -mt-[2px] max-w-[180px] max-h-[170px] max-sm:max-w-[89.6px] max-sm:max-h-[75px]'/>
                </div>
                <div className='flex h-[179px] bg-white rounded-3xl overflow-hidden max-sm:rounded-2xl max-sm:h-[95px] max-sm:w-[150px] mt-[60px] max-md:mt-0'>
                    <div className='flex-col max-sm:ml-[15px] md:ml-[20px] ml-[40px] max-sm:mt-[12px] mt-[20px] '>
                      <h1 className='font-poppins text-black max-sm:text-[7.73px] text-[15px] font-bold text-left max-sm:leading-[7px] leading-[18px]'> Fintech <br></br> Automation System </h1>  
                      <ul className='text-left max-sm:ml-[10px] max-sm:mt-[5px] ml-[15px] max-sm:text-[5px] list-disc text-[10px] text-[#527182]'>
                        <li> Compliance Monitoring </li>
                        <li> Transaction Processing </li>
                        <li> Account Management </li>
                        <li> Reporting and Insights </li>
                        <li> Risk Assessment </li>
                        <li> Data Analysis </li>
                      </ul>                
                    </div>
                    <img src={Flip} className='max-sm:-ml-[10px] md -ml-[30px] -mr-[10px] mt-[5px]'/>
                </div>
                <div className='flex flex-col mb-[20px] max-w-[292px] text-center h-[179px] bg-white max-sm:rounded-2xl rounded-3xl overflow-hidden max-sm:h-[95px] max-sm:w-[150px]'>
                    <div className='flex-col max-sm:px-[0px] md:ml-[20px] px-[30px] max-sm:mt-[6px] mt-[10px] '>
                      <h1 className='font-poppins text-black max-sm:text-[8.73px] text-[15px] font-bold text-center -mb-[5px] max-sm:leading-[10px] leading-[18px]'> Document Conversion <br></br> And P12 Signing </h1>
                      <h1 className='font-poppins text-[10px] mt-[10px] max-sm:text-[5px] text-[#527182] font-medium text-center'> Convert Your Documents With Our Tool! </h1>            
                    </div>
                    <img src={Docu} className='m-auto text-center w-[170px] h-[127px] max-sm:mt-0 -mt-[10px] max-sm:max-h-[65px] max-sm:max-w-[86.8px]'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden w-screen h-fit xl:max-h-[1975px] max-sm:bg-exer-charcoal md:bg-gradient-to-t from-transparent via-[#000000]/50 from-[0%] via-[20%] to-[40%]  to-transparent"> 
          <div className="overflow-hidden w-screen h-fit xl:max-h-[1975px] max-sm:bg-exer-charcoal md:bg-gradient-to-t from-transparent via-[#000000]/50 from-[50%] via-[70%] to-[100%] to-transparent "> 
            <div className='max-w-[1175px] h-fit m-auto max-lg:scale-[90%] max-sm:scale-100 max-md:scale-[80%] scale-100 max-lg:-mt-[10%] max-md:-mt-[35%] max-sm:-mt-0'>
              <div className="m-auto w-full h-fit scale-100 text-center">
                <div className="flex flex-row justify-between py-[10px] max-sm:py-[5px] max-sm:max-h-[25.6px] max-sm:max-w-[303px] max-sm:px-[15px] px-[37px] max-w-[602px] max-h-[51px] bg-white rounded-full max-lg:m-auto max-sm:text-[15px]">
                  <button className='bg-white flex-[25%] font-poppins focus:font-semibold focus-within:bg-exer-charcoal text-[20px] max-sm:px-[5px] px-[29px] rounded-full ease-in-out
                  text-exer-charcoal focus:text-white duration-500 focus:drop-shadow-md shadow-black/100 max-sm:text-[10px]'> 
                    UI/UX
                  </button>
                  <button className='bg-white flex-[25%] font-poppins focus:font-semibold focus:bg-exer-charcoal text-[20px] max-sm:px-[5px] px-[29px] rounded-full ease-in
                  text-exer-charcoal focus:text-white duration-300 focus:drop-shadow-md shadow-black/100 max-sm:text-[10px]'> 
                    Software
                  </button>
                  <button className='bg-white flex-[25%] font-poppins focus:font-semibold focus:bg-exer-charcoal text-[20px] max-sm:px-[5px] px-[29px] rounded-full ease-in
                  text-exer-charcoal focus:text-white duration-300 focus:drop-shadow-md shadow-black/100 max-sm:text-[10px]'> 
                    Creative
                  </button>
                  <button className='bg-white flex-[25%] font-poppins focus:font-semibold focus:bg-exer-charcoal text-[20px] max-sm:px-[5px] px-[29px] rounded-full ease-in
                  text-exer-charcoal focus:text-white duration-300 focus:drop-shadow-md shadow-black/100 max-sm:text-[10px]'>  
                    IOT
                  </button>
                </div>
                <div className='py-[85px] max-sm:py-[40px] max-sm:px-[15px] w-full h-fit m-auto flex flex-col justify-between max-sm:gap-[30px] gap-[230px]'>
                  {PastProjectList.map((PastProject, index) => (
                    <div key={index}>
                      <div className={index%2!=0 ? 'm-auto w-full h-fit xl:max-h-[324px] flex flex-row-reverse max-md:flex-col justify-between gap-[30px] max-lg:mb-[5%] mb-[10%]' : 'm-auto w-full h-fit xl:max-h-[324px] flex max-md:flex-col flex-row justify-between gap-[30px] mb-[2%]'}>
                        <div className='flex-[45%] max-sm:flex-[100%] m-auto'>
                          <div className='flex-row flex max-md:mb-[5%]'>
                            <div className="max-w-[317px] max-sm:max-w-[184px] max-sm:max-h-[41.7px] h-[72px] ml-[5px] transform skew-x-[-8deg] bg-exer-grayblue">
                              <h1 className='font-poppins leading-[30px] ml-[5px] max-sm:text-[14.5px] max-sm:leading-[15px] skew-x-[8deg] py-[6px] text-left text-[25px] text-white font-bold px-[2px]'>{PastProject.title}</h1>
                            </div>
                          </div>
                          <div className='max-sm:max-w-[292px] max-sm:max-h-[161px] min-w-[292px] h-[345px] min-h-[161px] text-right bg-white max-sm:rounded-xl rounded-3xl align-middle flex overflow-hidden md:hidden max-sm:m-auto'>
                            <div className='max-sm:max-w-[292px] max-sm:max-h-[161px] w-full h-fit m-auto items-center justify-center'> 
                              <img src={images[PastProject.image] || ''} className='max-sm:w-1/2 max-sm:py-[10px] max-sm:mt-0 m-auto h-full w-fit -mt-[51px] object-fill align-middle drop-shadow-2xl' alt={PastProject.title} />
                            </div>
                          </div>
                          <div className='max-sm:h-fit max-md:h-fit h-[200px] max-sm:px-0 px-[15px] py-[25px] flex items-center m-0 max-lg:mt-[10%] max-md:mt-0 max-md:mb-0 max-lg:mb-[10%]'>
                            <h1 className='font-poppins align-middle text-[20px] max-sm:text-[11.6px] text-white text-justify'>{PastProject.description}</h1>
                          </div>
                          <button className='origin-top-left duration-500 hover:scale-110 flex max-sm:px-[10px] max-sm:py-[5px] ml-[15px] max-sm:ml-0 max-sm:text-[14.5px] max-sm:max-w-[87px] max-sm:rounded-[8.8px] max-sm:max-h-[30px] px-[20px] py-[8px] text-center rounded-2xl bg-white w-[150px] h-[52px] text-black font-poppins font-bold text-[25px] '>
                            Details {'>'}
                          </button>
                        </div>
                        <div className='flex-[45%] text-right bg-white rounded-3xl align-middle flex overflow-hidden max-md:hidden'>
                          <div className='w-full h-fit max-h-[324px] m-auto items-center justify-center'> 
                            <img src={images[PastProject.image] || ''} className='m-auto h-full w-fit -mt-[51px] object-fill align-middle drop-shadow-2xl' alt={PastProject.title} />
                          </div>
                        </div>  
                      </div>
                      <div className={ index!=2 ? 'max-sm:translate-y-[10px] translate-y-[85px] max-lg:translate-y-[100px] h-[2px] bg-white w-full z-10' : ''}> 
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full max-h-[51px] m-auto scale-100 max-sm:scale-50 max-md:scale-75'>
          <PageButton />
        </div>
      </div>
    </div>
    </>
    
  );
}

export default PastProject;