var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BankStatementRowCollection = function () {
}

SAPB1.BankStatementRowCollection.prototype = new SAPB1.Collection();
SAPB1.BankStatementRowCollection.prototype.constructor = SAPB1.BankStatementRowCollection;
//override the default one.    
SAPB1.BankStatementRowCollection.get = function (index) {
    return SAPB1.BankStatementRow.create(this.array[index]);
}

SAPB1.BankStatementRowCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BankStatementRowCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BankStatementRow.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BankStatementRowCollection;
