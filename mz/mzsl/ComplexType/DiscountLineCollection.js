var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DiscountLineCollection = function () {
}

SAPB1.DiscountLineCollection.prototype = new SAPB1.Collection();
SAPB1.DiscountLineCollection.prototype.constructor = SAPB1.DiscountLineCollection;
//override the default one.    
SAPB1.DiscountLineCollection.get = function (index) {
    return SAPB1.DiscountLine.create(this.array[index]);
}

SAPB1.DiscountLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DiscountLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DiscountLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DiscountLineCollection;
