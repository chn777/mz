var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.SalesTaxInvoiceLineCollection = function () {
}

SAPB1.SalesTaxInvoiceLineCollection.prototype = new SAPB1.Collection();
SAPB1.SalesTaxInvoiceLineCollection.prototype.constructor = SAPB1.SalesTaxInvoiceLineCollection;
//override the default one.    
SAPB1.SalesTaxInvoiceLineCollection.get = function (index) {
    return SAPB1.SalesTaxInvoiceLine.create(this.array[index]);
}

SAPB1.SalesTaxInvoiceLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.SalesTaxInvoiceLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.SalesTaxInvoiceLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.SalesTaxInvoiceLineCollection;
