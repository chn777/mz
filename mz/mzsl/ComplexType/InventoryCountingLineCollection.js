var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InventoryCountingLineCollection = function () {
}

SAPB1.InventoryCountingLineCollection.prototype = new SAPB1.Collection();
SAPB1.InventoryCountingLineCollection.prototype.constructor = SAPB1.InventoryCountingLineCollection;
//override the default one.    
SAPB1.InventoryCountingLineCollection.get = function (index) {
    return SAPB1.InventoryCountingLine.create(this.array[index]);
}

SAPB1.InventoryCountingLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InventoryCountingLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InventoryCountingLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InventoryCountingLineCollection;
