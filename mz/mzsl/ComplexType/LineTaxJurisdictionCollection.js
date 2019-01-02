var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.LineTaxJurisdictionCollection = function () {
}

SAPB1.LineTaxJurisdictionCollection.prototype = new SAPB1.Collection();
SAPB1.LineTaxJurisdictionCollection.prototype.constructor = SAPB1.LineTaxJurisdictionCollection;
//override the default one.    
SAPB1.LineTaxJurisdictionCollection.get = function (index) {
    return SAPB1.LineTaxJurisdiction.create(this.array[index]);
}

SAPB1.LineTaxJurisdictionCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.LineTaxJurisdictionCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.LineTaxJurisdiction.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.LineTaxJurisdictionCollection;
