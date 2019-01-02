var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ItemGroupsWarehouseInfoCollection = function () {
}

SAPB1.ItemGroupsWarehouseInfoCollection.prototype = new SAPB1.Collection();
SAPB1.ItemGroupsWarehouseInfoCollection.prototype.constructor = SAPB1.ItemGroupsWarehouseInfoCollection;
//override the default one.    
SAPB1.ItemGroupsWarehouseInfoCollection.get = function (index) {
    return SAPB1.ItemGroupsWarehouseInfo.create(this.array[index]);
}

SAPB1.ItemGroupsWarehouseInfoCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ItemGroupsWarehouseInfoCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ItemGroupsWarehouseInfo.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ItemGroupsWarehouseInfoCollection;
