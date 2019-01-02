var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InventoryPostingCCDNumberCollection = function () {
}

SAPB1.InventoryPostingCCDNumberCollection.prototype = new SAPB1.Collection();
SAPB1.InventoryPostingCCDNumberCollection.prototype.constructor = SAPB1.InventoryPostingCCDNumberCollection;
//override the default one.    
SAPB1.InventoryPostingCCDNumberCollection.get = function (index) {
    return SAPB1.InventoryPostingCCDNumber.create(this.array[index]);
}

SAPB1.InventoryPostingCCDNumberCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InventoryPostingCCDNumberCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InventoryPostingCCDNumber.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InventoryPostingCCDNumberCollection;
