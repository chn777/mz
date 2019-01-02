var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InventoryPostingSerialNumberCollection = function () {
}

SAPB1.InventoryPostingSerialNumberCollection.prototype = new SAPB1.Collection();
SAPB1.InventoryPostingSerialNumberCollection.prototype.constructor = SAPB1.InventoryPostingSerialNumberCollection;
//override the default one.    
SAPB1.InventoryPostingSerialNumberCollection.get = function (index) {
    return SAPB1.InventoryPostingSerialNumber.create(this.array[index]);
}

SAPB1.InventoryPostingSerialNumberCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InventoryPostingSerialNumberCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InventoryPostingSerialNumber.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InventoryPostingSerialNumberCollection;
