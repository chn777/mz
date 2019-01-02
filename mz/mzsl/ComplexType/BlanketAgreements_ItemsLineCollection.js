var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.BlanketAgreements_ItemsLineCollection = function () {
}

SAPB1.BlanketAgreements_ItemsLineCollection.prototype = new SAPB1.Collection();
SAPB1.BlanketAgreements_ItemsLineCollection.prototype.constructor = SAPB1.BlanketAgreements_ItemsLineCollection;
//override the default one.    
SAPB1.BlanketAgreements_ItemsLineCollection.get = function (index) {
    return SAPB1.BlanketAgreements_ItemsLine.create(this.array[index]);
}

SAPB1.BlanketAgreements_ItemsLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.BlanketAgreements_ItemsLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.BlanketAgreements_ItemsLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.BlanketAgreements_ItemsLineCollection;
