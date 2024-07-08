import Event from "./eventSchema";
import json from "./event.resource.json";

const EventsList: Event[] = [];

var id =0;
for(var key in json){
    if(json.hasOwnProperty(key)){
        const event = new Event(json[key].name, json[key].date, json[key].image, json[key].description, id);
        EventsList.push(event);
    }
    id++;
}

export default EventsList;
