var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.UserPermissionFormCollection = function () {
}

SAPB1.UserPermissionFormCollection.prototype = new SAPB1.Collection();
SAPB1.UserPermissionFormCollection.prototype.constructor = SAPB1.UserPermissionFormCollection;
//override the default one.    
SAPB1.UserPermissionFormCollection.get = function (index) {
    return SAPB1.UserPermissionForm.create(this.array[index]);
}

SAPB1.UserPermissionFormCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.UserPermissionFormCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.UserPermissionForm.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.UserPermissionFormCollection;
