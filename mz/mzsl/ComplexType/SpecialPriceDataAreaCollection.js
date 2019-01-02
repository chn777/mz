var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.SpecialPriceDataAreaCollection = function () {
}

SAPB1.SpecialPriceDataAreaCollection.prototype = new SAPB1.Collection();
SAPB1.SpecialPriceDataAreaCollection.prototype.constructor = SAPB1.SpecialPriceDataAreaCollection;
//override the default one.    
SAPB1.SpecialPriceDataAreaCollection.get = function (index) {
    return SAPB1.SpecialPriceDataArea.create(this.array[index]);
}

SAPB1.SpecialPriceDataAreaCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.SpecialPriceDataAreaCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.SpecialPriceDataArea.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.SpecialPriceDataAreaCollection;
