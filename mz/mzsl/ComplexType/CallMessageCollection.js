var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.CallMessageCollection = function () {
}

SAPB1.CallMessageCollection.prototype = new SAPB1.Collection();
SAPB1.CallMessageCollection.prototype.constructor = SAPB1.CallMessageCollection;
//override the default one.    
SAPB1.CallMessageCollection.get = function (index) {
    return SAPB1.CallMessage.create(this.array[index]);
}

SAPB1.CallMessageCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.CallMessageCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.CallMessage.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.CallMessageCollection;
