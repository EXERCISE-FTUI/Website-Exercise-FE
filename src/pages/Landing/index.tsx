import CheckOurTools from '../../components/CheckOurTools';
import Hero from './section/hero';
import OurWorks from './section/OurWorks'

function LandingPage(){
  return (
    <div id='landing-background' className="bg-exer-charcoal">
      <div id="Hero-background" className="
        w-dvw h-dvh
      from-exer-charcoal to-exer-gunmetal bg-gradient-to-t
        flex justify-center
      ">
        <Hero />
      </div>
      <OurWorks />
      <CheckOurTools />
    </div>
  );
}

export default LandingPage;