var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ChecksforPaymentLineCollection = function () {
}

SAPB1.ChecksforPaymentLineCollection.prototype = new SAPB1.Collection();
SAPB1.ChecksforPaymentLineCollection.prototype.constructor = SAPB1.ChecksforPaymentLineCollection;
//override the default one.    
SAPB1.ChecksforPaymentLineCollection.get = function (index) {
    return SAPB1.ChecksforPaymentLine.create(this.array[index]);
}

SAPB1.ChecksforPaymentLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ChecksforPaymentLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ChecksforPaymentLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ChecksforPaymentLineCollection;
