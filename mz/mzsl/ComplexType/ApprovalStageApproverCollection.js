var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ApprovalStageApproverCollection = function () {
}

SAPB1.ApprovalStageApproverCollection.prototype = new SAPB1.Collection();
SAPB1.ApprovalStageApproverCollection.prototype.constructor = SAPB1.ApprovalStageApproverCollection;
//override the default one.    
SAPB1.ApprovalStageApproverCollection.get = function (index) {
    return SAPB1.ApprovalStageApprover.create(this.array[index]);
}

SAPB1.ApprovalStageApproverCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ApprovalStageApproverCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ApprovalStageApprover.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ApprovalStageApproverCollection;
