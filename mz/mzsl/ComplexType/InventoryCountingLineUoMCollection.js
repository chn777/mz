var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InventoryCountingLineUoMCollection = function () {
}

SAPB1.InventoryCountingLineUoMCollection.prototype = new SAPB1.Collection();
SAPB1.InventoryCountingLineUoMCollection.prototype.constructor = SAPB1.InventoryCountingLineUoMCollection;
//override the default one.    
SAPB1.InventoryCountingLineUoMCollection.get = function (index) {
    return SAPB1.InventoryCountingLineUoM.create(this.array[index]);
}

SAPB1.InventoryCountingLineUoMCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InventoryCountingLineUoMCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InventoryCountingLineUoM.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InventoryCountingLineUoMCollection;
