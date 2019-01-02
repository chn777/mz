var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.PickListsLineCollection = function () {
}

SAPB1.PickListsLineCollection.prototype = new SAPB1.Collection();
SAPB1.PickListsLineCollection.prototype.constructor = SAPB1.PickListsLineCollection;
//override the default one.    
SAPB1.PickListsLineCollection.get = function (index) {
    return SAPB1.PickListsLine.create(this.array[index]);
}

SAPB1.PickListsLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.PickListsLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.PickListsLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.PickListsLineCollection;
