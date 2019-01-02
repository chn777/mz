var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.WTDFreightCollection = function () {
}

SAPB1.WTDFreightCollection.prototype = new SAPB1.Collection();
SAPB1.WTDFreightCollection.prototype.constructor = SAPB1.WTDFreightCollection;
//override the default one.    
SAPB1.WTDFreightCollection.get = function (index) {
    return SAPB1.WTDFreight.create(this.array[index]);
}

SAPB1.WTDFreightCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.WTDFreightCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.WTDFreight.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.WTDFreightCollection;
