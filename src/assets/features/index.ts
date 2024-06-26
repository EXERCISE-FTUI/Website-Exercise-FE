import json from '../features/features.resource.json';
import Features from './featuresSchema';
const FeaturesList: Features[] = [];

for (var key in json) {
    if (json.hasOwnProperty(key)) {
        const features = new Features(json[key].description, json[key].image);
        FeaturesList.push(features);
    }
}

export default FeaturesList;
