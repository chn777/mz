var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ItemWarehouseInfoCollection = function () {
}

SAPB1.ItemWarehouseInfoCollection.prototype = new SAPB1.Collection();
SAPB1.ItemWarehouseInfoCollection.prototype.constructor = SAPB1.ItemWarehouseInfoCollection;
//override the default one.    
SAPB1.ItemWarehouseInfoCollection.get = function (index) {
    return SAPB1.ItemWarehouseInfo.create(this.array[index]);
}

SAPB1.ItemWarehouseInfoCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ItemWarehouseInfoCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ItemWarehouseInfo.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ItemWarehouseInfoCollection;
