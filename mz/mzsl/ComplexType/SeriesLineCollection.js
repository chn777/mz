var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.SeriesLineCollection = function () {
}

SAPB1.SeriesLineCollection.prototype = new SAPB1.Collection();
SAPB1.SeriesLineCollection.prototype.constructor = SAPB1.SeriesLineCollection;
//override the default one.    
SAPB1.SeriesLineCollection.get = function (index) {
    return SAPB1.SeriesLine.create(this.array[index]);
}

SAPB1.SeriesLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.SeriesLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.SeriesLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.SeriesLineCollection;
