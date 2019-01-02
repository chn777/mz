var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.PurchaseTaxInvoiceLineCollection = function () {
}

SAPB1.PurchaseTaxInvoiceLineCollection.prototype = new SAPB1.Collection();
SAPB1.PurchaseTaxInvoiceLineCollection.prototype.constructor = SAPB1.PurchaseTaxInvoiceLineCollection;
//override the default one.    
SAPB1.PurchaseTaxInvoiceLineCollection.get = function (index) {
    return SAPB1.PurchaseTaxInvoiceLine.create(this.array[index]);
}

SAPB1.PurchaseTaxInvoiceLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.PurchaseTaxInvoiceLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.PurchaseTaxInvoiceLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.PurchaseTaxInvoiceLineCollection;
