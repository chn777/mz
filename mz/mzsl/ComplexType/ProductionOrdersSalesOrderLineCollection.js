var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ProductionOrdersSalesOrderLineCollection = function () {
}

SAPB1.ProductionOrdersSalesOrderLineCollection.prototype = new SAPB1.Collection();
SAPB1.ProductionOrdersSalesOrderLineCollection.prototype.constructor = SAPB1.ProductionOrdersSalesOrderLineCollection;
//override the default one.    
SAPB1.ProductionOrdersSalesOrderLineCollection.get = function (index) {
    return SAPB1.ProductionOrdersSalesOrderLine.create(this.array[index]);
}

SAPB1.ProductionOrdersSalesOrderLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ProductionOrdersSalesOrderLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ProductionOrdersSalesOrderLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ProductionOrdersSalesOrderLineCollection;
