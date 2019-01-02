var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WTDEffectiveDateCollection = function () {
}

SAPB1.WTDEffectiveDateCollection.prototype = new SAPB1.Collection();
SAPB1.WTDEffectiveDateCollection.prototype.constructor = SAPB1.WTDEffectiveDateCollection;
//override the default one.    
SAPB1.WTDEffectiveDateCollection.get = function (index) {
    return SAPB1.WTDEffectiveDate.create(this.array[index]);
}

SAPB1.WTDEffectiveDateCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WTDEffectiveDateCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WTDEffectiveDate.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WTDEffectiveDateCollection;
