var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DiscountGroupLineCollection = function () {
}

SAPB1.DiscountGroupLineCollection.prototype = new SAPB1.Collection();
SAPB1.DiscountGroupLineCollection.prototype.constructor = SAPB1.DiscountGroupLineCollection;
//override the default one.    
SAPB1.DiscountGroupLineCollection.get = function (index) {
    return SAPB1.DiscountGroupLine.create(this.array[index]);
}

SAPB1.DiscountGroupLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DiscountGroupLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DiscountGroupLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DiscountGroupLineCollection;
