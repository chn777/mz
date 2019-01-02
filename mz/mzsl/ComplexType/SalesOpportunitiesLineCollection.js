var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.SalesOpportunitiesLineCollection = function () {
}

SAPB1.SalesOpportunitiesLineCollection.prototype = new SAPB1.Collection();
SAPB1.SalesOpportunitiesLineCollection.prototype.constructor = SAPB1.SalesOpportunitiesLineCollection;
//override the default one.    
SAPB1.SalesOpportunitiesLineCollection.get = function (index) {
    return SAPB1.SalesOpportunitiesLine.create(this.array[index]);
}

SAPB1.SalesOpportunitiesLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.SalesOpportunitiesLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.SalesOpportunitiesLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.SalesOpportunitiesLineCollection;
