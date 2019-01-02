var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodCollection = function () {
}

SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodCollection.prototype = new SAPB1.Collection();
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodCollection.prototype.constructor = SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodCollection;
//override the default one.    
SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodCollection.get = function (index) {
    return SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.create(this.array[index]);
}

SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriod.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodCollection;
