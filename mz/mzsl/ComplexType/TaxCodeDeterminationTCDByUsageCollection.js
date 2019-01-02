var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TaxCodeDeterminationTCDByUsageCollection = function () {
}

SAPB1.TaxCodeDeterminationTCDByUsageCollection.prototype = new SAPB1.Collection();
SAPB1.TaxCodeDeterminationTCDByUsageCollection.prototype.constructor = SAPB1.TaxCodeDeterminationTCDByUsageCollection;
//override the default one.    
SAPB1.TaxCodeDeterminationTCDByUsageCollection.get = function (index) {
    return SAPB1.TaxCodeDeterminationTCDByUsage.create(this.array[index]);
}

SAPB1.TaxCodeDeterminationTCDByUsageCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TaxCodeDeterminationTCDByUsageCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TaxCodeDeterminationTCDByUsage.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TaxCodeDeterminationTCDByUsageCollection;
