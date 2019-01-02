var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.UserBranchAssignmentItemCollection = function () {
}

SAPB1.UserBranchAssignmentItemCollection.prototype = new SAPB1.Collection();
SAPB1.UserBranchAssignmentItemCollection.prototype.constructor = SAPB1.UserBranchAssignmentItemCollection;
//override the default one.    
SAPB1.UserBranchAssignmentItemCollection.get = function (index) {
    return SAPB1.UserBranchAssignmentItem.create(this.array[index]);
}

SAPB1.UserBranchAssignmentItemCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.UserBranchAssignmentItemCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.UserBranchAssignmentItem.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.UserBranchAssignmentItemCollection;
