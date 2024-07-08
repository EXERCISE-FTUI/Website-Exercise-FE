import Testimony from "./testimonySchema";
import json from "./testimony.resource.json";

const TestimonyList: Testimony[] = [];

for(var key in json){
    if(json.hasOwnProperty(key)){
        const testimony = new Testimony(json[key].src, json[key].title, json[key].message, json[key].name, json[key].current_job);
        TestimonyList.push(testimony);
    }
}

export default TestimonyList;