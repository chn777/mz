var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DocExpenseTaxJurisdictionCollection = function () {
}

SAPB1.DocExpenseTaxJurisdictionCollection.prototype = new SAPB1.Collection();
SAPB1.DocExpenseTaxJurisdictionCollection.prototype.constructor = SAPB1.DocExpenseTaxJurisdictionCollection;
//override the default one.    
SAPB1.DocExpenseTaxJurisdictionCollection.get = function (index) {
    return SAPB1.DocExpenseTaxJurisdiction.create(this.array[index]);
}

SAPB1.DocExpenseTaxJurisdictionCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DocExpenseTaxJurisdictionCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DocExpenseTaxJurisdiction.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DocExpenseTaxJurisdictionCollection;
