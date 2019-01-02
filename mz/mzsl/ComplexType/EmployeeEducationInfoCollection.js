var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.EmployeeEducationInfoCollection = function () {
}

SAPB1.EmployeeEducationInfoCollection.prototype = new SAPB1.Collection();
SAPB1.EmployeeEducationInfoCollection.prototype.constructor = SAPB1.EmployeeEducationInfoCollection;
//override the default one.    
SAPB1.EmployeeEducationInfoCollection.get = function (index) {
    return SAPB1.EmployeeEducationInfo.create(this.array[index]);
}

SAPB1.EmployeeEducationInfoCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.EmployeeEducationInfoCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.EmployeeEducationInfo.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.EmployeeEducationInfoCollection;
