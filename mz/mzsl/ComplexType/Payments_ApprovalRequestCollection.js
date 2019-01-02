var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.Payments_ApprovalRequestCollection = function () {
}

SAPB1.Payments_ApprovalRequestCollection.prototype = new SAPB1.Collection();
SAPB1.Payments_ApprovalRequestCollection.prototype.constructor = SAPB1.Payments_ApprovalRequestCollection;
//override the default one.    
SAPB1.Payments_ApprovalRequestCollection.get = function (index) {
    return SAPB1.Payments_ApprovalRequest.create(this.array[index]);
}

SAPB1.Payments_ApprovalRequestCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.Payments_ApprovalRequestCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.Payments_ApprovalRequest.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.Payments_ApprovalRequestCollection;
