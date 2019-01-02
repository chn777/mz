var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.StockTransferLinesBinAllocationCollection = function () {
}

SAPB1.StockTransferLinesBinAllocationCollection.prototype = new SAPB1.Collection();
SAPB1.StockTransferLinesBinAllocationCollection.prototype.constructor = SAPB1.StockTransferLinesBinAllocationCollection;
//override the default one.    
SAPB1.StockTransferLinesBinAllocationCollection.get = function (index) {
    return SAPB1.StockTransferLinesBinAllocation.create(this.array[index]);
}

SAPB1.StockTransferLinesBinAllocationCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.StockTransferLinesBinAllocationCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.StockTransferLinesBinAllocation.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.StockTransferLinesBinAllocationCollection;
