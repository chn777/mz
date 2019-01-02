var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.EmployeeBranchAssignmentItemCollection = function () {
}

SAPB1.EmployeeBranchAssignmentItemCollection.prototype = new SAPB1.Collection();
SAPB1.EmployeeBranchAssignmentItemCollection.prototype.constructor = SAPB1.EmployeeBranchAssignmentItemCollection;
//override the default one.    
SAPB1.EmployeeBranchAssignmentItemCollection.get = function (index) {
    return SAPB1.EmployeeBranchAssignmentItem.create(this.array[index]);
}

SAPB1.EmployeeBranchAssignmentItemCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.EmployeeBranchAssignmentItemCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.EmployeeBranchAssignmentItem.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.EmployeeBranchAssignmentItemCollection;
