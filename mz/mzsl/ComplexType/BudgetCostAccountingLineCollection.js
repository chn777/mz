var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BudgetCostAccountingLineCollection = function () {
}

SAPB1.BudgetCostAccountingLineCollection.prototype = new SAPB1.Collection();
SAPB1.BudgetCostAccountingLineCollection.prototype.constructor = SAPB1.BudgetCostAccountingLineCollection;
//override the default one.    
SAPB1.BudgetCostAccountingLineCollection.get = function (index) {
    return SAPB1.BudgetCostAccountingLine.create(this.array[index]);
}

SAPB1.BudgetCostAccountingLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BudgetCostAccountingLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BudgetCostAccountingLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BudgetCostAccountingLineCollection;
