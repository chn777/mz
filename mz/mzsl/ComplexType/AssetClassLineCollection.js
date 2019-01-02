var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.AssetClassLineCollection = function () {
}

SAPB1.AssetClassLineCollection.prototype = new SAPB1.Collection();
SAPB1.AssetClassLineCollection.prototype.constructor = SAPB1.AssetClassLineCollection;
//override the default one.    
SAPB1.AssetClassLineCollection.get = function (index) {
    return SAPB1.AssetClassLine.create(this.array[index]);
}

SAPB1.AssetClassLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.AssetClassLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.AssetClassLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.AssetClassLineCollection;
