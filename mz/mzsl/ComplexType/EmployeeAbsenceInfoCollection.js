var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.EmployeeAbsenceInfoCollection = function () {
}

SAPB1.EmployeeAbsenceInfoCollection.prototype = new SAPB1.Collection();
SAPB1.EmployeeAbsenceInfoCollection.prototype.constructor = SAPB1.EmployeeAbsenceInfoCollection;
//override the default one.    
SAPB1.EmployeeAbsenceInfoCollection.get = function (index) {
    return SAPB1.EmployeeAbsenceInfo.create(this.array[index]);
}

SAPB1.EmployeeAbsenceInfoCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.EmployeeAbsenceInfoCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.EmployeeAbsenceInfo.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.EmployeeAbsenceInfoCollection;
