var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.EmployeeSavingsPaymentInfoCollection = function () {
}

SAPB1.EmployeeSavingsPaymentInfoCollection.prototype = new SAPB1.Collection();
SAPB1.EmployeeSavingsPaymentInfoCollection.prototype.constructor = SAPB1.EmployeeSavingsPaymentInfoCollection;
//override the default one.    
SAPB1.EmployeeSavingsPaymentInfoCollection.get = function (index) {
    return SAPB1.EmployeeSavingsPaymentInfo.create(this.array[index]);
}

SAPB1.EmployeeSavingsPaymentInfoCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.EmployeeSavingsPaymentInfoCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.EmployeeSavingsPaymentInfo.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.EmployeeSavingsPaymentInfoCollection;
