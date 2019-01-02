var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WithholdingTaxDataCollection = function () {
}

SAPB1.WithholdingTaxDataCollection.prototype = new SAPB1.Collection();
SAPB1.WithholdingTaxDataCollection.prototype.constructor = SAPB1.WithholdingTaxDataCollection;
//override the default one.    
SAPB1.WithholdingTaxDataCollection.get = function (index) {
    return SAPB1.WithholdingTaxData.create(this.array[index]);
}

SAPB1.WithholdingTaxDataCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WithholdingTaxDataCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WithholdingTaxData.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WithholdingTaxDataCollection;
