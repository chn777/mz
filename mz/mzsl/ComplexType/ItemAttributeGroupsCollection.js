var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ItemAttributeGroupsCollection = function () {
}

SAPB1.ItemAttributeGroupsCollection.prototype = new SAPB1.Collection();
SAPB1.ItemAttributeGroupsCollection.prototype.constructor = SAPB1.ItemAttributeGroupsCollection;
//override the default one.    
SAPB1.ItemAttributeGroupsCollection.get = function (index) {
    return SAPB1.ItemAttributeGroups.create(this.array[index]);
}

SAPB1.ItemAttributeGroupsCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ItemAttributeGroupsCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ItemAttributeGroups.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ItemAttributeGroupsCollection;
