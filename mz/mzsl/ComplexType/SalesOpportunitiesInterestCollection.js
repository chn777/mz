var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.SalesOpportunitiesInterestCollection = function () {
}

SAPB1.SalesOpportunitiesInterestCollection.prototype = new SAPB1.Collection();
SAPB1.SalesOpportunitiesInterestCollection.prototype.constructor = SAPB1.SalesOpportunitiesInterestCollection;
//override the default one.    
SAPB1.SalesOpportunitiesInterestCollection.get = function (index) {
    return SAPB1.SalesOpportunitiesInterest.create(this.array[index]);
}

SAPB1.SalesOpportunitiesInterestCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.SalesOpportunitiesInterestCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.SalesOpportunitiesInterest.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.SalesOpportunitiesInterestCollection;
