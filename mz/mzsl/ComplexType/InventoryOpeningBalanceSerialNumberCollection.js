var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InventoryOpeningBalanceSerialNumberCollection = function () {
}

SAPB1.InventoryOpeningBalanceSerialNumberCollection.prototype = new SAPB1.Collection();
SAPB1.InventoryOpeningBalanceSerialNumberCollection.prototype.constructor = SAPB1.InventoryOpeningBalanceSerialNumberCollection;
//override the default one.    
SAPB1.InventoryOpeningBalanceSerialNumberCollection.get = function (index) {
    return SAPB1.InventoryOpeningBalanceSerialNumber.create(this.array[index]);
}

SAPB1.InventoryOpeningBalanceSerialNumberCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InventoryOpeningBalanceSerialNumberCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InventoryOpeningBalanceSerialNumber.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InventoryOpeningBalanceSerialNumberCollection;
