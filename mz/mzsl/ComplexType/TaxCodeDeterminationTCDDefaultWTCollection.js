var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TaxCodeDeterminationTCDDefaultWTCollection = function () {
}

SAPB1.TaxCodeDeterminationTCDDefaultWTCollection.prototype = new SAPB1.Collection();
SAPB1.TaxCodeDeterminationTCDDefaultWTCollection.prototype.constructor = SAPB1.TaxCodeDeterminationTCDDefaultWTCollection;
//override the default one.    
SAPB1.TaxCodeDeterminationTCDDefaultWTCollection.get = function (index) {
    return SAPB1.TaxCodeDeterminationTCDDefaultWT.create(this.array[index]);
}

SAPB1.TaxCodeDeterminationTCDDefaultWTCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TaxCodeDeterminationTCDDefaultWTCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TaxCodeDeterminationTCDDefaultWT.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TaxCodeDeterminationTCDDefaultWTCollection;
