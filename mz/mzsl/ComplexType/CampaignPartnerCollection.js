var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.CampaignPartnerCollection = function () {
}

SAPB1.CampaignPartnerCollection.prototype = new SAPB1.Collection();
SAPB1.CampaignPartnerCollection.prototype.constructor = SAPB1.CampaignPartnerCollection;
//override the default one.    
SAPB1.CampaignPartnerCollection.get = function (index) {
    return SAPB1.CampaignPartner.create(this.array[index]);
}

SAPB1.CampaignPartnerCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.CampaignPartnerCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.CampaignPartner.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.CampaignPartnerCollection;
