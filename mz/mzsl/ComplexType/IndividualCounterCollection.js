var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.IndividualCounterCollection = function () {
}

SAPB1.IndividualCounterCollection.prototype = new SAPB1.Collection();
SAPB1.IndividualCounterCollection.prototype.constructor = SAPB1.IndividualCounterCollection;
//override the default one.    
SAPB1.IndividualCounterCollection.get = function (index) {
    return SAPB1.IndividualCounter.create(this.array[index]);
}

SAPB1.IndividualCounterCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.IndividualCounterCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.IndividualCounter.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.IndividualCounterCollection;
