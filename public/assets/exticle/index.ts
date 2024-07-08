// index.ts
import { Exticle } from "./exticleSchema";
import json from "./exticle.resource.json";

const ExticleList: Exticle[] = [];

for (const key in json) {
    if (json.hasOwnProperty(key)) {
        const item = json[key];
        // Create a Date object directly from the `writtenOn` string
        const writtenOn = new Date(item.writtenOn);
        const exticle = new Exticle(item.title, item.image, item.author, writtenOn, item.text);
        ExticleList.push(exticle);
    }
}

// Sort the list of Exticle objects by the writtenOn date, oldest first
ExticleList.sort((a, b) => a.writtenOn.getTime() - b.writtenOn.getTime());

export default ExticleList;
