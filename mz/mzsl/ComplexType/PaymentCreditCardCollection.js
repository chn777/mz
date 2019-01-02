var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.PaymentCreditCardCollection = function () {
}

SAPB1.PaymentCreditCardCollection.prototype = new SAPB1.Collection();
SAPB1.PaymentCreditCardCollection.prototype.constructor = SAPB1.PaymentCreditCardCollection;
//override the default one.    
SAPB1.PaymentCreditCardCollection.get = function (index) {
    return SAPB1.PaymentCreditCard.create(this.array[index]);
}

SAPB1.PaymentCreditCardCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.PaymentCreditCardCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.PaymentCreditCard.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.PaymentCreditCardCollection;
