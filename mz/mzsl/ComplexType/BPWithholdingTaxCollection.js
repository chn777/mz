var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BPWithholdingTaxCollection = function () {
}

SAPB1.BPWithholdingTaxCollection.prototype = new SAPB1.Collection();
SAPB1.BPWithholdingTaxCollection.prototype.constructor = SAPB1.BPWithholdingTaxCollection;
//override the default one.    
SAPB1.BPWithholdingTaxCollection.get = function (index) {
    return SAPB1.BPWithholdingTax.create(this.array[index]);
}

SAPB1.BPWithholdingTaxCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BPWithholdingTaxCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BPWithholdingTax.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BPWithholdingTaxCollection;