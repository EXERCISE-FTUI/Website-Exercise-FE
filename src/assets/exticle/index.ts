import Exticle from "./exticleSchema";
import json from "./exticle.resource.json";

const ExticleList: Exticle[] = [];
for(var key in json){
    if(json.hasOwnProperty(key)){
        const exticle = new Exticle(json[key].title, json[key].description, json[key].image, json[key].author, json[key].writtenOn);
        ExticleList.push(exticle);
    }
}

export default ExticleList;