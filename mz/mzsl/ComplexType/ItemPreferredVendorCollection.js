var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ItemPreferredVendorCollection = function () {
}

SAPB1.ItemPreferredVendorCollection.prototype = new SAPB1.Collection();
SAPB1.ItemPreferredVendorCollection.prototype.constructor = SAPB1.ItemPreferredVendorCollection;
//override the default one.    
SAPB1.ItemPreferredVendorCollection.get = function (index) {
    return SAPB1.ItemPreferredVendor.create(this.array[index]);
}

SAPB1.ItemPreferredVendorCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ItemPreferredVendorCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ItemPreferredVendor.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ItemPreferredVendorCollection;
