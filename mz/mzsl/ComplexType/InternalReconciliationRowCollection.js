var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InternalReconciliationRowCollection = function () {
}

SAPB1.InternalReconciliationRowCollection.prototype = new SAPB1.Collection();
SAPB1.InternalReconciliationRowCollection.prototype.constructor = SAPB1.InternalReconciliationRowCollection;
//override the default one.    
SAPB1.InternalReconciliationRowCollection.get = function (index) {
    return SAPB1.InternalReconciliationRow.create(this.array[index]);
}

SAPB1.InternalReconciliationRowCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InternalReconciliationRowCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InternalReconciliationRow.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InternalReconciliationRowCollection;
