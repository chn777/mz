var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.PaymentAccountCollection = function () {
}

SAPB1.PaymentAccountCollection.prototype = new SAPB1.Collection();
SAPB1.PaymentAccountCollection.prototype.constructor = SAPB1.PaymentAccountCollection;
//override the default one.    
SAPB1.PaymentAccountCollection.get = function (index) {
    return SAPB1.PaymentAccount.create(this.array[index]);
}

SAPB1.PaymentAccountCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.PaymentAccountCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.PaymentAccount.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.PaymentAccountCollection;
