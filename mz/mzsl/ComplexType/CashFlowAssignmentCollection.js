var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.CashFlowAssignmentCollection = function () {
}

SAPB1.CashFlowAssignmentCollection.prototype = new SAPB1.Collection();
SAPB1.CashFlowAssignmentCollection.prototype.constructor = SAPB1.CashFlowAssignmentCollection;
//override the default one.    
SAPB1.CashFlowAssignmentCollection.get = function (index) {
    return SAPB1.CashFlowAssignment.create(this.array[index]);
}

SAPB1.CashFlowAssignmentCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.CashFlowAssignmentCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.CashFlowAssignment.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.CashFlowAssignmentCollection;
