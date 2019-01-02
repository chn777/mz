var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.PM_WorkOrderDataCollection = function () {
}

SAPB1.PM_WorkOrderDataCollection.prototype = new SAPB1.Collection();
SAPB1.PM_WorkOrderDataCollection.prototype.constructor = SAPB1.PM_WorkOrderDataCollection;
//override the default one.    
SAPB1.PM_WorkOrderDataCollection.get = function (index) {
    return SAPB1.PM_WorkOrderData.create(this.array[index]);
}

SAPB1.PM_WorkOrderDataCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.PM_WorkOrderDataCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.PM_WorkOrderData.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.PM_WorkOrderDataCollection;
