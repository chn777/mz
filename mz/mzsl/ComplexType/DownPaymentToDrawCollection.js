var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DownPaymentToDrawCollection = function () {
}

SAPB1.DownPaymentToDrawCollection.prototype = new SAPB1.Collection();
SAPB1.DownPaymentToDrawCollection.prototype.constructor = SAPB1.DownPaymentToDrawCollection;
//override the default one.    
SAPB1.DownPaymentToDrawCollection.get = function (index) {
    return SAPB1.DownPaymentToDraw.create(this.array[index]);
}

SAPB1.DownPaymentToDrawCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DownPaymentToDrawCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DownPaymentToDraw.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DownPaymentToDrawCollection;
