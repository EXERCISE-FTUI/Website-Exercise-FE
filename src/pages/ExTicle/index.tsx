
import dots from '../../assets/exticle/dots.png';
import arrow from '../../assets/exticle/arrow.png';
import ExticleHighlight from './exticleHighlight';
import ExticleAll from './exticleAll';

function ExTicle() {
  return (
    <div className="my-11 mx-3 md:mx-[80px]">
      <div className='flex flex-row'>
        <div className="bg-[#527182] h-[41px] md:h-[76px] w-[110px] md:w-[230px] rounded-t-[20px] md:rounded-t-[40px]"/>
        <img src={dots} alt="dots" className="ml-auto md:h-[70px] h-[40px] mt-auto" />
      </div>
      <div className="pt-[20px] px-[30px] md:pt-[40px] md:px-[63px] bg-[#527182] rounded-b-xl rounded-tr-xl md:mt-[-30px] mt-[-20px]" >
        <div className="bg-[#527182] flex flex-col rounded-xl shadow-inner shadow-black">
          <div className='flex flex-row'>
            <div className = " flex-col mt-[3%] ml-[2%]">
              <h1 className="font-poppins md:text-6xl text-4xl font-bold text-white ">Embark on a</h1>
              <h1 className="font-poppins md:text-6xl text-4xl font-bold text-white ">Tech Journey</h1>
              <div className="flex flex-row">
                <h1 className="font-poppins md:text-7xl text-4xl font-bold text-white">with</h1>
                <h1 className="font-poppins md:text-7xl text-4xl font-bold text-white bg-[#1A323E] px-2 transform skew-x-[-15deg] inline-block">ExTicle!</h1>
              </div>
            </div>
            <div className="flex-col flex-1 mt-[2.7%] h-max">
              <div className="ml-[2%] bg-white h-[35px] md:h-[65px] md:rounded-l-2xl rounded-l-xl" style={{ boxShadow: 'inset 0 0vh 0vh rgba(0, 0, 0, 0.25), inset 0 1vh 1vh rgba(0, 0, 0, 0.4)' }}/>
              <div className="mt-[10px] ml-[6%] bg-white h-[35px] md:h-[65px] md:rounded-l-2xl rounded-l-xl" style={{ boxShadow: 'inset 0 0vh 0vh rgba(0, 0, 0, 0.25), inset 0 1vh 1vh rgba(0, 0, 0, 0.4)' }}/>
              <div className="mt-[10px] ml-[10%] bg-white h-[35px] md:h-[65px] md:rounded-l-2xl rounded-l-xl" style={{ boxShadow: 'inset 0 0vh 0vh rgba(0, 0, 0, 0.25), inset 0 1vh 1vh rgba(0, 0, 0, 0.4)' }}/>
            </div>
          </div>
          <div className="mr-[15%] flex flex-row mt-[10px]">
            <div className=' bg-white h-[35px] md:h-[65px] md:rounded-r-2xl rounded-r-xl flex-1' style={{ boxShadow: 'inset 0 0vh 0vh rgba(0, 0, 0, 0.25), inset 0 1vh 1vh rgba(0, 0, 0, 0.4)' }}/>
            <div className=' bg-[#1A323E] shadow-black shadow-sm h-[35px] md:h-[65px] md:rounded-4xl rounded-3xl w-[130px] md:w-[210px] flex flex-row p-[8px] md:p-[10px] mx-[1%] hover:bg-[#527182] transition-colors'>
              <div className='flex flex-col'>
                <h2 className="font-poppins text-white text-xs md:text-lg font-bold whitespace-nowrap overflow-hidden">Fresh Articles</h2>
                <p className="font-poppins text-white hidden md:block md:text-sm whitespace-nowrap overflow-hidden">scroll down below...</p>
              </div>  
              <img src={arrow} alt="button" className="mr-auto ml-[10px]" />
            </div>
            <div className=' bg-white h-[35px] md:h-[65px] md:rounded-2xl rounded-xl flex-[10] ' style={{ boxShadow: 'inset 0 0vh 0vh rgba(0, 0, 0, 0.25), inset 0 1vh 1vh rgba(0, 0, 0, 0.4)' }}/>
          </div>
          <div className="mr-[30%] flex flex-row mt-[10px]">
            <div className=' bg-white h-[15px] md:h-[30px] md:rounded-tr-2xl rounded-tr-xl flex-1 rounded-bl-xl' style={{ boxShadow: 'inset 0 0vh 0vh rgba(0, 0, 0, 0.25), inset 0 1vh 1vh rgba(0, 0, 0, 0.4)' }}/>
            <div className=' bg-white h-[15px] md:h-[30px] ml-[2%] md:rounded-t-2xl rounded-t-xl flex-[4] ' style={{ boxShadow: 'inset 0 0vh 0vh rgba(0, 0, 0, 0.25), inset 0 1vh 1vh rgba(0, 0, 0, 0.4)' }}/>
          </div>
        </div>
      </div>
      <ExticleHighlight />
      <ExticleAll />
    </div>
  );
}

export default ExTicle;
