var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.StockTransferLineCollection = function () {
}

SAPB1.StockTransferLineCollection.prototype = new SAPB1.Collection();
SAPB1.StockTransferLineCollection.prototype.constructor = SAPB1.StockTransferLineCollection;
//override the default one.    
SAPB1.StockTransferLineCollection.get = function (index) {
    return SAPB1.StockTransferLine.create(this.array[index]);
}

SAPB1.StockTransferLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.StockTransferLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.StockTransferLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.StockTransferLineCollection;
