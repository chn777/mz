var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.CampaignItemCollection = function () {
}

SAPB1.CampaignItemCollection.prototype = new SAPB1.Collection();
SAPB1.CampaignItemCollection.prototype.constructor = SAPB1.CampaignItemCollection;
//override the default one.    
SAPB1.CampaignItemCollection.get = function (index) {
    return SAPB1.CampaignItem.create(this.array[index]);
}

SAPB1.CampaignItemCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.CampaignItemCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.CampaignItem.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.CampaignItemCollection;
