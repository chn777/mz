var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.UoMPriceCollection = function () {
}

SAPB1.UoMPriceCollection.prototype = new SAPB1.Collection();
SAPB1.UoMPriceCollection.prototype.constructor = SAPB1.UoMPriceCollection;
//override the default one.    
SAPB1.UoMPriceCollection.get = function (index) {
    return SAPB1.UoMPrice.create(this.array[index]);
}

SAPB1.UoMPriceCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.UoMPriceCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.UoMPrice.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.UoMPriceCollection;
