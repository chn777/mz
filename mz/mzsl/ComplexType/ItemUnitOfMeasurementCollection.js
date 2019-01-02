var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ItemUnitOfMeasurementCollection = function () {
}

SAPB1.ItemUnitOfMeasurementCollection.prototype = new SAPB1.Collection();
SAPB1.ItemUnitOfMeasurementCollection.prototype.constructor = SAPB1.ItemUnitOfMeasurementCollection;
//override the default one.    
SAPB1.ItemUnitOfMeasurementCollection.get = function (index) {
    return SAPB1.ItemUnitOfMeasurement.create(this.array[index]);
}

SAPB1.ItemUnitOfMeasurementCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ItemUnitOfMeasurementCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ItemUnitOfMeasurement.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ItemUnitOfMeasurementCollection;
