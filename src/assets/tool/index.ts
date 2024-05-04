import Tool from './toolSchema';
import json from './tool.resource.json';
var ToolList : Tool[] = [];

for(var key in json){
    if(json.hasOwnProperty(key)){
        const tool = new Tool(json[key].title, json[key].description, json[key].link, json[key].image);
        ToolList.push(tool);
    }
}

export default ToolList;

