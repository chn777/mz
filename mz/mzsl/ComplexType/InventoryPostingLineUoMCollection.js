var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InventoryPostingLineUoMCollection = function () {
}

SAPB1.InventoryPostingLineUoMCollection.prototype = new SAPB1.Collection();
SAPB1.InventoryPostingLineUoMCollection.prototype.constructor = SAPB1.InventoryPostingLineUoMCollection;
//override the default one.    
SAPB1.InventoryPostingLineUoMCollection.get = function (index) {
    return SAPB1.InventoryPostingLineUoM.create(this.array[index]);
}

SAPB1.InventoryPostingLineUoMCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InventoryPostingLineUoMCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InventoryPostingLineUoM.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InventoryPostingLineUoMCollection;
