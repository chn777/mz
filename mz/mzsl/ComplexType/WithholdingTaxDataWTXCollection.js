var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WithholdingTaxDataWTXCollection = function () {
}

SAPB1.WithholdingTaxDataWTXCollection.prototype = new SAPB1.Collection();
SAPB1.WithholdingTaxDataWTXCollection.prototype.constructor = SAPB1.WithholdingTaxDataWTXCollection;
//override the default one.    
SAPB1.WithholdingTaxDataWTXCollection.get = function (index) {
    return SAPB1.WithholdingTaxDataWTX.create(this.array[index]);
}

SAPB1.WithholdingTaxDataWTXCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WithholdingTaxDataWTXCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WithholdingTaxDataWTX.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WithholdingTaxDataWTXCollection;
