var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BillOfExchangeTransactionLineCollection = function () {
}

SAPB1.BillOfExchangeTransactionLineCollection.prototype = new SAPB1.Collection();
SAPB1.BillOfExchangeTransactionLineCollection.prototype.constructor = SAPB1.BillOfExchangeTransactionLineCollection;
//override the default one.    
SAPB1.BillOfExchangeTransactionLineCollection.get = function (index) {
    return SAPB1.BillOfExchangeTransactionLine.create(this.array[index]);
}

SAPB1.BillOfExchangeTransactionLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BillOfExchangeTransactionLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BillOfExchangeTransactionLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BillOfExchangeTransactionLineCollection;
