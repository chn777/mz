var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.InternalReconciliationBPCollection = function () {
}

SAPB1.InternalReconciliationBPCollection.prototype = new SAPB1.Collection();
SAPB1.InternalReconciliationBPCollection.prototype.constructor = SAPB1.InternalReconciliationBPCollection;
//override the default one.    
SAPB1.InternalReconciliationBPCollection.get = function (index) {
    return SAPB1.InternalReconciliationBP.create(this.array[index]);
}

SAPB1.InternalReconciliationBPCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.InternalReconciliationBPCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.InternalReconciliationBP.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.InternalReconciliationBPCollection;
