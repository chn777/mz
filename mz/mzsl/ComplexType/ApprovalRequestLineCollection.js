var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ApprovalRequestLineCollection = function () {
}

SAPB1.ApprovalRequestLineCollection.prototype = new SAPB1.Collection();
SAPB1.ApprovalRequestLineCollection.prototype.constructor = SAPB1.ApprovalRequestLineCollection;
//override the default one.    
SAPB1.ApprovalRequestLineCollection.get = function (index) {
    return SAPB1.ApprovalRequestLine.create(this.array[index]);
}

SAPB1.ApprovalRequestLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ApprovalRequestLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ApprovalRequestLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ApprovalRequestLineCollection;
