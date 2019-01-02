var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ItemUoMPackageCollection = function () {
}

SAPB1.ItemUoMPackageCollection.prototype = new SAPB1.Collection();
SAPB1.ItemUoMPackageCollection.prototype.constructor = SAPB1.ItemUoMPackageCollection;
//override the default one.    
SAPB1.ItemUoMPackageCollection.get = function (index) {
    return SAPB1.ItemUoMPackage.create(this.array[index]);
}

SAPB1.ItemUoMPackageCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ItemUoMPackageCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ItemUoMPackage.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ItemUoMPackageCollection;
