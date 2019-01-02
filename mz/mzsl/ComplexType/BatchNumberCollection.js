var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BatchNumberCollection = function () {
}

SAPB1.BatchNumberCollection.prototype = new SAPB1.Collection();
SAPB1.BatchNumberCollection.prototype.constructor = SAPB1.BatchNumberCollection;
//override the default one.    
SAPB1.BatchNumberCollection.get = function (index) {
    return SAPB1.BatchNumber.create(this.array[index]);
}

SAPB1.BatchNumberCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BatchNumberCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BatchNumber.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BatchNumberCollection;
