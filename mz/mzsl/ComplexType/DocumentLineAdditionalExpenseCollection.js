var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DocumentLineAdditionalExpenseCollection = function () {
}

SAPB1.DocumentLineAdditionalExpenseCollection.prototype = new SAPB1.Collection();
SAPB1.DocumentLineAdditionalExpenseCollection.prototype.constructor = SAPB1.DocumentLineAdditionalExpenseCollection;
//override the default one.    
SAPB1.DocumentLineAdditionalExpenseCollection.get = function (index) {
    return SAPB1.DocumentLineAdditionalExpense.create(this.array[index]);
}

SAPB1.DocumentLineAdditionalExpenseCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DocumentLineAdditionalExpenseCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DocumentLineAdditionalExpense.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DocumentLineAdditionalExpenseCollection;
