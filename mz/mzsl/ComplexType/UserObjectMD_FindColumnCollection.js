var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.UserObjectMD_FindColumnCollection = function () {
}

SAPB1.UserObjectMD_FindColumnCollection.prototype = new SAPB1.Collection();
SAPB1.UserObjectMD_FindColumnCollection.prototype.constructor = SAPB1.UserObjectMD_FindColumnCollection;
//override the default one.    
SAPB1.UserObjectMD_FindColumnCollection.get = function (index) {
    return SAPB1.UserObjectMD_FindColumn.create(this.array[index]);
}

SAPB1.UserObjectMD_FindColumnCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.UserObjectMD_FindColumnCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.UserObjectMD_FindColumn.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.UserObjectMD_FindColumnCollection;
