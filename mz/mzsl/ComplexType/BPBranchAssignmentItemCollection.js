var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BPBranchAssignmentItemCollection = function () {
}

SAPB1.BPBranchAssignmentItemCollection.prototype = new SAPB1.Collection();
SAPB1.BPBranchAssignmentItemCollection.prototype.constructor = SAPB1.BPBranchAssignmentItemCollection;
//override the default one.    
SAPB1.BPBranchAssignmentItemCollection.get = function (index) {
    return SAPB1.BPBranchAssignmentItem.create(this.array[index]);
}

SAPB1.BPBranchAssignmentItemCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BPBranchAssignmentItemCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BPBranchAssignmentItem.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BPBranchAssignmentItemCollection;
