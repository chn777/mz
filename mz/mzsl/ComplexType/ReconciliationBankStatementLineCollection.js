var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ReconciliationBankStatementLineCollection = function () {
}

SAPB1.ReconciliationBankStatementLineCollection.prototype = new SAPB1.Collection();
SAPB1.ReconciliationBankStatementLineCollection.prototype.constructor = SAPB1.ReconciliationBankStatementLineCollection;
//override the default one.    
SAPB1.ReconciliationBankStatementLineCollection.get = function (index) {
    return SAPB1.ReconciliationBankStatementLine.create(this.array[index]);
}

SAPB1.ReconciliationBankStatementLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ReconciliationBankStatementLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ReconciliationBankStatementLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ReconciliationBankStatementLineCollection;
