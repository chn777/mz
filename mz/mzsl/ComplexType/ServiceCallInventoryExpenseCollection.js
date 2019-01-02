var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ServiceCallInventoryExpenseCollection = function () {
}

SAPB1.ServiceCallInventoryExpenseCollection.prototype = new SAPB1.Collection();
SAPB1.ServiceCallInventoryExpenseCollection.prototype.constructor = SAPB1.ServiceCallInventoryExpenseCollection;
//override the default one.    
SAPB1.ServiceCallInventoryExpenseCollection.get = function (index) {
    return SAPB1.ServiceCallInventoryExpense.create(this.array[index]);
}

SAPB1.ServiceCallInventoryExpenseCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ServiceCallInventoryExpenseCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ServiceCallInventoryExpense.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ServiceCallInventoryExpenseCollection;
