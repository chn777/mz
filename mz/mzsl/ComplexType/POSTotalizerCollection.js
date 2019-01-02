var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.POSTotalizerCollection = function () {
}

SAPB1.POSTotalizerCollection.prototype = new SAPB1.Collection();
SAPB1.POSTotalizerCollection.prototype.constructor = SAPB1.POSTotalizerCollection;
//override the default one.    
SAPB1.POSTotalizerCollection.get = function (index) {
    return SAPB1.POSTotalizer.create(this.array[index]);
}

SAPB1.POSTotalizerCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.POSTotalizerCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.POSTotalizer.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.POSTotalizerCollection;
