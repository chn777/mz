var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ItemCycleCountCollection = function () {
}

SAPB1.ItemCycleCountCollection.prototype = new SAPB1.Collection();
SAPB1.ItemCycleCountCollection.prototype.constructor = SAPB1.ItemCycleCountCollection;
//override the default one.    
SAPB1.ItemCycleCountCollection.get = function (index) {
    return SAPB1.ItemCycleCount.create(this.array[index]);
}

SAPB1.ItemCycleCountCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ItemCycleCountCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ItemCycleCount.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ItemCycleCountCollection;
