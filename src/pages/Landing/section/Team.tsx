import TeamBox from "../components/TeamBox";
import f1 from "../../../assets/landing/Team/f1.png";
import f2 from "../../../assets/landing/Team/f2.png";
import f3 from "../../../assets/landing/Team/f3.png";
import f4 from "../../../assets/landing/Team/f4.png";
import f5 from "../../../assets/landing/Team/f5.png";
import f6 from "../../../assets/landing/Team/f6.png";
import f7 from "../../../assets/landing/Team/f7.png";
import f8 from "../../../assets/landing/Team/f8.png";
import f9 from "../../../assets/landing/Team/f9.png";
import f10 from "../../../assets/landing/Team/f10.png";
import l1 from "../../../assets/landing/Team/l1.png";
import l2 from "../../../assets/landing/Team/l2.png";
import l3 from "../../../assets/landing/Team/l3.png";
import l4 from "../../../assets/landing/Team/l4.png";
import l5 from "../../../assets/landing/Team/l5.png";
import l6 from "../../../assets/landing/Team/l6.png";
import l7 from "../../../assets/landing/Team/l7.png";
import l8 from "../../../assets/landing/Team/l8.png";
import l9 from "../../../assets/landing/Team/l9.png";
import l10 from "../../../assets/landing/Team/l10.png";
import MeetOurTeam from "../../../assets/landing/LandingMeetOurTeam.png";

const team: Array<{
  icon: string;
  title: string;
  subtitle: string;
  background: string;
}> = [
  {
    icon: l1,
    title: "Executive",
    subtitle:
      "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise.",
    background: f1,
  },
  {
    icon: l2,
    title: "Software",
    subtitle:
      "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise.",
    background: f2,
  },
  {
    icon: l3,
    title: "Design Specialist",
    subtitle:
      "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise.",
    background: f3,
  },
  {
    icon: l4,
    title: "Creative",
    subtitle:
      "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise.",
    background: f4,
  },
  {
    icon: l5,
    title: "Hardware",
    subtitle:
      "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise.",
    background: f5,
  },
  {
    icon: l6,
    title: "Training & Development",
    subtitle:
      "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise.",
    background: f6,
  },
  {
    icon: l7,
    title: "Relation",
    subtitle:
      "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise.",
    background: f7,
  },
  {
    icon: l8,
    title: "Project Manager",
    subtitle:
      "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise.",
    background: f8,
  },
  {
    icon: l9,
    title: "Finance & Secretary",
    subtitle:
      "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise.",
    background: f9,
  },
  {
    icon: l10,
    title: "Human Resource",
    subtitle:
      "TEST Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise.",
    background: f10,
  },
];

export default function Team() {
  return (
    <div
      id='team-section'
      className='
      flex items-center pt-60 pl-12 xl:pl-40 relative
      flex-col md:flex-row md:gap-4
      '>
      <div
        id='team-text'
        className='
        flex flex-col items-center
      '>
        <img
          src={MeetOurTeam}
          alt='Meet Our Team'
          className=' w-[1000px] pb-12 object-contain'
        />
      </div>

      <div
        id='team-boxes'
        className='
        flex gap-8 overflow-x-auto scrollbar-hide hover:scale-[101%] transition-all duration-300 ease-in-out overflow-y-visible
      '>
        {team.map((team, index) => (
          <TeamBox
            key={index}
            icon={team.icon}
            alt={team.title}
            title={team.title}
            subtitle={team.subtitle}
            background={team.background}
          />
        ))}
      </div>
      <h1
        className='
        text-white absolute right-0 mb-4 mr-2 
        animate-pulse text-[4rem] drop-shadow-xl 
        hover:opacity-0 opacity-50 z-10 hidden md:block '>
        {"⮞"}
      </h1>
    </div>
  );
}
