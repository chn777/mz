var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ItemPriceCollection = function () {
}

SAPB1.ItemPriceCollection.prototype = new SAPB1.Collection();
SAPB1.ItemPriceCollection.prototype.constructor = SAPB1.ItemPriceCollection;
//override the default one.    
SAPB1.ItemPriceCollection.get = function (index) {
    return SAPB1.ItemPrice.create(this.array[index]);
}

SAPB1.ItemPriceCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ItemPriceCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ItemPrice.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ItemPriceCollection;
