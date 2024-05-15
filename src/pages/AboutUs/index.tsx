// import React from "react";
import Timbil from "./../../assets/aboutUs/images/timbil.png";
import { ArrowDown } from "@phosphor-icons/react";
import StaffMap from "../../assets/aboutUs/components/StaffMap/index";
import DirectorMap from "./../../assets/aboutUs/components/DirectorMap/index";
import EmployeeList from "../../assets/aboutUs";
import { useImages } from "./../../assets/imageLoader";
import garis from "./../../assets/aboutUs/images/exect.svg";
import geoKiri from "./../../assets/aboutUs/images/Geo Kiri.png";
import geoKanan from "./../../assets/aboutUs/images/Geo Kanan.png";

const AboutUs = () => {
  const executives = EmployeeList.filter(
    (datas) => datas.division == "Executive"
  );
  const images = useImages("./aboutUs/images", executives);
  return (
    <>
      <div className="overflow-hidden">
        <section
          id="Get to know us"
          className="bg-exer-charcoal overflow-hidden"
        >
          <div className="z-0 relative">
            <img
              src={Timbil}
              alt="team building image"
              style={{ objectFit: "cover" }}
              className="z-[-10] w-screen top-0 rounded-b-3xl h-[640px]"
            />
            <img
              src={geoKiri}
              alt="geo kiri"
              className="absolute top-0 left-0 z-50"
            />
            <img
              src={geoKanan}
              alt="geo kanan"
              className="absolute bottom-0 right-0 z-50"
            />
            <div className="absolute w-screen flex flex-col top-[210px] text-exer-white">
              <div className="flex flex-row gap-2 font-rufina font-bold text-center justify-center items-center text-[80px]">
                <h1 className="justify-center">About</h1>
                <h1 className="text-transparent font-outline-1 font-semibold">
                  Us
                </h1>
                <h1 className="skew-x-[-7deg]">!</h1>
              </div>
              <div className="justify-center flex flex-row gap-2">
                <div className="flex flex-col">
                  <h1 className="leading-none font-semibold text-[30.80px]">
                    Get to Know Us
                  </h1>
                  <p className="leading-none text-2xl">scroll down below ...</p>
                </div>
                <button className="relative rounded-full w-[55px] h-[55px] bg-transparent backdrop-blur-[2px] outline outline-gray-300 hover:scale-105 transition-all">
                  <ArrowDown size={38} className="absolute top-2 left-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="visi misi"
          className="bg-exer-charcoal overflow-hidden flex justify-center items-center"
        >
          <div className="h-[1292px] w-[1600px] relative ">
            <div className="hexa justify-center top-[140px] left-[-170px] absolute z-0"></div>
            <div className="hexb justify-center top-[381px] right-[-150px] absolute z-0"></div>
            <div className="flex flex-col absolute top-[335px] left-[35px]">
              <div className="bg-white leading-none w-fit absolute z-50">
                <h1 className="text-exer-charcoal leading-none font-inter font-black text-[100px]">
                  VISI
                </h1>
                <p className="w-[720px] absolute font-monsterrat text-exer-white text-2xl font-bold pt-8 drop-shadow-lg [text-shadow:_0.5px_2.5px_0_rgb(0_0_0_/_100%)]">
                  Menjadikan EXERCISE 2024 sebagai tempat yang menyenangkan
                  untuk mengembangkan soft skill dan hard skill yang relevan
                  dalam dunia profesional. Menjadikan EXERCISE 2024 sebagai
                  gerbang pembuka untuk merasakan dunia profesionalitas yang
                  menjunjung tinggi kualitas.
                </p>
              </div>
            </div>
            <div className="flex flex-col absolute top-[535px] right-[700px]">
              <div className="bg-white leading-none w-fit absolute z-50 right-[-600px]">
                <h1 className="text-exer-charcoal leading-none font-inter font-black text-[100px] self-end">
                  MISI
                </h1>
              </div>
              <div className="w-[720px] top-24 absolute font-monsterrat text-exer-white text-xl font-bold pt-8 drop-shadow-lg [text-shadow:_0.5px_2.5px_0_rgb(0_0_0_/_100%)]">
                <ol style={{ listStyle: "decimal" }}>
                  <li>
                    Meningkatkan kualitas mahasiswa/i Fakultas Teknik
                    Universitas Indonesia (FTUI) dari segi keterampilan yang
                    relevan dalam dunia pekerjaan ataupun dunia perkuliahan.
                  </li>
                  <li>
                    Menyediakan tempat bagi para mahasiswa untuk menuangkan
                    kreatifitas mereka terhadap bidang yang diminati.
                  </li>
                  <li>
                    Meningkatkan internalisasi bidang dalam EXERCISE melalui
                    peningkatan variasi dan volume kolaborasi.
                  </li>
                  <li>
                    Meningkatkan komunikasi antar bidang dalam EXERCISE guna
                    memperlancar proses kolaborasi.
                  </li>
                  <li>
                    Memperluas jangkauan EXERCISE dalam tingkat Fakultas Teknik
                    dengan meningkatkan kualitas branding melalui social media.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section
          id="meet out team"
          className="bg-exer-charcoal overflow-hidden text-exer-white"
        >
          <div className="flex items-center justify-center">
            <div className="flex flex-row gap-16 text-[150px] font-inter font-black leading-none w-fit mt-[200px] mb-[300px]">
              <h1 className="tracking-tighter">Meet</h1>
              <h1 className="font-outline-4 text-transparent tracking-[-0.93rem]">
                Our
              </h1>
              <div className="bg-white w-fit leading-none p-0">
                <h1 className="leading-none text-exer-charcoal">TEAM</h1>
              </div>
            </div>
          </div>
        </section>

        <section
          id="the executive"
          className="bg-exer-charcoal text-exer-white px-72 font-inter mb-48 flex justify-center items-center"
        >
          <div className="w-[958px]">
            <div className="flex flex-col font-inter font-black leading-none text-center items-center justify-center gap-5 mb-8">
              <h1 className="text-[113px]">THE</h1>
              <div className="bg-white skew-y-[-5deg] w-fit">
                <h1 className="text-[107px] text-exer-charcoal ">EXECUTIVE</h1>
              </div>
            </div>
            <div className="h-[700px] relative mb-10">
              <img
                src={images[executives[0].image] || ""}
                alt={executives[0].name}
                className="absolute bottom-36 left-12"
              />
              <img
                src={images[executives[1].image] || ""}
                alt={executives[1].name}
                className="absolute bottom-24 right-28"
              />
              <img
                src={garis}
                alt="garis"
                className="absolute bottom-[77px] left-12"
              />
              <div className="absolute bottom-16 left-20">
                <h1 className="leading-none text-[32.93px] font-black">
                  {executives[0].position}
                </h1>
                <p className="leading-none text-[32.93px]">
                  {executives[0].name}
                </p>
              </div>
              <div className="absolute bottom-4 right-52">
                <h1 className="leading-none text-[32.93px] font-black">
                  {executives[1].position}
                </h1>
                <p className="leading-none text-[32.93px]">
                  {executives[1].name}
                </p>
              </div>
            </div>
            <div className="px-8 text-justify justify-center text-[25px] font-normal font-poppins">
              <p>
                Weaving the magic of creativity with the power of strategy, our
                Marketing and Branding division crafts a distinctive narrative
                for Exercise that resonates with audiences and leaves a lasting
                impact. From developing marketing strategies, to executing
                campaigns and analyzing results.
              </p>
            </div>
          </div>
        </section>

        <section
          id="creatives"
          className="bg-exer-grayblue px-44 pt-6 pb-20 flex justify-center items-center"
        >
          <div className="w-[1200px]">
            <h1 className="font-inter font-black text-exer-white leading-none tracking-[-0.73rem] text-[128px] mb-12 text-end">
              CREATIVES
            </h1>
            <div className="mb-12 relative h-[500px]">
              <p className="absolute right-0 font-poppins text-[25px] w-[446px] text-justify text-exer-white">
                TEST Infusing the Ethos of Creativity and the Precision of
                Strategic Vision, Our Marketing and Branding Division Embarks on
                a Journey to Weave an Intricate Tapestry of Identity for
                Exercise. Through meticulous attention to detail and a deep
                understanding of market dynamics, we shape a narrative that not
                only resonates but also captivates.
              </p>
              <DirectorMap divisi="Creatives" right={false} />
            </div>
            <StaffMap divisi="Creatives" />
          </div>
        </section>

        <section
          id="design"
          className="bg-exer-charcoal px-36 pt-6 pb-20 flex justify-center items-center"
        >
          <div className="w-[1200px]">
            <div className="mb-12 font-inter font-black">
              <div className="leading-none bg-exer-white text-exer-gunmetal text-[128px] w-fit px-2 text-center">
                DESIGN
              </div>
              <h1 className=" text-exer-white leading-none tracking-[-0.78rem] text-[128px] indent-52">
                SPECIALIST
              </h1>
            </div>
            <div className="mb-12 relative h-[500px]">
              <p className="font-poppins text-[25px] w-[446px] text-justify text-exer-white">
                Creates a cohesive look and feel that sets us apart and
                establishes EXERCISE’s identity. The Design Specialist division
                is where art and function converge to bring our vision to life.
                Infuse every project with beauty and style, elevating it beyond
                the ordinary to the extraordinary.
              </p>
              <DirectorMap divisi="Design" right={true} />
            </div>
            <StaffMap divisi="Design" />
          </div>
        </section>

        <section
          id="human resources"
          className="bg-exer-grayblue px-44 pt-6 pb-20 flex justify-center items-center"
        >
          <div className="w-[1200px]">
            <div className="flex flex-col mb-12 font-inter font-black items-end">
              <div>
                <div className="flex justify-center items-center">
                  <div className="leading-none bg-exer-white text-exer-gunmetal text-[128px] w-fit px-2">
                    HUMAN
                  </div>
                </div>
                <h1 className=" text-exer-white leading-none tracking-[-0.78rem] text-[128px]">
                  RESOURCES
                </h1>
              </div>
            </div>
            <div className="mb-12 relative h-[500px]">
              <p className="absolute right-0 font-poppins text-[25px] w-[446px] text-justify text-exer-white">
                The one who take a role to fostering a positive and productive
                work environment for all teams. Human Resources Division works
                tirelessly to support the growth and development of each
                individual, creating a culture that values collaboration,
                inclusivity, and professionalism.
              </p>
              <DirectorMap divisi="Human Resource" right={false} />
            </div>
            <StaffMap divisi="Human Resource" />
          </div>
        </section>

        <section
          id="finance"
          className="bg-exer-charcoal px-44 pt-6 pb-20 flex justify-center items-center"
        >
          <div className="w-[1200px]">
            <div className="mb-12 font-inter font-black">
              <div className="flex flex-row gap-3">
                <div className="leading-none bg-exer-white text-exer-gunmetal text-[128px] w-fit px-2 text-center">
                  FINANCE
                </div>
                <h1 className="text-[123px] text-exer-white leading-none">&</h1>
              </div>
              <h1 className=" text-exer-white leading-none tracking-[-0.78rem] text-[128px]">
                SECRETARY
              </h1>
            </div>
            <div className="mb-12 relative h-[500px]">
              <p className="font-poppins text-[25px] w-[446px] text-justify text-exer-white">
                The backbone of Exercise’s financial stability and success.
                Responsible for creating and implementing financial strategies,
                managing budgets, and making informed decisions that guide the
                financial future of our organization. Their unwavering
                commitment to accuracy and integrity ensures the long-term
                growth and prosperity of the team.
              </p>
              <DirectorMap divisi="Finance and Secretary" right={true} />
            </div>
            <StaffMap divisi="Finance and Secretary" />
          </div>
        </section>

        <section
          id="project manager"
          className="bg-exer-grayblue px-44 pt-6 pb-20 flex justify-center items-center"
        >
          <div className="w-[1200px]">
            <div className="flex flex-col mb-12 font-inter font-black items-end">
              <div>
                <div className="flex justify-end items-end">
                  <div className="leading-none font-black bg-exer-white tracking-[-0.8rem] pr-4 text-exer-gunmetal text-[128px] w-fit px-2 self-end">
                    PROJECT
                  </div>
                </div>
                <h1 className=" text-exer-white leading-none tracking-[-0.78rem] text-[128px]">
                  {/* blom pake shadow */}
                  MANAGER
                </h1>
              </div>
            </div>
            <div className="mb-12 relative h-[500px]">
              <p className="absolute right-0 font-poppins text-[25px] w-[446px] text-justify text-exer-white">
                Work closely with the technical team to ensure projects are
                planned, executed, and delivered on time and within budget.
                Twenty-four seven, the Project Management division is the
                driving force behind our technical team’s success in bringing
                innovative ideas to life by leverages their expertise to
                overcome challenges, minimize risk, and maximize results.
              </p>
              <DirectorMap divisi="Project Management" right={false} />
            </div>
            <StaffMap divisi="Project Management" />
          </div>
        </section>

        <section
          id="software"
          className="bg-exer-charcoal px-36 pt-6 pb-20 flex justify-center items-center"
        >
          <div className="w-[1200px]">
            <h1 className="font-inter font-black text-exer-white leading-none tracking-[-0.97rem] text-[128px] mb-12">
              SOFTWARE
            </h1>
            <div className="mb-12 relative h-[500px]">
              <p className="font-poppins text-[25px] w-[446px] text-justify text-exer-white">
                This is where the magic happens. Picture a team of tech-savvy
                superheroes, armed with keyboards and creativity, on a mission
                to turn ideas into reality. this dynamic squad handles
                everything software-related with finesse. With their expertise
                and passion, they transform visions into functional,
                user-friendly software that propels EXERCISE into the future
              </p>
              <DirectorMap divisi="Software" right={true} />
            </div>
            <StaffMap divisi="Software" />
          </div>
        </section>

        <section
          id="relation"
          className="bg-exer-grayblue px-44 pt-6 pb-20 flex justify-center items-center"
        >
          <div className="w-[1200px]">
            <div className="leading-none font-black font-inter bg-exer-white text-exer-gunmetal text-[108px] w-fit px-2 text-center mb-10">
              RELATION
            </div>
            <div className="mb-12 relative h-[500px]">
              <p className="font-poppins text-[25px] w-[446px] text-justify text-exer-white">
                As the liaisons between EXERCISE and our clients, they're the
                communication wizards ensuring seamless interactions and
                fostering lasting partnerships. With a knack for networking,
                they excel in building mutually beneficial relationships, paving
                the way for fruitful collaborations.
              </p>
              <DirectorMap divisi="Relation" right={true} />
            </div>
            <StaffMap divisi="Relation" />
          </div>
        </section>

        <section
          id="training and development"
          className="bg-exer-charcoal px-36 pt-6 pb-20 flex justify-center items-center"
        >
          <div className="w-[1200px]">
            <div className="flex justify-end">
              <div className="mb-16 font-inter font-black">
                <div className="flex flex-row gap-3">
                  <div className="text-exer-white leading-none tracking-[-0.78rem] text-[128px]">
                    TRAINING
                  </div>
                  <h1 className="text-[123px] text-exer-white leading-none">
                    &
                  </h1>
                </div>
                <h1 className="leading-none p-0 bg-exer-white text-exer-gunmetal text-[80px] w-fit px-2 text-cente">
                  DEVELOPMENT
                </h1>
              </div>
            </div>
            <div className="mb-12 relative h-[500px]">
              <p className="absolute right-0 font-poppins text-[25px] w-[446px] text-justify text-exer-white">
                The backbone of Exercise’s financial stability and success.
                Responsible for creating and implementing financial strategies,
                managing budgets, and making informed decisions that guide the
                financial future of our organization. Their unwavering
                commitment to accuracy and integrity ensures the long-term
                growth and prosperity of the team.
              </p>
              <DirectorMap divisi="Training and Development" right={false} />
            </div>
            <StaffMap divisi="Training and Development" />
          </div>
        </section>

        <section
          id="hardware"
          className="bg-exer-grayblue px-44 pt-6 pb-20 flex justify-center items-center"
        >
          <div className="w-[1200px]">
            <h1 className="font-inter font-black text-exer-white leading-none tracking-[-0.73rem] text-[128px] mb-16">
              HARDWARE
            </h1>
            <div className="mb-12 relative h-[500px]">
              <p className="font-poppins text-[25px] font-semibold w-[446px] text-justify text-exer-white">
                The backbone of our technological endeavors, responsible for
                bringing the physical components of our products to life. From
                designing and testing complex circuits to fine-tuning and
                assembling intricate hardware, our team of skilled engineers and
                technicians are the unsung heroes of innovation.
              </p>
              <DirectorMap divisi="Hardware" right={true} />
            </div>
            <StaffMap divisi="Hardware" />
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
