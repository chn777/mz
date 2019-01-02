var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BusinessPlaceTributaryInfoCollection = function () {
}

SAPB1.BusinessPlaceTributaryInfoCollection.prototype = new SAPB1.Collection();
SAPB1.BusinessPlaceTributaryInfoCollection.prototype.constructor = SAPB1.BusinessPlaceTributaryInfoCollection;
//override the default one.    
SAPB1.BusinessPlaceTributaryInfoCollection.get = function (index) {
    return SAPB1.BusinessPlaceTributaryInfo.create(this.array[index]);
}

SAPB1.BusinessPlaceTributaryInfoCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BusinessPlaceTributaryInfoCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BusinessPlaceTributaryInfo.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BusinessPlaceTributaryInfoCollection;
