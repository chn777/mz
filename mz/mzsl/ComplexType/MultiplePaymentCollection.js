var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.MultiplePaymentCollection = function () {
}

SAPB1.MultiplePaymentCollection.prototype = new SAPB1.Collection();
SAPB1.MultiplePaymentCollection.prototype.constructor = SAPB1.MultiplePaymentCollection;
//override the default one.    
SAPB1.MultiplePaymentCollection.get = function (index) {
    return SAPB1.MultiplePayment.create(this.array[index]);
}

SAPB1.MultiplePaymentCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.MultiplePaymentCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.MultiplePayment.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.MultiplePaymentCollection;
