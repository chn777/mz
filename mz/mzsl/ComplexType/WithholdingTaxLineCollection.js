var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WithholdingTaxLineCollection = function () {
}

SAPB1.WithholdingTaxLineCollection.prototype = new SAPB1.Collection();
SAPB1.WithholdingTaxLineCollection.prototype.constructor = SAPB1.WithholdingTaxLineCollection;
//override the default one.    
SAPB1.WithholdingTaxLineCollection.get = function (index) {
    return SAPB1.WithholdingTaxLine.create(this.array[index]);
}

SAPB1.WithholdingTaxLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WithholdingTaxLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WithholdingTaxLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WithholdingTaxLineCollection;
