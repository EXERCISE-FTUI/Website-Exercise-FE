// import React from "react";
import Timbil from "./../../assets/aboutUs/timbil.png";
import { ArrowDown } from "@phosphor-icons/react";
import EmployeeList from "../../assets/aboutUs/employee.tools";

const AboutUs = () => {
  const myEmployeeList = EmployeeList.map(key=>(key.name))
  console.log(myEmployeeList)
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
            <div className="absolute w-screen flex flex-col top-[210px] text-exer-white">
              <div className="flex flex-row gap-2 font-rufina font-bold text-center justify-center items-center text-[80px]">
                <h1 className="justify-center">About</h1>
                <h1 className="text-transparent font-outline-2 ">Us</h1>
                <h1 className="skew-x-[-7deg]">!</h1>
              </div>
              <div className="justify-center flex flex-row gap-2">
                <div className="flex flex-col">
                  <h1 className="leading-none font-semibold text-[30.80px]">
                    Get to Know Us
                  </h1>
                  <p className="leading-none text-2xl">scroll down below ...</p>
                </div>
                <button className="relative rounded-full w-[55px] h-[55px] bg-transparent backdrop-blur-[2px] outline outline-gray-300">
                  <ArrowDown size={38} className="absolute top-2 left-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="visi misi" className="bg-exer-charcoal overflow-hidden">
          <div className="h-[1292px] relative">
            <div className="hexa justify-center top-[140px] left-[-170px] absolute z-0"></div>
            <div className="hexb justify-center top-[381px] right-[-150px] absolute z-0"></div>
            <div className="flex flex-col absolute top-[335px] left-[35px]">
              <div className="bg-white leading-none w-fit absolute z-50">
                <h1 className="text-exer-charcoal leading-none font-inter font-black text-[100px]">
                  VISI
                </h1>
                <p className="w-[720px] absolute font-monsterrat text-white text-2xl font-bold pt-8 drop-shadow-lg [text-shadow:_0.5px_2.5px_0_rgb(0_0_0_/_15%)]">
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
              <div className="w-[720px] top-24 absolute font-monsterrat text-white text-2xl font-bold pt-8 drop-shadow-lg [text-shadow:_0.5px_2.5px_0_rgb(0_0_0_/_15%)]">
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
          <div className="flex flex-row mx-32 gap-16 text-[150px] font-inter font-black leading-none text-center mt-[200px] mb-[300px]">
            <h1 className="tracking-tighter">Meet</h1>
            <h1 className="font-outline-4 text-transparent tracking-[-0.93rem]">
              Our
            </h1>
            <div className="bg-white w-fit leading-none p-0">
              <h1 className="leading-none text-exer-charcoal">TEAM</h1>
            </div>
          </div>
        </section>
        <section
          id="the executive"
          className="bg-exer-charcoal text-exer-white"
        >
          <div className="flex flex-col font-inter font-black leading-none text-center items-center gap-5 mb-8">
            <h1 className="text-[113px]">THE</h1>
            <div className="bg-white skew-y-[-5deg] w-fit">
              <h1 className="text-[107px] text-exer-charcoal ">EXECUTIVE</h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
