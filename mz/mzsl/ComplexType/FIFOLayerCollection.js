var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.FIFOLayerCollection = function () {
}

SAPB1.FIFOLayerCollection.prototype = new SAPB1.Collection();
SAPB1.FIFOLayerCollection.prototype.constructor = SAPB1.FIFOLayerCollection;
//override the default one.    
SAPB1.FIFOLayerCollection.get = function (index) {
    return SAPB1.FIFOLayer.create(this.array[index]);
}

SAPB1.FIFOLayerCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.FIFOLayerCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.FIFOLayer.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.FIFOLayerCollection;
