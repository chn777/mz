var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BillOfExchangeTransDepositCollection = function () {
}

SAPB1.BillOfExchangeTransDepositCollection.prototype = new SAPB1.Collection();
SAPB1.BillOfExchangeTransDepositCollection.prototype.constructor = SAPB1.BillOfExchangeTransDepositCollection;
//override the default one.    
SAPB1.BillOfExchangeTransDepositCollection.get = function (index) {
    return SAPB1.BillOfExchangeTransDeposit.create(this.array[index]);
}

SAPB1.BillOfExchangeTransDepositCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BillOfExchangeTransDepositCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BillOfExchangeTransDeposit.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BillOfExchangeTransDepositCollection;
