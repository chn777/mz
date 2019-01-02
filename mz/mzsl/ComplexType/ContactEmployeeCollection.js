var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ContactEmployeeCollection = function () {
}

SAPB1.ContactEmployeeCollection.prototype = new SAPB1.Collection();
SAPB1.ContactEmployeeCollection.prototype.constructor = SAPB1.ContactEmployeeCollection;
//override the default one.    
SAPB1.ContactEmployeeCollection.get = function (index) {
    return SAPB1.ContactEmployee.create(this.array[index]);
}

SAPB1.ContactEmployeeCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ContactEmployeeCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ContactEmployee.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ContactEmployeeCollection;
