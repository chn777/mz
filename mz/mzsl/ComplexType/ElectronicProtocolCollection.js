var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ElectronicProtocolCollection = function () {
}

SAPB1.ElectronicProtocolCollection.prototype = new SAPB1.Collection();
SAPB1.ElectronicProtocolCollection.prototype.constructor = SAPB1.ElectronicProtocolCollection;
//override the default one.    
SAPB1.ElectronicProtocolCollection.get = function (index) {
    return SAPB1.ElectronicProtocol.create(this.array[index]);
}

SAPB1.ElectronicProtocolCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ElectronicProtocolCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ElectronicProtocol.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ElectronicProtocolCollection;
