var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InventoryCountingBatchNumberCollection = function () {
}

SAPB1.InventoryCountingBatchNumberCollection.prototype = new SAPB1.Collection();
SAPB1.InventoryCountingBatchNumberCollection.prototype.constructor = SAPB1.InventoryCountingBatchNumberCollection;
//override the default one.    
SAPB1.InventoryCountingBatchNumberCollection.get = function (index) {
    return SAPB1.InventoryCountingBatchNumber.create(this.array[index]);
}

SAPB1.InventoryCountingBatchNumberCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InventoryCountingBatchNumberCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InventoryCountingBatchNumber.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InventoryCountingBatchNumberCollection;
