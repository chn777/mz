var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WTGroupsCollection = function () {
}

SAPB1.WTGroupsCollection.prototype = new SAPB1.Collection();
SAPB1.WTGroupsCollection.prototype.constructor = SAPB1.WTGroupsCollection;
//override the default one.    
SAPB1.WTGroupsCollection.get = function (index) {
    return SAPB1.WTGroups.create(this.array[index]);
}

SAPB1.WTGroupsCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WTGroupsCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WTGroups.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WTGroupsCollection;
