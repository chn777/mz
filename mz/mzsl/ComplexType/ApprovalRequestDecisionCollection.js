var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ApprovalRequestDecisionCollection = function () {
}

SAPB1.ApprovalRequestDecisionCollection.prototype = new SAPB1.Collection();
SAPB1.ApprovalRequestDecisionCollection.prototype.constructor = SAPB1.ApprovalRequestDecisionCollection;
//override the default one.    
SAPB1.ApprovalRequestDecisionCollection.get = function (index) {
    return SAPB1.ApprovalRequestDecision.create(this.array[index]);
}

SAPB1.ApprovalRequestDecisionCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ApprovalRequestDecisionCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ApprovalRequestDecision.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ApprovalRequestDecisionCollection;
