var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.SalesOpportunitiesPartnerCollection = function () {
}

SAPB1.SalesOpportunitiesPartnerCollection.prototype = new SAPB1.Collection();
SAPB1.SalesOpportunitiesPartnerCollection.prototype.constructor = SAPB1.SalesOpportunitiesPartnerCollection;
//override the default one.    
SAPB1.SalesOpportunitiesPartnerCollection.get = function (index) {
    return SAPB1.SalesOpportunitiesPartner.create(this.array[index]);
}

SAPB1.SalesOpportunitiesPartnerCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.SalesOpportunitiesPartnerCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.SalesOpportunitiesPartner.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.SalesOpportunitiesPartnerCollection;
