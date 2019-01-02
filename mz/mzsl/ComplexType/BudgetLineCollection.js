var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BudgetLineCollection = function () {
}

SAPB1.BudgetLineCollection.prototype = new SAPB1.Collection();
SAPB1.BudgetLineCollection.prototype.constructor = SAPB1.BudgetLineCollection;
//override the default one.    
SAPB1.BudgetLineCollection.get = function (index) {
    return SAPB1.BudgetLine.create(this.array[index]);
}

SAPB1.BudgetLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BudgetLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BudgetLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BudgetLineCollection;
