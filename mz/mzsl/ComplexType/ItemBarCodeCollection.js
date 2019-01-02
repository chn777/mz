var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ItemBarCodeCollection = function () {
}

SAPB1.ItemBarCodeCollection.prototype = new SAPB1.Collection();
SAPB1.ItemBarCodeCollection.prototype.constructor = SAPB1.ItemBarCodeCollection;
//override the default one.    
SAPB1.ItemBarCodeCollection.get = function (index) {
    return SAPB1.ItemBarCode.create(this.array[index]);
}

SAPB1.ItemBarCodeCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ItemBarCodeCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ItemBarCode.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ItemBarCodeCollection;
