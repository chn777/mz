var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.UserObjectMD_ChildTableCollection = function () {
}

SAPB1.UserObjectMD_ChildTableCollection.prototype = new SAPB1.Collection();
SAPB1.UserObjectMD_ChildTableCollection.prototype.constructor = SAPB1.UserObjectMD_ChildTableCollection;
//override the default one.    
SAPB1.UserObjectMD_ChildTableCollection.get = function (index) {
    return SAPB1.UserObjectMD_ChildTable.create(this.array[index]);
}

SAPB1.UserObjectMD_ChildTableCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.UserObjectMD_ChildTableCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.UserObjectMD_ChildTable.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.UserObjectMD_ChildTableCollection;
