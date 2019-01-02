var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DocumentPackageCollection = function () {
}

SAPB1.DocumentPackageCollection.prototype = new SAPB1.Collection();
SAPB1.DocumentPackageCollection.prototype.constructor = SAPB1.DocumentPackageCollection;
//override the default one.    
SAPB1.DocumentPackageCollection.get = function (index) {
    return SAPB1.DocumentPackage.create(this.array[index]);
}

SAPB1.DocumentPackageCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DocumentPackageCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DocumentPackage.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DocumentPackageCollection;
