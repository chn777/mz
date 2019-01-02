var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DepreciationLevelCollection = function () {
}

SAPB1.DepreciationLevelCollection.prototype = new SAPB1.Collection();
SAPB1.DepreciationLevelCollection.prototype.constructor = SAPB1.DepreciationLevelCollection;
//override the default one.    
SAPB1.DepreciationLevelCollection.get = function (index) {
    return SAPB1.DepreciationLevel.create(this.array[index]);
}

SAPB1.DepreciationLevelCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DepreciationLevelCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DepreciationLevel.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DepreciationLevelCollection;
