var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TaxCodeDeterminationTCDKeyFieldCollection = function () {
}

SAPB1.TaxCodeDeterminationTCDKeyFieldCollection.prototype = new SAPB1.Collection();
SAPB1.TaxCodeDeterminationTCDKeyFieldCollection.prototype.constructor = SAPB1.TaxCodeDeterminationTCDKeyFieldCollection;
//override the default one.    
SAPB1.TaxCodeDeterminationTCDKeyFieldCollection.get = function (index) {
    return SAPB1.TaxCodeDeterminationTCDKeyField.create(this.array[index]);
}

SAPB1.TaxCodeDeterminationTCDKeyFieldCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TaxCodeDeterminationTCDKeyFieldCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TaxCodeDeterminationTCDKeyField.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TaxCodeDeterminationTCDKeyFieldCollection;
