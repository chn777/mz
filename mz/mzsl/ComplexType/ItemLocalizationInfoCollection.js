var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ItemLocalizationInfoCollection = function () {
}

SAPB1.ItemLocalizationInfoCollection.prototype = new SAPB1.Collection();
SAPB1.ItemLocalizationInfoCollection.prototype.constructor = SAPB1.ItemLocalizationInfoCollection;
//override the default one.    
SAPB1.ItemLocalizationInfoCollection.get = function (index) {
    return SAPB1.ItemLocalizationInfo.create(this.array[index]);
}

SAPB1.ItemLocalizationInfoCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ItemLocalizationInfoCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ItemLocalizationInfo.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ItemLocalizationInfoCollection;
