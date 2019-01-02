var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ResourceEmployeeCollection = function () {
}

SAPB1.ResourceEmployeeCollection.prototype = new SAPB1.Collection();
SAPB1.ResourceEmployeeCollection.prototype.constructor = SAPB1.ResourceEmployeeCollection;
//override the default one.    
SAPB1.ResourceEmployeeCollection.get = function (index) {
    return SAPB1.ResourceEmployee.create(this.array[index]);
}

SAPB1.ResourceEmployeeCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ResourceEmployeeCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ResourceEmployee.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ResourceEmployeeCollection;
