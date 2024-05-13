import TeamBox from '../components/TeamBox';
import ExerLogo from '../../../assets/landing/Team/ExerLogo.png';
import Vector0 from '../../../assets/landing/Team/Vector-0.png';
import Vector1 from '../../../assets/landing/Team/Vector-1.png';
import MeetOurTeam from '../../../assets/landing/LandingMeetOurTeam.png';

const team: Array<{icon: string, alt: string, title: string, subtitle: string}> = [
  {
    icon: ExerLogo,
    alt: "Executive",
    title: "Executive",
    subtitle: "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise."
  },
  {
    icon: Vector0,
    alt: "Creative",
    title: "Creative",
    subtitle: "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise."
  },
  {
    icon: Vector1,
    alt: "Design Sepecialist",
    title: "Design Sepecialist",
    subtitle: "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise."
  },
  {
    icon: ExerLogo,
    alt: "Executive",
    title: "Executive",
    subtitle: "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise."
  },
  {
    icon: Vector0,
    alt: "Creative",
    title: "Creative",
    subtitle: "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise."
  },
  {
    icon: Vector1,
    alt: "Design Sepecialist",
    title: "Design Sepecialist",
    subtitle: "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise."
  },
];

export default function Team() {
  return (
    <div id="team-section" className="
      flex items-center pt-60 pl-12 xl:pl-40 relative
      flex-col md:flex-row md:gap-4
      "
    >
      <div id="team-text" className="
        flex flex-col items-center
      ">
        <img src={MeetOurTeam} alt="Meet Our Team" className=" w-[20rem] md:w-[40rem] md:pb-0 pb-12 object-contain" />
      </div>

      <div id="team-boxes" className="
        flex gap-8 overflow-x-auto scrollbar-hide hover:scale-[101%] transition-all duration-300 ease-in-out
      ">
        {team.map((team, index) => (
          <TeamBox key={index} icon={team.icon} alt={team.alt} title={team.title} subtitle={team.subtitle} />
        ))}
      </div>
      <h1 className='
        text-white absolute right-0 mb-4 mr-2 
        animate-pulse text-[4rem] drop-shadow-xl 
        hover:opacity-0 opacity-50 z-10 hidden md:block '>
        {'⮞'}
      </h1>
    </div>
  );
}