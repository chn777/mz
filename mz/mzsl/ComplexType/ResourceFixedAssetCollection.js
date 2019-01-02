var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ResourceFixedAssetCollection = function () {
}

SAPB1.ResourceFixedAssetCollection.prototype = new SAPB1.Collection();
SAPB1.ResourceFixedAssetCollection.prototype.constructor = SAPB1.ResourceFixedAssetCollection;
//override the default one.    
SAPB1.ResourceFixedAssetCollection.get = function (index) {
    return SAPB1.ResourceFixedAsset.create(this.array[index]);
}

SAPB1.ResourceFixedAssetCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ResourceFixedAssetCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ResourceFixedAsset.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ResourceFixedAssetCollection;
