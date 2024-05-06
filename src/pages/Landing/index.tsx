import GioStare from '../../assets/landing/GioStare.png';

function Landing(){
  return (
    <div id="landing-background" className="
      w-dvw h-dvh
    from-exer-charcoal to-exer-gunmetal bg-gradient-to-t
      flex justify-center
    ">
      <div id="landing-container" className="
        xl:w-[1140px] h-full
          w-full 
        font-inter text-exer-whiteaccent
        flex flex-row-reverse flex-wrap justify-between
      "> 
        {/* harusnya ini text-exer-white (FAFAFA), tapi gak tau kenapa gak bisa jadi pake whiteaccent (F5F5F5) */}
        <div id="landing-image" className="
          md:w-[40%] md:h-full
            h-1/2 w-full 
          relative
        ">
          <img src={GioStare} alt="GioStare" className="
            w-full h-full object-contain z-0
            absolute drop-shadow-lg
            hover:scale-110 duration-1000 transition-all
          "/>
        </div>


        <div id="landing-text-container" className="
          flex flex-col 
          justify-center
          md:w-[60%] md:h-full md:items-start
            h-1/2 w-full items-center
          p-12
        ">

          <h1 id="landing-title" className="
            text-4xl font-bold text-exer-white
            md:text-start
              text-center
        ">Experience #JourneyofGrowth with EXERCISE</h1>

          <p id="landing-subtitle" className="
            mt-4 text-exer-whiteaccent
            md:text-start
              text-center
          ">We started innovating since 2016 with a track record of qualified work and has become one of the growing technology organizations of the University of Indonesia. </p>

          <a href='#'>
            <button id="landing-button" className="
              bg-exer-whiteaccent
              text-exer-charcoal
              font-bold text-lg
              px-6 py-2 rounded-2xl w-fit mt-8
              hover:scale-110 duration-300 transition-all
              font-poppins
            ">Know More</button>       
          </a> 
        </div>
      </div>
    </div>
  );
}

export default Landing;