var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.FiscalPrinterParamsCollection = function () {
}

SAPB1.FiscalPrinterParamsCollection.prototype = new SAPB1.Collection();
SAPB1.FiscalPrinterParamsCollection.prototype.constructor = SAPB1.FiscalPrinterParamsCollection;
//override the default one.    
SAPB1.FiscalPrinterParamsCollection.get = function (index) {
    return SAPB1.FiscalPrinterParams.create(this.array[index]);
}

SAPB1.FiscalPrinterParamsCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.FiscalPrinterParamsCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.FiscalPrinterParams.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.FiscalPrinterParamsCollection;
