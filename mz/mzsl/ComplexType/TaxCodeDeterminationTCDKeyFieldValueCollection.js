var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TaxCodeDeterminationTCDKeyFieldValueCollection = function () {
}

SAPB1.TaxCodeDeterminationTCDKeyFieldValueCollection.prototype = new SAPB1.Collection();
SAPB1.TaxCodeDeterminationTCDKeyFieldValueCollection.prototype.constructor = SAPB1.TaxCodeDeterminationTCDKeyFieldValueCollection;
//override the default one.    
SAPB1.TaxCodeDeterminationTCDKeyFieldValueCollection.get = function (index) {
    return SAPB1.TaxCodeDeterminationTCDKeyFieldValue.create(this.array[index]);
}

SAPB1.TaxCodeDeterminationTCDKeyFieldValueCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TaxCodeDeterminationTCDKeyFieldValueCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TaxCodeDeterminationTCDKeyFieldValue.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TaxCodeDeterminationTCDKeyFieldValueCollection;
