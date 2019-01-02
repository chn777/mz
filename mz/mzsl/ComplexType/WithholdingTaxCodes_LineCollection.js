var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WithholdingTaxCodes_LineCollection = function () {
}

SAPB1.WithholdingTaxCodes_LineCollection.prototype = new SAPB1.Collection();
SAPB1.WithholdingTaxCodes_LineCollection.prototype.constructor = SAPB1.WithholdingTaxCodes_LineCollection;
//override the default one.    
SAPB1.WithholdingTaxCodes_LineCollection.get = function (index) {
    return SAPB1.WithholdingTaxCodes_Line.create(this.array[index]);
}

SAPB1.WithholdingTaxCodes_LineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WithholdingTaxCodes_LineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WithholdingTaxCodes_Line.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WithholdingTaxCodes_LineCollection;
