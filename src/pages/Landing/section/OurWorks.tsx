import IconBox from "../components/IconBox";
import Our from "../../../../public/assets/landing/LandingOur.png";
import UIUX from "../../../../public/assets/landing/LandingUIUX.png";
import Software from "../../../../public/assets/landing/LandingSoftware.png";
// import Creative from "../../../../public/assets/landing/LandingCreative.png";
import IOT from "../../../../public/assets/landing/LandingIOT.png";

const works: Array<{
  icon: string;
  alt: string;
  title: string;
  subtitle: string;
}> = [
    {
      icon: UIUX,
      alt: "UIUX",
      title: "UI/UX Designer",
      subtitle: "Designing seamless interactions for user delight"
    },
    {
      icon: Software,
      alt: "Software",
      title: "Software Development",
      subtitle: "Architecting innovative solutions for a connected world"
    },
    // {
    //   icon: Creative,
    //   alt: "Creative",
    //   title: "Creative Solution",
    //   subtitle: "Creative storyteller and brand communicator"
    // },
    {
      icon: IOT,
      alt: "IOT",
      title: "Internet of Things(IOT) ",
      subtitle: "Connecting devices, empowering experiences"
    }
  ]

export default function CheckOurTools() {
  return (
    <div id="out-works-section">
      <div id="Our-Works-Container" className="
        flex flex-row flex-wrap justify-center
        w-full gap-4 my-12"
      >
        <img src={Our} alt="Our" className=" object-contain h-12 md:h-16" />
        {/* <img src={Works} alt="Works" className=" object-contain h-16"/> */}

      </div>

      <div id="IconBox-Container" className="
        flex flex-row flex-wrap justify-center
        w-full gap-8 mt-16"
      >
        {works.map((work, index) => (
          <IconBox key={index} icon={work.icon} alt={work.alt} title={work.title} subtitle={work.subtitle} />
        ))}
      </div>
    </div>
  )
}