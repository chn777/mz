var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InventoryOpeningBalanceBatchNumberCollection = function () {
}

SAPB1.InventoryOpeningBalanceBatchNumberCollection.prototype = new SAPB1.Collection();
SAPB1.InventoryOpeningBalanceBatchNumberCollection.prototype.constructor = SAPB1.InventoryOpeningBalanceBatchNumberCollection;
//override the default one.    
SAPB1.InventoryOpeningBalanceBatchNumberCollection.get = function (index) {
    return SAPB1.InventoryOpeningBalanceBatchNumber.create(this.array[index]);
}

SAPB1.InventoryOpeningBalanceBatchNumberCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InventoryOpeningBalanceBatchNumberCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InventoryOpeningBalanceBatchNumber.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InventoryOpeningBalanceBatchNumberCollection;
