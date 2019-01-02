var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BPAddressCollection = function () {
}

SAPB1.BPAddressCollection.prototype = new SAPB1.Collection();
SAPB1.BPAddressCollection.prototype.constructor = SAPB1.BPAddressCollection;
//override the default one.    
SAPB1.BPAddressCollection.get = function (index) {
    return SAPB1.BPAddress.create(this.array[index]);
}

SAPB1.BPAddressCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BPAddressCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BPAddress.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BPAddressCollection;
