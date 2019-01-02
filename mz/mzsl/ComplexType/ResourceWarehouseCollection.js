var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ResourceWarehouseCollection = function () {
}

SAPB1.ResourceWarehouseCollection.prototype = new SAPB1.Collection();
SAPB1.ResourceWarehouseCollection.prototype.constructor = SAPB1.ResourceWarehouseCollection;
//override the default one.    
SAPB1.ResourceWarehouseCollection.get = function (index) {
    return SAPB1.ResourceWarehouse.create(this.array[index]);
}

SAPB1.ResourceWarehouseCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ResourceWarehouseCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ResourceWarehouse.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ResourceWarehouseCollection;
