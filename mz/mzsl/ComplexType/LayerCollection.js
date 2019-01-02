var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.LayerCollection = function () {
}

SAPB1.LayerCollection.prototype = new SAPB1.Collection();
SAPB1.LayerCollection.prototype.constructor = SAPB1.LayerCollection;
//override the default one.    
SAPB1.LayerCollection.get = function (index) {
    return SAPB1.Layer.create(this.array[index]);
}

SAPB1.LayerCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.LayerCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.Layer.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.LayerCollection;
