var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DistributionRuleLineCollection = function () {
}

SAPB1.DistributionRuleLineCollection.prototype = new SAPB1.Collection();
SAPB1.DistributionRuleLineCollection.prototype.constructor = SAPB1.DistributionRuleLineCollection;
//override the default one.    
SAPB1.DistributionRuleLineCollection.get = function (index) {
    return SAPB1.DistributionRuleLine.create(this.array[index]);
}

SAPB1.DistributionRuleLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DistributionRuleLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DistributionRuleLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DistributionRuleLineCollection;
