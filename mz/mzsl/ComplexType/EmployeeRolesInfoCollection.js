var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.EmployeeRolesInfoCollection = function () {
}

SAPB1.EmployeeRolesInfoCollection.prototype = new SAPB1.Collection();
SAPB1.EmployeeRolesInfoCollection.prototype.constructor = SAPB1.EmployeeRolesInfoCollection;
//override the default one.    
SAPB1.EmployeeRolesInfoCollection.get = function (index) {
    return SAPB1.EmployeeRolesInfo.create(this.array[index]);
}

SAPB1.EmployeeRolesInfoCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.EmployeeRolesInfoCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.EmployeeRolesInfo.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.EmployeeRolesInfoCollection;
