var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ServiceCallBPAddressComponentCollection = function () {
}

SAPB1.ServiceCallBPAddressComponentCollection.prototype = new SAPB1.Collection();
SAPB1.ServiceCallBPAddressComponentCollection.prototype.constructor = SAPB1.ServiceCallBPAddressComponentCollection;
//override the default one.    
SAPB1.ServiceCallBPAddressComponentCollection.get = function (index) {
    return SAPB1.ServiceCallBPAddressComponent.create(this.array[index]);
}

SAPB1.ServiceCallBPAddressComponentCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ServiceCallBPAddressComponentCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ServiceCallBPAddressComponent.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ServiceCallBPAddressComponentCollection;
