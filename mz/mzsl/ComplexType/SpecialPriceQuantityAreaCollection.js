var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.SpecialPriceQuantityAreaCollection = function () {
}

SAPB1.SpecialPriceQuantityAreaCollection.prototype = new SAPB1.Collection();
SAPB1.SpecialPriceQuantityAreaCollection.prototype.constructor = SAPB1.SpecialPriceQuantityAreaCollection;
//override the default one.    
SAPB1.SpecialPriceQuantityAreaCollection.get = function (index) {
    return SAPB1.SpecialPriceQuantityArea.create(this.array[index]);
}

SAPB1.SpecialPriceQuantityAreaCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.SpecialPriceQuantityAreaCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.SpecialPriceQuantityArea.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.SpecialPriceQuantityAreaCollection;
