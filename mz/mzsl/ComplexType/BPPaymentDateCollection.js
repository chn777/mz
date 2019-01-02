var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BPPaymentDateCollection = function () {
}

SAPB1.BPPaymentDateCollection.prototype = new SAPB1.Collection();
SAPB1.BPPaymentDateCollection.prototype.constructor = SAPB1.BPPaymentDateCollection;
//override the default one.    
SAPB1.BPPaymentDateCollection.get = function (index) {
    return SAPB1.BPPaymentDate.create(this.array[index]);
}

SAPB1.BPPaymentDateCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BPPaymentDateCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BPPaymentDate.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BPPaymentDateCollection;
