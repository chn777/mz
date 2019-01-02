var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TrackingNoteBrokerCollection = function () {
}

SAPB1.TrackingNoteBrokerCollection.prototype = new SAPB1.Collection();
SAPB1.TrackingNoteBrokerCollection.prototype.constructor = SAPB1.TrackingNoteBrokerCollection;
//override the default one.    
SAPB1.TrackingNoteBrokerCollection.get = function (index) {
    return SAPB1.TrackingNoteBroker.create(this.array[index]);
}

SAPB1.TrackingNoteBrokerCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TrackingNoteBrokerCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TrackingNoteBroker.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TrackingNoteBrokerCollection;
