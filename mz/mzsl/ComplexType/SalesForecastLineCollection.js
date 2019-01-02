var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.SalesForecastLineCollection = function () {
}

SAPB1.SalesForecastLineCollection.prototype = new SAPB1.Collection();
SAPB1.SalesForecastLineCollection.prototype.constructor = SAPB1.SalesForecastLineCollection;
//override the default one.    
SAPB1.SalesForecastLineCollection.get = function (index) {
    return SAPB1.SalesForecastLine.create(this.array[index]);
}

SAPB1.SalesForecastLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.SalesForecastLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.SalesForecastLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.SalesForecastLineCollection;
