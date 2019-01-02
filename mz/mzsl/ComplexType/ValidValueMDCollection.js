var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ValidValueMDCollection = function () {
}

SAPB1.ValidValueMDCollection.prototype = new SAPB1.Collection();
SAPB1.ValidValueMDCollection.prototype.constructor = SAPB1.ValidValueMDCollection;
//override the default one.    
SAPB1.ValidValueMDCollection.get = function (index) {
    return SAPB1.ValidValueMD.create(this.array[index]);
}

SAPB1.ValidValueMDCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ValidValueMDCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ValidValueMD.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ValidValueMDCollection;
