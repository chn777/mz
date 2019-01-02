var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.LineExpenseTaxJurisdictionCollection = function () {
}

SAPB1.LineExpenseTaxJurisdictionCollection.prototype = new SAPB1.Collection();
SAPB1.LineExpenseTaxJurisdictionCollection.prototype.constructor = SAPB1.LineExpenseTaxJurisdictionCollection;
//override the default one.    
SAPB1.LineExpenseTaxJurisdictionCollection.get = function (index) {
    return SAPB1.LineExpenseTaxJurisdiction.create(this.array[index]);
}

SAPB1.LineExpenseTaxJurisdictionCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.LineExpenseTaxJurisdictionCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.LineExpenseTaxJurisdiction.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.LineExpenseTaxJurisdictionCollection;
