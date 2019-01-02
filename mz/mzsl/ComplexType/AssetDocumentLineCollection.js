var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.AssetDocumentLineCollection = function () {
}

SAPB1.AssetDocumentLineCollection.prototype = new SAPB1.Collection();
SAPB1.AssetDocumentLineCollection.prototype.constructor = SAPB1.AssetDocumentLineCollection;
//override the default one.    
SAPB1.AssetDocumentLineCollection.get = function (index) {
    return SAPB1.AssetDocumentLine.create(this.array[index]);
}

SAPB1.AssetDocumentLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.AssetDocumentLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.AssetDocumentLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.AssetDocumentLineCollection;
