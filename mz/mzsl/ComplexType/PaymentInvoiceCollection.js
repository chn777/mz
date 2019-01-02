var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.PaymentInvoiceCollection = function () {
}

SAPB1.PaymentInvoiceCollection.prototype = new SAPB1.Collection();
SAPB1.PaymentInvoiceCollection.prototype.constructor = SAPB1.PaymentInvoiceCollection;
//override the default one.    
SAPB1.PaymentInvoiceCollection.get = function (index) {
    return SAPB1.PaymentInvoice.create(this.array[index]);
}

SAPB1.PaymentInvoiceCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.PaymentInvoiceCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.PaymentInvoice.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.PaymentInvoiceCollection;
