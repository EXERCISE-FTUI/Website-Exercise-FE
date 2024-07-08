import PastProject from "./pastProjectSchema";
import json from "./pastProject.resource.json";

const PastProjectsList: PastProject[] = [];
for(var key in json){
    if(json.hasOwnProperty(key)){
        const project = new PastProject(json[key].title, json[key].description, json[key].image, json[key].type);
        PastProjectsList.push(project);
    }
}

export default PastProjectsList;