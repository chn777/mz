var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InventoryPostingBatchNumberCollection = function () {
}

SAPB1.InventoryPostingBatchNumberCollection.prototype = new SAPB1.Collection();
SAPB1.InventoryPostingBatchNumberCollection.prototype.constructor = SAPB1.InventoryPostingBatchNumberCollection;
//override the default one.    
SAPB1.InventoryPostingBatchNumberCollection.get = function (index) {
    return SAPB1.InventoryPostingBatchNumber.create(this.array[index]);
}

SAPB1.InventoryPostingBatchNumberCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InventoryPostingBatchNumberCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InventoryPostingBatchNumber.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InventoryPostingBatchNumberCollection;
