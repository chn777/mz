var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.KPI_ItemLineCollection = function () {
}

SAPB1.KPI_ItemLineCollection.prototype = new SAPB1.Collection();
SAPB1.KPI_ItemLineCollection.prototype.constructor = SAPB1.KPI_ItemLineCollection;
//override the default one.    
SAPB1.KPI_ItemLineCollection.get = function (index) {
    return SAPB1.KPI_ItemLine.create(this.array[index]);
}

SAPB1.KPI_ItemLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.KPI_ItemLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.KPI_ItemLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.KPI_ItemLineCollection;
