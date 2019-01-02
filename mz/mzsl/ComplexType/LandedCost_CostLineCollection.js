var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.LandedCost_CostLineCollection = function () {
}

SAPB1.LandedCost_CostLineCollection.prototype = new SAPB1.Collection();
SAPB1.LandedCost_CostLineCollection.prototype.constructor = SAPB1.LandedCost_CostLineCollection;
//override the default one.    
SAPB1.LandedCost_CostLineCollection.get = function (index) {
    return SAPB1.LandedCost_CostLine.create(this.array[index]);
}

SAPB1.LandedCost_CostLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.LandedCost_CostLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.LandedCost_CostLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.LandedCost_CostLineCollection;
