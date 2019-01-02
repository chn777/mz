var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.CampaignBusinessPartnerCollection = function () {
}

SAPB1.CampaignBusinessPartnerCollection.prototype = new SAPB1.Collection();
SAPB1.CampaignBusinessPartnerCollection.prototype.constructor = SAPB1.CampaignBusinessPartnerCollection;
//override the default one.    
SAPB1.CampaignBusinessPartnerCollection.get = function (index) {
    return SAPB1.CampaignBusinessPartner.create(this.array[index]);
}

SAPB1.CampaignBusinessPartnerCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.CampaignBusinessPartnerCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.CampaignBusinessPartner.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.CampaignBusinessPartnerCollection;
