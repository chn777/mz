var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ProductTreeLineCollection = function () {
}

SAPB1.ProductTreeLineCollection.prototype = new SAPB1.Collection();
SAPB1.ProductTreeLineCollection.prototype.constructor = SAPB1.ProductTreeLineCollection;
//override the default one.    
SAPB1.ProductTreeLineCollection.get = function (index) {
    return SAPB1.ProductTreeLine.create(this.array[index]);
}

SAPB1.ProductTreeLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ProductTreeLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ProductTreeLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ProductTreeLineCollection;
