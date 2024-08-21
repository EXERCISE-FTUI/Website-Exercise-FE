import TeamBox from "../components/TeamBox";
import f1 from "../../../../public/assets/landing/Team/f1.png";
import f2 from "../../../../public/assets/landing/Team/f2.png";
import f3 from "../../../../public/assets/landing/Team/f3.png";
import f4 from "../../../../public/assets/landing/Team/f4.png";
import f5 from "../../../../public/assets/landing/Team/f5.png";
import f6 from "../../../../public/assets/landing/Team/f6.png";
import f7 from "../../../../public/assets/landing/Team/f7.png";
import f8 from "../../../../public/assets/landing/Team/f8.png";
import f9 from "../../../../public/assets/landing/Team/f9.png";
import f10 from "../../../../public/assets/landing/Team/f10.png";
import l1 from "../../../../public/assets/landing/Team/l1.png";
import l2 from "../../../../public/assets/landing/Team/l2.png";
import l3 from "../../../../public/assets/landing/Team/l3.png";
import l4 from "../../../../public/assets/landing/Team/l4.png";
import l5 from "../../../../public/assets/landing/Team/l5.png";
import l6 from "../../../../public/assets/landing/Team/l6.png";
import l7 from "../../../../public/assets/landing/Team/l7.png";
import l8 from "../../../../public/assets/landing/Team/l8.png";
import l9 from "../../../../public/assets/landing/Team/l9.png";
import l10 from "../../../../public/assets/landing/Team/l10.png";
import MeetOurTeam from "../../../../public/assets/landing/LandingMeetOurTeam.png";

const team: Array<{
  icon: string;
  title: string;
  subtitle: string;
  background: string;
  link: string;
}> = [
    {
      icon: l1,
      title: "Executive",
      subtitle:
        "Weaving the magic of creativity with the power of strategy, our Marketing and Branding division crafts a distinctive narrative for Exercise that resonates with audiences and leaves a lasting impact. From developing marketing strategies, to executing campaigns and analyzing results.",
      background: f1,
      link:"about-us#the-executives"
    },
    {
      icon: l2,
      title: "Software",
      subtitle:
        "This is where the magic happens. Picture a team of tech-savvy superheroes, armed with keyboards and creativity, on a mission to turn ideas into reality. this dynamic squad handles everything software-related with finesse. With their expertise and passion, they transform visions into functional, user-friendly software that propels EXERCISE into the future",
      background: f2,
      link:"about-us#software"
    },
    {
      icon: l3,
      title: "Design Specialist",
      subtitle:
        "Creates a cohesive look and feel that sets us apart and establishes EXERCISE’s identity. The Design Specialist division is where art and function converge to bring our vision to life. Infuse every project with beauty and style, elevating it beyond the ordinary to the extraordinary.",
      background: f3,
      link:"about-us#design-specialist"
    },
    {
      icon: l4,
      title: "Creative",
      subtitle:
        "Infusing the Ethos of Creativity and the Precision of Strategic Vision, Our Marketing and Branding Division Embarks on a Journey to Weave an Intricate Tapestry of Identity for Exercise. Through meticulous attention to detail and a deep understanding of market dynamics, we shape a narrative that not only resonates but also captivates.",
      background: f4,
      link:"about-us#creative"
    },
    {
      icon: l5,
      title: "Hardware",
      subtitle:
        "The backbone of our technological endeavors, responsible for bringing the physical components of our products to life. From designing and testing complex circuits to fine-tuning and assembling intricate hardware, our team of skilled engineers and technicians are the unsung heroes of innovation.",
      background: f5,
      link:"about-us#hardware"
    },
    {
      icon: l6,
      title: "Training & Development",
      subtitle:
        "The backbone of Exercise’s financial stability and success. Responsible for creating and implementing financial strategies, managing budgets, and making informed decisions that guide the financial future of our organization. Their unwavering commitment to accuracy and integrity ensures the long-term growth and prosperity of the team.",
      background: f6,
      link:"about-us#training-and-development"
    },
    {
      icon: l7,
      title: "Relation",
      subtitle:
        "As the liaisons between EXERCISE and our clients, they're the communication wizards ensuring seamless interactions and fostering lasting partnerships. With a knack for networking, they excel in building mutually beneficial relationships, paving the way for fruitful collaborations.",
      background: f7,
      link:"about-us#relation"
    },
    {
      icon: l8,
      title: "Project Manager",
      subtitle:
        "Work closely with the technical team to ensure projects are planned, executed, and delivered on time and within budget. Twenty-four seven, the Project Management division is the driving force behind our technical team’s success in bringing innovative ideas to life by leverages their expertise to overcome challenges, minimize risk, and maximize results.",
      background: f8,
      link:"about-us#project-manager"
    },
    {
      icon: l9,
      title: "Finance & Secretary",
      subtitle:
        "The backbone of Exercise’s financial stability and success. Responsible for creating and implementing financial strategies, managing budgets, and making informed decisions that guide the financial future of our organization. Their unwavering commitment to accuracy and integrity ensures the long-term growth and prosperity of the team.",
      background: f9,
      link:"about-us#finance-and-secretary"
    },
    {
      icon: l10,
      title: "Human Resource",
      subtitle:
        "The one who take a role to fostering a positive and productive work environment for all teams. Human Resources Division works tirelessly to support the growth and development of each individual, creating a culture that values collaboration, inclusivity, and professionalism.",
      background: f10,
      link:"about-us#human-resources"
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
          className=' md:w-[600px] w-[200px] pb-[4rem] md:pb-[12rem] object-contain'
        />
      </div>
      <div
        id='team-boxes'
        className='
        flex gap-8 overflow-x-auto scrollbar-hide hover:scale-[101%] transition-all duration-300 ease-in-out overflow-y-visible
        w-full md:w-[80%] h-[400px] md:h-[500px] mt-4 md:mt-0
      '>
        {team.map((team, index) => (
          <TeamBox
            key={index}
            icon={team.icon}
            alt={team.title}
            title={team.title}
            subtitle={team.subtitle}
            background={team.background}
            link={team.link}
          />
        ))}
      </div>
      <h1
        className='
        text-white absolute right-0 mb-4 mr-2 
        animate-pulse text-[4rem] drop-shadow-xl 
        hover:opacity-0 opacity-50 z-10 cursor-pointer'
        onClick={() => {
          const teamBoxes = document.getElementById("team-boxes");
          if (teamBoxes) {
            teamBoxes.scrollLeft += 300;
          }
        }}>
        {"⮞"}
      </h1>
      <h1
        className='
        text-white absolute left-0 mb-4 mr-2 
        animate-pulse text-[4rem] drop-shadow-xl 
        hover:opacity-0 opacity-50 z-10 cursor-pointer rotate-180'
        onClick={() => {
          const teamBoxes = document.getElementById("team-boxes");
          if (teamBoxes) {
            teamBoxes.scrollLeft -= 300;
          }
        }}>
        {"⮞"}
      </h1>
    </div>
  );
}
