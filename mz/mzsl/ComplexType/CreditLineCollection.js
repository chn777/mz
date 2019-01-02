var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.CreditLineCollection = function () {
}

SAPB1.CreditLineCollection.prototype = new SAPB1.Collection();
SAPB1.CreditLineCollection.prototype.constructor = SAPB1.CreditLineCollection;
//override the default one.    
SAPB1.CreditLineCollection.get = function (index) {
    return SAPB1.CreditLine.create(this.array[index]);
}

SAPB1.CreditLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.CreditLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.CreditLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.CreditLineCollection;
