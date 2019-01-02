var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WIPMappingCollection = function () {
}

SAPB1.WIPMappingCollection.prototype = new SAPB1.Collection();
SAPB1.WIPMappingCollection.prototype.constructor = SAPB1.WIPMappingCollection;
//override the default one.    
SAPB1.WIPMappingCollection.get = function (index) {
    return SAPB1.WIPMapping.create(this.array[index]);
}

SAPB1.WIPMappingCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WIPMappingCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WIPMapping.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WIPMappingCollection;
