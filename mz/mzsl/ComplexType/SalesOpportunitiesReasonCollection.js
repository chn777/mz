var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.SalesOpportunitiesReasonCollection = function () {
}

SAPB1.SalesOpportunitiesReasonCollection.prototype = new SAPB1.Collection();
SAPB1.SalesOpportunitiesReasonCollection.prototype.constructor = SAPB1.SalesOpportunitiesReasonCollection;
//override the default one.    
SAPB1.SalesOpportunitiesReasonCollection.get = function (index) {
    return SAPB1.SalesOpportunitiesReason.create(this.array[index]);
}

SAPB1.SalesOpportunitiesReasonCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.SalesOpportunitiesReasonCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.SalesOpportunitiesReason.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.SalesOpportunitiesReasonCollection;
