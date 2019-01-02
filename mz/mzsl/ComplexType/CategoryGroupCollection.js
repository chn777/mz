var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.CategoryGroupCollection = function () {
}

SAPB1.CategoryGroupCollection.prototype = new SAPB1.Collection();
SAPB1.CategoryGroupCollection.prototype.constructor = SAPB1.CategoryGroupCollection;
//override the default one.    
SAPB1.CategoryGroupCollection.get = function (index) {
    return SAPB1.CategoryGroup.create(this.array[index]);
}

SAPB1.CategoryGroupCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.CategoryGroupCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.CategoryGroup.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.CategoryGroupCollection;
