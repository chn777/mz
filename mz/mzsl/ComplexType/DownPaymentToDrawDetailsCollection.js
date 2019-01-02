var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DownPaymentToDrawDetailsCollection = function () {
}

SAPB1.DownPaymentToDrawDetailsCollection.prototype = new SAPB1.Collection();
SAPB1.DownPaymentToDrawDetailsCollection.prototype.constructor = SAPB1.DownPaymentToDrawDetailsCollection;
//override the default one.    
SAPB1.DownPaymentToDrawDetailsCollection.get = function (index) {
    return SAPB1.DownPaymentToDrawDetails.create(this.array[index]);
}

SAPB1.DownPaymentToDrawDetailsCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DownPaymentToDrawDetailsCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DownPaymentToDrawDetails.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DownPaymentToDrawDetailsCollection;
