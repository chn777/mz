var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.UserPermissionItemCollection = function () {
}

SAPB1.UserPermissionItemCollection.prototype = new SAPB1.Collection();
SAPB1.UserPermissionItemCollection.prototype.constructor = SAPB1.UserPermissionItemCollection;
//override the default one.    
SAPB1.UserPermissionItemCollection.get = function (index) {
    return SAPB1.UserPermissionItem.create(this.array[index]);
}

SAPB1.UserPermissionItemCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.UserPermissionItemCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.UserPermissionItem.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.UserPermissionItemCollection;
