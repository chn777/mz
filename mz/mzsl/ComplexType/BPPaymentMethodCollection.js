var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BPPaymentMethodCollection = function () {
}

SAPB1.BPPaymentMethodCollection.prototype = new SAPB1.Collection();
SAPB1.BPPaymentMethodCollection.prototype.constructor = SAPB1.BPPaymentMethodCollection;
//override the default one.    
SAPB1.BPPaymentMethodCollection.get = function (index) {
    return SAPB1.BPPaymentMethod.create(this.array[index]);
}

SAPB1.BPPaymentMethodCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BPPaymentMethodCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BPPaymentMethod.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BPPaymentMethodCollection;
