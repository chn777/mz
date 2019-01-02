var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BlanketAgreements_DetailsLineCollection = function () {
}

SAPB1.BlanketAgreements_DetailsLineCollection.prototype = new SAPB1.Collection();
SAPB1.BlanketAgreements_DetailsLineCollection.prototype.constructor = SAPB1.BlanketAgreements_DetailsLineCollection;
//override the default one.    
SAPB1.BlanketAgreements_DetailsLineCollection.get = function (index) {
    return SAPB1.BlanketAgreements_DetailsLine.create(this.array[index]);
}

SAPB1.BlanketAgreements_DetailsLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BlanketAgreements_DetailsLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BlanketAgreements_DetailsLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BlanketAgreements_DetailsLineCollection;
