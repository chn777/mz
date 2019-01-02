var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.PurchaseTaxInvoiceOperationCodeCollection = function () {
}

SAPB1.PurchaseTaxInvoiceOperationCodeCollection.prototype = new SAPB1.Collection();
SAPB1.PurchaseTaxInvoiceOperationCodeCollection.prototype.constructor = SAPB1.PurchaseTaxInvoiceOperationCodeCollection;
//override the default one.    
SAPB1.PurchaseTaxInvoiceOperationCodeCollection.get = function (index) {
    return SAPB1.PurchaseTaxInvoiceOperationCode.create(this.array[index]);
}

SAPB1.PurchaseTaxInvoiceOperationCodeCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.PurchaseTaxInvoiceOperationCodeCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.PurchaseTaxInvoiceOperationCode.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.PurchaseTaxInvoiceOperationCodeCollection;
