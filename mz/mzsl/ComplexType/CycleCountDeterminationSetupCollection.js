var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.CycleCountDeterminationSetupCollection = function () {
}

SAPB1.CycleCountDeterminationSetupCollection.prototype = new SAPB1.Collection();
SAPB1.CycleCountDeterminationSetupCollection.prototype.constructor = SAPB1.CycleCountDeterminationSetupCollection;
//override the default one.    
SAPB1.CycleCountDeterminationSetupCollection.get = function (index) {
    return SAPB1.CycleCountDeterminationSetup.create(this.array[index]);
}

SAPB1.CycleCountDeterminationSetupCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.CycleCountDeterminationSetupCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.CycleCountDeterminationSetup.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.CycleCountDeterminationSetupCollection;
