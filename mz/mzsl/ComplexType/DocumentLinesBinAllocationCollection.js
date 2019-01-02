var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DocumentLinesBinAllocationCollection = function () {
}

SAPB1.DocumentLinesBinAllocationCollection.prototype = new SAPB1.Collection();
SAPB1.DocumentLinesBinAllocationCollection.prototype.constructor = SAPB1.DocumentLinesBinAllocationCollection;
//override the default one.    
SAPB1.DocumentLinesBinAllocationCollection.get = function (index) {
    return SAPB1.DocumentLinesBinAllocation.create(this.array[index]);
}

SAPB1.DocumentLinesBinAllocationCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DocumentLinesBinAllocationCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DocumentLinesBinAllocation.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DocumentLinesBinAllocationCollection;
