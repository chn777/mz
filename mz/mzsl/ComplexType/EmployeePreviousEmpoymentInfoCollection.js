var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.EmployeePreviousEmpoymentInfoCollection = function () {
}

SAPB1.EmployeePreviousEmpoymentInfoCollection.prototype = new SAPB1.Collection();
SAPB1.EmployeePreviousEmpoymentInfoCollection.prototype.constructor = SAPB1.EmployeePreviousEmpoymentInfoCollection;
//override the default one.    
SAPB1.EmployeePreviousEmpoymentInfoCollection.get = function (index) {
    return SAPB1.EmployeePreviousEmpoymentInfo.create(this.array[index]);
}

SAPB1.EmployeePreviousEmpoymentInfoCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.EmployeePreviousEmpoymentInfoCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.EmployeePreviousEmpoymentInfo.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.EmployeePreviousEmpoymentInfoCollection;
