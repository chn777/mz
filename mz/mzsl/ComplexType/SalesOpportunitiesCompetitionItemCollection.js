var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.SalesOpportunitiesCompetitionItemCollection = function () {
}

SAPB1.SalesOpportunitiesCompetitionItemCollection.prototype = new SAPB1.Collection();
SAPB1.SalesOpportunitiesCompetitionItemCollection.prototype.constructor = SAPB1.SalesOpportunitiesCompetitionItemCollection;
//override the default one.    
SAPB1.SalesOpportunitiesCompetitionItemCollection.get = function (index) {
    return SAPB1.SalesOpportunitiesCompetitionItem.create(this.array[index]);
}

SAPB1.SalesOpportunitiesCompetitionItemCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.SalesOpportunitiesCompetitionItemCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.SalesOpportunitiesCompetitionItem.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.SalesOpportunitiesCompetitionItemCollection;
