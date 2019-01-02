var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.ServiceCallSchedulingCollection = function () {
}

SAPB1.ServiceCallSchedulingCollection.prototype = new SAPB1.Collection();
SAPB1.ServiceCallSchedulingCollection.prototype.constructor = SAPB1.ServiceCallSchedulingCollection;
//override the default one.    
SAPB1.ServiceCallSchedulingCollection.get = function (index) {
    return SAPB1.ServiceCallScheduling.create(this.array[index]);
}

SAPB1.ServiceCallSchedulingCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.ServiceCallSchedulingCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.ServiceCallScheduling.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.ServiceCallSchedulingCollection;
