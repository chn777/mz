var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DocumentInstallmentCollection = function () {
}

SAPB1.DocumentInstallmentCollection.prototype = new SAPB1.Collection();
SAPB1.DocumentInstallmentCollection.prototype.constructor = SAPB1.DocumentInstallmentCollection;
//override the default one.    
SAPB1.DocumentInstallmentCollection.get = function (index) {
    return SAPB1.DocumentInstallment.create(this.array[index]);
}

SAPB1.DocumentInstallmentCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DocumentInstallmentCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DocumentInstallment.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DocumentInstallmentCollection;
