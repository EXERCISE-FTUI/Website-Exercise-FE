import Event from "./eventSchema";
import json from "./events.resource.json";

const EventsList: Event[] = [];


for(var key in json){
    if(json.hasOwnProperty(key)){
        const event = new Event(json[key].title, json[key].date, json[key].image, json[key].description);
        EventsList.push(event);
    }
}

export default EventsList;
