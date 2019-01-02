var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.SerialNumberCollection = function () {
}

SAPB1.SerialNumberCollection.prototype = new SAPB1.Collection();
SAPB1.SerialNumberCollection.prototype.constructor = SAPB1.SerialNumberCollection;
//override the default one.    
SAPB1.SerialNumberCollection.get = function (index) {
    return SAPB1.SerialNumber.create(this.array[index]);
}

SAPB1.SerialNumberCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.SerialNumberCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.SerialNumber.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.SerialNumberCollection;
