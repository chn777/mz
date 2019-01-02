var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DocumentAdditionalExpenseCollection = function () {
}

SAPB1.DocumentAdditionalExpenseCollection.prototype = new SAPB1.Collection();
SAPB1.DocumentAdditionalExpenseCollection.prototype.constructor = SAPB1.DocumentAdditionalExpenseCollection;
//override the default one.    
SAPB1.DocumentAdditionalExpenseCollection.get = function (index) {
    return SAPB1.DocumentAdditionalExpense.create(this.array[index]);
}

SAPB1.DocumentAdditionalExpenseCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DocumentAdditionalExpenseCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DocumentAdditionalExpense.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DocumentAdditionalExpenseCollection;
