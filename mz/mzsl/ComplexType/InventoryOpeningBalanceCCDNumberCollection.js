var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InventoryOpeningBalanceCCDNumberCollection = function () {
}

SAPB1.InventoryOpeningBalanceCCDNumberCollection.prototype = new SAPB1.Collection();
SAPB1.InventoryOpeningBalanceCCDNumberCollection.prototype.constructor = SAPB1.InventoryOpeningBalanceCCDNumberCollection;
//override the default one.    
SAPB1.InventoryOpeningBalanceCCDNumberCollection.get = function (index) {
    return SAPB1.InventoryOpeningBalanceCCDNumber.create(this.array[index]);
}

SAPB1.InventoryOpeningBalanceCCDNumberCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InventoryOpeningBalanceCCDNumberCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InventoryOpeningBalanceCCDNumber.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InventoryOpeningBalanceCCDNumberCollection;
