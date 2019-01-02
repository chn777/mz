var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ResourceDailyCapacityCollection = function () {
}

SAPB1.ResourceDailyCapacityCollection.prototype = new SAPB1.Collection();
SAPB1.ResourceDailyCapacityCollection.prototype.constructor = SAPB1.ResourceDailyCapacityCollection;
//override the default one.    
SAPB1.ResourceDailyCapacityCollection.get = function (index) {
    return SAPB1.ResourceDailyCapacity.create(this.array[index]);
}

SAPB1.ResourceDailyCapacityCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ResourceDailyCapacityCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ResourceDailyCapacity.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ResourceDailyCapacityCollection;
