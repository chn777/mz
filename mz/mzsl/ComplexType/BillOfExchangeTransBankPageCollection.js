var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BillOfExchangeTransBankPageCollection = function () {
}

SAPB1.BillOfExchangeTransBankPageCollection.prototype = new SAPB1.Collection();
SAPB1.BillOfExchangeTransBankPageCollection.prototype.constructor = SAPB1.BillOfExchangeTransBankPageCollection;
//override the default one.    
SAPB1.BillOfExchangeTransBankPageCollection.get = function (index) {
    return SAPB1.BillOfExchangeTransBankPage.create(this.array[index]);
}

SAPB1.BillOfExchangeTransBankPageCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BillOfExchangeTransBankPageCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BillOfExchangeTransBankPage.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BillOfExchangeTransBankPageCollection;
