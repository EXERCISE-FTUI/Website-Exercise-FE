import CheckOurTools from '../../components/CheckOurTools';
import Hero from './section/Hero';
import OurWorks from './section/OurWorks'
import RecentEventsSection from './section/RecentEvents';
import Team from './section/Team';

function LandingPage(){
  return (
    <div id='landing-background' className='bg-exer-charcoal'>
      <div
        id='Hero-background'
        className='
        w-dvw h-dvh
      from-exer-charcoal to-exer-gunmetal bg-gradient-to-t
        flex justify-center
      '>
        <Hero />
      </div>
      <OurWorks />
      <br />
      <br />
      <br />
      <Team />
      <br />
      <br />
      <br />
      <CheckOurTools />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <RecentEventsSection />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default LandingPage;