var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InventoryCountingSerialNumberCollection = function () {
}

SAPB1.InventoryCountingSerialNumberCollection.prototype = new SAPB1.Collection();
SAPB1.InventoryCountingSerialNumberCollection.prototype.constructor = SAPB1.InventoryCountingSerialNumberCollection;
//override the default one.    
SAPB1.InventoryCountingSerialNumberCollection.get = function (index) {
    return SAPB1.InventoryCountingSerialNumber.create(this.array[index]);
}

SAPB1.InventoryCountingSerialNumberCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InventoryCountingSerialNumberCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InventoryCountingSerialNumber.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InventoryCountingSerialNumberCollection;
