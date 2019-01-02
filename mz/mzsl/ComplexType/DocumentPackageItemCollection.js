var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DocumentPackageItemCollection = function () {
}

SAPB1.DocumentPackageItemCollection.prototype = new SAPB1.Collection();
SAPB1.DocumentPackageItemCollection.prototype.constructor = SAPB1.DocumentPackageItemCollection;
//override the default one.    
SAPB1.DocumentPackageItemCollection.get = function (index) {
    return SAPB1.DocumentPackageItem.create(this.array[index]);
}

SAPB1.DocumentPackageItemCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DocumentPackageItemCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DocumentPackageItem.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DocumentPackageItemCollection;
