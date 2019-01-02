var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ProductionOrdersStageCollection = function () {
}

SAPB1.ProductionOrdersStageCollection.prototype = new SAPB1.Collection();
SAPB1.ProductionOrdersStageCollection.prototype.constructor = SAPB1.ProductionOrdersStageCollection;
//override the default one.    
SAPB1.ProductionOrdersStageCollection.get = function (index) {
    return SAPB1.ProductionOrdersStage.create(this.array[index]);
}

SAPB1.ProductionOrdersStageCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ProductionOrdersStageCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ProductionOrdersStage.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ProductionOrdersStageCollection;
