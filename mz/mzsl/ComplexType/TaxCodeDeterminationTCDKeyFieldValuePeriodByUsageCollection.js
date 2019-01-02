var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsageCollection = function () {
}

SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsageCollection.prototype = new SAPB1.Collection();
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsageCollection.prototype.constructor = SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsageCollection;
//override the default one.    
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsageCollection.get = function (index) {
    return SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.create(this.array[index]);
}

SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsageCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsageCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsageCollection;
