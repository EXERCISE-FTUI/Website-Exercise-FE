import GioStare from '../../assets/landing/GioStare.png';

function Landing(){
  return (
    <div id="landing-background" className="
      w-dvw h-dvh
      bg-exer-charcoal 
      flex justify-center
    ">
      <div id="landing-container" className="
        xl:w-[1140px] h-full
          w-full 
        font-inter text-exer-whiteaccent
        flex flex-row-reverse flex-wrap justify-between
      "> 
        {/* harusnya ini text-exer-white (FAFAFA), tapi gak tau kenapa gak bisa jadi pake whiteaccent (F5F5F5) */}
        <img id="landing-image-cointener" className="
          md:w-[40%] md:h-full
            h-1/2 w-full 
          object-contain
        " src={GioStare}/>


        <div id="landing-text-container" className="
          flex flex-col 
          justify-center
          md:w-[60%] md:h-full md:items-start
            h-1/2 w-full items-center
          p-12
        ">

          <h1 id="landing-title" className="
            text-4xl font-bold text-exer-whiteaccent
            md:text-start
              text-center
        ">Experience #JourneyofGrowth with EXERCISE</h1>

          <p id="landing-subtitle" className="
            mt-4 text-exer-whiteaccent
            md:text-start
              text-center
          ">We started innovating since 2016 with a track record of qualified work and has become one of the growing technology organizations of the University of Indonesia. </p>

          <button id="landing-button" className="
            bg-exer-whiteaccent
            text-exer-charcoal
            font-bold text-lg
            px-6 py-2 rounded-2xl w-fit mt-8
          ">Know More</button>        
        </div>
      </div>
    </div>
  );
}

export default Landing;