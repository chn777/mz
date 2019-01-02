var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWTCollection = function () {
}

SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWTCollection.prototype = new SAPB1.Collection();
SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWTCollection.prototype.constructor = SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWTCollection;
//override the default one.    
SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWTCollection.get = function (index) {
    return SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT.create(this.array[index]);
}

SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWTCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWTCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWT.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TaxCodeDeterminationTCDKeyFieldValueDefaultWTCollection;
