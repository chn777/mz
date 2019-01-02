var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.PaymentCheckCollection = function () {
}

SAPB1.PaymentCheckCollection.prototype = new SAPB1.Collection();
SAPB1.PaymentCheckCollection.prototype.constructor = SAPB1.PaymentCheckCollection;
//override the default one.    
SAPB1.PaymentCheckCollection.get = function (index) {
    return SAPB1.PaymentCheck.create(this.array[index]);
}

SAPB1.PaymentCheckCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.PaymentCheckCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.PaymentCheck.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.PaymentCheckCollection;
