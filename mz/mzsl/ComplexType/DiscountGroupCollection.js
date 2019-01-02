var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DiscountGroupCollection = function () {
}

SAPB1.DiscountGroupCollection.prototype = new SAPB1.Collection();
SAPB1.DiscountGroupCollection.prototype.constructor = SAPB1.DiscountGroupCollection;
//override the default one.    
SAPB1.DiscountGroupCollection.get = function (index) {
    return SAPB1.DiscountGroup.create(this.array[index]);
}

SAPB1.DiscountGroupCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DiscountGroupCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DiscountGroup.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DiscountGroupCollection;
