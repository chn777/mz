var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ItemDistributionRuleCollection = function () {
}

SAPB1.ItemDistributionRuleCollection.prototype = new SAPB1.Collection();
SAPB1.ItemDistributionRuleCollection.prototype.constructor = SAPB1.ItemDistributionRuleCollection;
//override the default one.    
SAPB1.ItemDistributionRuleCollection.get = function (index) {
    return SAPB1.ItemDistributionRule.create(this.array[index]);
}

SAPB1.ItemDistributionRuleCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ItemDistributionRuleCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ItemDistributionRule.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ItemDistributionRuleCollection;
