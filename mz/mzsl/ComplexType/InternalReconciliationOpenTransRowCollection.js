var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InternalReconciliationOpenTransRowCollection = function () {
}

SAPB1.InternalReconciliationOpenTransRowCollection.prototype = new SAPB1.Collection();
SAPB1.InternalReconciliationOpenTransRowCollection.prototype.constructor = SAPB1.InternalReconciliationOpenTransRowCollection;
//override the default one.    
SAPB1.InternalReconciliationOpenTransRowCollection.get = function (index) {
    return SAPB1.InternalReconciliationOpenTransRow.create(this.array[index]);
}

SAPB1.InternalReconciliationOpenTransRowCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InternalReconciliationOpenTransRowCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InternalReconciliationOpenTransRow.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InternalReconciliationOpenTransRowCollection;
