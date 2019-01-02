var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TeamCounterCollection = function () {
}

SAPB1.TeamCounterCollection.prototype = new SAPB1.Collection();
SAPB1.TeamCounterCollection.prototype.constructor = SAPB1.TeamCounterCollection;
//override the default one.    
SAPB1.TeamCounterCollection.get = function (index) {
    return SAPB1.TeamCounter.create(this.array[index]);
}

SAPB1.TeamCounterCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TeamCounterCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TeamCounter.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TeamCounterCollection;
