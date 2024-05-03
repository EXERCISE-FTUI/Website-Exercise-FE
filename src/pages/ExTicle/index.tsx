import React from 'react';
import { useImages } from '../../assets/imageLoader';
import ExticleList from "../../assets/exticle";

function ExTiclePage() {
  const images = useImages("./exticle/images", ExticleList);

  return (
    <div className="mt-11">
      <div className="flex-col mx-[44px] py-10" style={{ backgroundColor: "#527182", borderRadius: "20px" }}>
        <h1 className="text-white font-poppins font-bold" style={{ fontSize: "32pt" }}>
          Embark on a Teach Journey with
        </h1>
        <h1 className="text-white font-poppins size-11">Exticle</h1>
      </div>
      <div>
        {ExticleList.map((exticle, index) => (
          <div key={index}>
            <h2>{exticle.title}</h2>
            <img src={images[exticle.image] || ''} alt={exticle.title} />
            <p>{exticle.description}</p>
            <small>Written by {exticle.author} on {exticle.writtenOn}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExTiclePage;