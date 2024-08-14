
const VisiMisi = () => {
  return (
    <section
      id="visi misi"
      className="bg-exer-charcoal overflow-hidden flex justify-center items-center"
    >
      <div className="h-[750px] md:h-[1000px] lg:h-[1292px] w-[1600px] relative ">
        <div className="hexa justify-center top-[150px] md:top-[7%] lg:top-[140px] left-[-64px] md:left-[-15%] lg:left-[-170px]"></div>
        <div className="hexb justify-center top-[282px] md:top-[38%] lg:top-[440px] right-[-81px] md:right-[-15%] lg:right-[-140px]"></div>
        <div className="flex flex-col absolute top-[190px] md:top-[12%] lg:top-[335px] left-[16px] md:left-[3%] lg:left-[35px]">
          <div className="leading-none w-fit absolute z-0">
            <h1 className="text-exer-charcoal bg-exer-white rounded-md px-2 leading-none font-inter font-black text-[30px] md:text-[60px] lg:text-[100px]">
              VISI
            </h1>
            <p className="w-[200px] md:w-[320px] lg:w-[720px] top-2 md:top-10 lg:top-24 absolute font-monsterrat text-exer-white text-[11.5px] md:text-[16px] lg:text-2xl font-semibold lg:font-bold pt-8 drop-shadow-lg [text-shadow:_0.5px_2.5px_0_rgb(0_0_0_/_100%)]">
              Menjadikan EXERCISE 2024 sebagai tempat yang menyenangkan untuk
              mengembangkan soft skill dan hard skill yang relevan dalam dunia
              profesional. Menjadikan EXERCISE 2024 sebagai gerbang pembuka
              untuk merasakan dunia profesionalitas yang menjunjung tinggi
              kualitas.
            </p>
          </div>
        </div>
        <div className="flex flex-col absolute top-[295px] md:top-[43%] lg:top-[535px] right-40 md:right-[300px] lg:right-[700px]">
          <div className="leading-none w-fit absolute z-0 lg:right-[-600px]">
            <h1 className="text-exer-charcoal bg-exer-white rounded-md px-2 leading-none font-inter font-bold lg:font-black text-[30px] md:text-[60px] lg:text-[100px] self-end">
              MISI
            </h1>
          </div>
          <div className="w-[200px] md:w-[280px] lg:w-[720px] top-1 md:top-10 lg:top-24 absolute font-monsterrat text-exer-white text-[7px] md:text-[12.3px] lg:text-xl font-bold pt-8 drop-shadow-lg [text-shadow:_0.5px_2.5px_0_rgb(0_0_0_/_90%)]">
            <ol style={{ listStyle: "decimal" }}>
              <li>
                Meningkatkan kualitas mahasiswa/i Fakultas Teknik Universitas
                Indonesia (FTUI) dari segi keterampilan yang relevan dalam dunia
                pekerjaan ataupun dunia perkuliahan.
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
  );
};

export default VisiMisi;
