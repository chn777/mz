var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.DunningTermLineCollection = function () {
}

SAPB1.DunningTermLineCollection.prototype = new SAPB1.Collection();
SAPB1.DunningTermLineCollection.prototype.constructor = SAPB1.DunningTermLineCollection;
//override the default one.    
SAPB1.DunningTermLineCollection.get = function (index) {
    return SAPB1.DunningTermLine.create(this.array[index]);
}

SAPB1.DunningTermLineCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.DunningTermLineCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.DunningTermLine.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.DunningTermLineCollection;
